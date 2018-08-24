const request = require('superagent');
const fs      = require('fs');

const INSTANCES_API_TOKEN = 'JEzPe4Ff5c5WA7k4IP5tx0rJMDzEMFxhmXXZvBG4LFSF0Almf0ewfBAKtbPsqMWx1E0hYe6Wy2Zx6HJHP2LmSwUvKneZVOOnelmFaGB7yNeoCvWUxfM0WyVL0FODQPm7';

const defaultParams = {
  count: 60,
  include_down: false,
  include_closed: false,
  min_version: '2.1.2',
  min_active_users: '1',
  sort_by: 'active_users',
  sort_order: 'desc',
  include_opt_out: 'false',
};

const categories = [
  '',
  'art',
  'music',
  'books',
  'journalism',
  'activism',
  'lgbt',
  'poc',
  'sports',
  'games',
  'tech',
  'tech',
  'academia',
  'adult',
  'humor'
];

const languages = [
  '',
  'ar',
  'de',
  'en',
  'es',
  'fi',
  'fr',
  'ja',
  'nl',
  'pl',
  'pt',
  'ru',
  'zh',
];

categories.forEach(category => languages.forEach(language => {
  const params = Object.assign({}, defaultParams);

  if (category !== '') {
    params.category = category;
  }

  if (language !== '') {
    params.language = language;
  }

  request.get('https://instances.social/api/1.0/instances/list')
         .query(params)
         .set('Authorization', `Bearer ${INSTANCES_API_TOKEN}`)
         .end((err, res) => {
           const filename = `./public/cache/list-${category}-${language}.json`;

           fs.writeFile(filename, JSON.stringify(res.body), err => {
             if (!err) {
               console.log(`Wrote ${filename} (${res.body.instances.length})`);
             }
           });
         });
}));
