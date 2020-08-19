const manageTranslations = require('react-intl-translations-manager').default;
const locales = require('./src/LanguageSelect').options.map(x => x.value);

manageTranslations({
  messagesDirectory: 'build/messages',
  translationsDirectory: 'src/locales/',
  languages: locales,
});
