const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'build/messages',
  translationsDirectory: 'src/locales/',
  languages: ['en', 'fr', 'pl', 'es', 'ja', 'de', 'pt-BR', 'zh', 'ru', 'it', 'ar']
});
