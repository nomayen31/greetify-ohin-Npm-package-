// GreetingComponent.js
const React = require('react');
const { useGreeting } = require('./hooks');

function GreetingComponent(props) {
  const {
    name,
    locale,
    className = '',
    persistKey = null,
    ttl = 60000,
    as = 'div',
    ...rest
  } = props;

  const text = useGreeting(name, { locale, persistKey, ttl });
  const Tag = as;

  return React.createElement(Tag, { className, ...rest }, text);
}

module.exports = GreetingComponent;
