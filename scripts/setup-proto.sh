#!/bin/bash

# This script needs to be run after checkint out the repo.
# Note: It needs to be run from the root of the repo
# Usage: ./scripts/setup-proto.sh

# Initialize and update submodules
git submodule update --init --recursive

# Set up sparse-checkout for each submodule
for submodule in cosmos ics23 ibc-go atomone; do
  echo "Setting up sparse-checkout for $submodule..."
  (cd $submodule && 
   git sparse-checkout init &&
   git sparse-checkout set proto &&
   git read-tree -mu HEAD)
done

echo "Proto setup complete!"