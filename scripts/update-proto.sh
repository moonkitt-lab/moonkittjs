#!/bin/bash

# This script needs to be run when we want to update the proto folders.
# Note: It needs to be run from the root of the repo
# Usage: ./scripts/update-proto.sh
#
# proto/cosmwasm is vendored from https://github.com/CosmWasm/wasmd (proto/cosmwasm),
# at the wasmd version of the same gaia go.mod (gaia v28.3.1: wasmd v0.60.9).

# Make sure all submodules are initialized
git submodule update --init --recursive

for submodule in cosmos ics23 ibc-go atomone gaia; do
  echo "Updating and setting up sparse-checkout for $submodule..."

  (
    cd $submodule &&

    # Use the versions pinned by the gaia release in its go.mod
    # (gaia v28.3.1: cosmos-sdk v0.53.4 through its replace directive, ibc-go v10.7.0)
    ref="main"
    [ "$submodule" = "gaia" ] && ref="v28.3.1"
    [ "$submodule" = "cosmos" ] && ref="v0.53.4"
    [ "$submodule" = "ibc-go" ] && ref="v10.7.0"
    [ "$submodule" = "ics23" ] && ref="a324422529b8c00ead00b4dcee825867c494cddd"
    [ "$submodule" = "atomone" ] && ref="bcd87ecbb9f28654185d118af44b39a5454937e7"

    git fetch origin --tags &&
    git checkout $ref &&

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
