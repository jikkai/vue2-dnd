export default {
  entry: './src/index.js',
  plugins: [
    require('rollup-plugin-uglify')(),
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**'
    })
  ],
  format: 'umd',
  moduleName: "Vue2Dnd",
  dest: './lib/index.js'
}