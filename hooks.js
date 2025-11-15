const React = require('react');
const { sayHello } = require('./greeting');

const isBrowser =
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

function useGreeting(name, options = {}) {
  const { locale, persistKey = null, ttl = 60 * 1000 } = options;

  const initial = React.useMemo(() => {
    if (persistKey && isBrowser) {
      try {
        const raw = window.localStorage.getItem(persistKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (!parsed.expire || parsed.expire > Date.now()) {
            return parsed.value;
          }
        }
      } catch (e) {}
    }
    return sayHello(name, { locale });
  }, []);

  const [greeting, setGreeting] = React.useState(initial);

  React.useEffect(() => {
    const newVal = sayHello(name, { locale });
    setGreeting(newVal);

    if (persistKey && isBrowser) {
      try {
        const payload = {
          value: newVal,
          expire: Date.now() + Number(ttl || 0)
        };
        window.localStorage.setItem(persistKey, JSON.stringify(payload));
      } catch (e) {}
    }
  }, [name, locale, persistKey, ttl]);

  return greeting;
}

module.exports = { useGreeting };
