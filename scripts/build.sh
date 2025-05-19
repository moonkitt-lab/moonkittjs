#!/bin/bash

# to run codegen: npm run codegen
npm run codegen

# to build: npm run build
npm run build

# to test: npm pack, then on the other repo: change the package.json to point to the local package: "file:/path/to/moonkittjs-x.y.z.tgz" then npm install
npm pack

# when we confirm everything works fine
npm publish