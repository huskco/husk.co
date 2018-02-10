'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    sassOptions: {
      extension: 'sass',
      includePaths: ['node_modules/bourbon/core']
    }
  });

  return app.toTree();
};
