const contentful = require('contentful/dist/contentful.browser.min.js');

export const client = contentful.createClient({
  space: 'space-id',
  accessToken: 'access-token',
});
