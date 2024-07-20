module.exports = {
  pages: {
    popup: {
      template: 'public/popup.html',
      entry: './src/popup.js',
      title: 'Emails Extractor'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'public/background.js'
        }
      }
    }
  }
}