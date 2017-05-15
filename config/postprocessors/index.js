//PREPARE CONFIG ATTRIBUTES BY ENV.
var isProd = process.env.NODE_ENV === 'production'; //true or false
var isDev = process.env.NODE_ENV === 'development'; //true or false

var postprocessors= [];

//development
postprocessors.push(require('perfectionist'));
var autoprefixerOptions = { bowsers: ['last 2 versions'] };
postprocessors.push(require('autoprefixer')(autoprefixerOptions));
//production
if(isProd) {
    //postprocessors.push(require('autoprefixer'));
    postprocessors.push(require('csswring'));
}

module.exports = postprocessors;
