#!/bin/bash

# This script needs to be run when we want to update the proto folders.
# Note: It needs to be run from the root of the repo
# Usage: ./scripts/setup-proto.sh

# Make sure all submodules are initialized
git submodule update --init --recursive

for submodule in cosmos ics23 ibc-go atomone gaia; do
  echo "Updating and setting up sparse-checkout for $submodule..."

  (
    cd $submodule &&

    # Use correct branch for each submodule
    branch="main"
    [ "$submodule" = "cosmos" ] && branch="v0.50.13"
    [ "$submodule" = "ibc-go" ] && branch="v8.7.0"
    [ "$submodule" = "ics23" ] && branch="master"

    git fetch origin &&
    git checkout $branch &&
    git pull origin $branch &&

    # only include proto/
    git sparse-checkout init &&
    git sparse-checkout set proto &&
    git read-tree -mu HEAD
  ) || {
    echo "❌ Error processing $submodule"
    exit 1
  }
done

echo "✅ Submodules updated and sparse-checked out (proto/ only)."

# Commit updated submodule references
git add cosmos ics23 ibc-go atomone gaia
# git commit -m "Update submodules to latest main"
# git push
