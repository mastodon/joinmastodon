const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'build/messages',
  translationsDirectory: 'src/locales/',
  languages: ['en', 'fr', 'pl', 'cs', 'es', 'ja', 'ko', 'de', 'pt-BR', 'zh', 'zh-TW', 'ru', 'it', 'ar', 'tr', 'sq', 'nl-NL', 'cy']
});
