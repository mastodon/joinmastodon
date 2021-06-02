const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'build/messages',
  translationsDirectory: 'src/locales/',
  languages: [
    'ar',
    'ca',
    'cs',
    'cy',
    'de',
    'en',
    'es',
    'eu',
    'fi',
    'fr',
    'gd',
    'he',
    'it',
    'ja',
    'ko',
    'nl-NL',
    'no',
    'pl',
    'pt-BR',
    'ru',
    'sk',
    'sq',
    'sv',
    'th',
    'tr',
    'uk',
    'zh',
    'zh-TW'
  ]
});
