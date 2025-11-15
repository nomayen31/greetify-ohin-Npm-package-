const { sayHello } = require('./greeting');
const { useGreeting } = require('./hooks');
const Greeting = require('./GreetingComponent');

module.exports = { sayHello, useGreeting, Greeting };
module.exports.default = module.exports;
