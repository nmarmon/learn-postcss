//PREPARE CONFIG ATTRIBUTES BY ENV.
var isProd = process.env.NODE_ENV === 'production'; //true or false
var isDev = process.env.NODE_ENV === 'development'; //true or false

var postprocessors= [];

//configs
var stylelintConfig = require('./stylelint');
var autoprefixerConfig = { bowsers: ['last 2 versions'] };

//development
postprocessors.push(require('perfectionist'));
postprocessors.push(require('stylelint')(stylelintConfig));
postprocessors.push(require('autoprefixer')(autoprefixerConfig));
//production
if(isProd) {
    //postprocessors.push(require('autoprefixer'));
    postprocessors.push(require('csswring'));
}

module.exports = postprocessors;
