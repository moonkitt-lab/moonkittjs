// Marks dist/esm as an ES module tree, so that Node, Vite and Workers load the
// .js files there as ESM while the rest of dist stays CommonJS.
const { writeFileSync } = require('fs');
const { join } = require('path');

writeFileSync(
  join(__dirname, '../dist/esm/package.json'),
  JSON.stringify({ type: 'module' }, null, 2) + '\n'
);
