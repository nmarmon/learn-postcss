//PREPARE CONFIG ATTRIBUTES BY ENV.
var isProd = process.env.NODE_ENV === 'production'; //true or false
var isDev = process.env.NODE_ENV === 'development'; //true or false

var preprocessors= [];

//development
preprocessors.push(require('more-colors'));
//production
if(isProd){

}

module.exports = preprocessors;
