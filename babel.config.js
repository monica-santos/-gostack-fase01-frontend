module.exports = {
  presets: [
    '@babel/preset-env', // transpila de acordo com o ambiente em que a aplicação está sendo executada
    '@babel/preset-react' // adiciona as funcionalidades do react
  ],
  plugins: ['@babel/plugin-transform-runtime']
}
