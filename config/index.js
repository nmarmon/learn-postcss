//array for development
var pre = require('./preprocessors');
//array for production
var post = require('./postprocessors');

module.exports = pre.concat(post);
