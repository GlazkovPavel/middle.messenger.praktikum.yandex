const path = require("path");
module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: "main.js",
  },
  devServer: {
    hot: true, // Горячая перезагрузка
    open: true, // Автоматическое открытие браузера при запуске dev сервера
    static: {
      // Отслеживание изменений статических файлов
      watch: true,
      directory: path.resolve(__dirname, 'dist'),
    },
    historyApiFallback: true, // Открытие index.html после обновления страницы взамен URL
    compress: true, // gzip
    port: 3000,
    client: {
      // Браузерные уведомления о возникших проблемах
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
  },
};
