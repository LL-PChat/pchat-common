import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';


export default {
  input: 'src/index.ts',
output: [
    {
      file: 'build/bundle.js',
      format: 'umd',
      name: 'G3JS',
      indent: '\t',
    },
  ],
  plugins: [
    resolve({
      mainFields: ['module'],
      //preferBuiltins: true,
    }),
    commonjs({
      exclude: [
        'node_modules/**',
      ]
    }),
    typescript({
      typescript: require('typescript'),
      clean: true //NOTE rollup-plugin-typescript2 has problems with its cache if other plugins use async/await, like rollup-plugin-copy. Current fix is to clean cache.
    }),
    json({
      // All JSON files will be parsed by default,
      // but you can also specifically include/exclude files
      //include: 'node_modules/**',
      //exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true,
      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: '  ',
      // ignores indent and generates the smallest code
      compact: true,
      // generate a named export for every property of the JSON object
      namedExports: true
    })
  ]
}
