import babel from 'rollup-plugin-babel'

var babelOptions = {
  presets: [
    ["es2015", {"modules": false}]
  ],
  exclude: 'node_modules/**'
}

export default {
  entry: 'src/validator-laravel.js',
  format: 'cjs',
  dest: 'dist/Validator.js',
  plugins: [ babel(babelOptions) ]
}
