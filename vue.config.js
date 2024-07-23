const path = require('path');

module.exports = {
  pages: {
    popup: {
      // La entrada es el nuevo archivo `popup.js` en `src/popup`
      entry: 'src/popup/popup.js',
      // La plantilla es el nuevo archivo `popup.html` en `src/popup`
      template: 'src/popup/popup.html',
      // El archivo de salida se llamará `popup.html` y se colocará en la carpeta `dist`
      filename: 'popup.html'
    }
  },
  configureWebpack: {
    entry: {
      // Configurar el script de fondo
      background: './public/background.js',
    },
    output: {
      // Definir los nombres de los archivos de salida
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  },
  chainWebpack: config => {
    // Configurar el manejo de los archivos HTML
    config.plugin('html-popup')
      .tap(args => {
        args[0].chunks = ['popup'];
        return args;
      });

    // Evitar la generación automática de HTML en la carpeta raíz
    config.plugins.delete('html');

    // Desactivar la inyección automática de CSS en los archivos HTML
    config.plugins.delete('preload-popup');
    config.plugins.delete('prefetch-popup');
  },
  // Configurar la salida para que coincida con la carpeta `dist`
  outputDir: 'dist',
  assetsDir: 'assets',
  // Definir la carpeta pública como `public`
  publicPath: './',
};
