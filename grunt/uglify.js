/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
 * See the LICENSE file for more details.
 */

module.exports = {
  options: {
    compress: {
      drop_console: true,
    },
  },
  release: {
    files: {
      'www/js/epfl-news-<%= pkg.version %>.min.js': [
        'src/js/vendors/framework7.custom.min.js',
        'src/js/vendors/sprintf.min.js',
        'bower_components/handlebars/handlebars.runtime.min.js',
        'build/js/templates/all.js',
        'src/js/views/*.js',
        'src/js/utils/*.js',
        'src/js/models/abstract/*.js',
        'src/js/models/*.js',
        'src/js/controllers/*.js',
        'src/js/app.js',
      ],
      'www/service-worker.js': [
        'build/service-worker.js',
      ],
    },
  },
};
