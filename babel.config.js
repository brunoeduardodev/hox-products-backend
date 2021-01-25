module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@infra': './src/infra/',
          '@config': './src/config/',
          '@schemas': './src/schemas/',
          '@controllers': './src/controllers/',
          '@middlewares': './src/middlewares/'
        }
      }
    ]
  ]
}
