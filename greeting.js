const DEFAULT_LOCALE = 'en';

const templates = {
  en: (name) => `Hello, ${name || 'friend'}!`,
  bn: (name) => `হ্যালো ${name || 'বন্ধু'}!`,
  es: (name) => `¡Hola, ${name || 'amigo'}!`
};

function formatName(name) {
  if (!name) return '';
  return String(name).trim();
}

function sayHello(name, options = {}) {
  const { locale = DEFAULT_LOCALE, template } = options;
  const n = formatName(name) || 'there';

  if (typeof template === 'function') {
    try {
      return template(n);
    } catch (_) {}
  }

  const tmpl = templates[locale] || templates[DEFAULT_LOCALE];
  return tmpl(n);
}

module.exports = { sayHello };
