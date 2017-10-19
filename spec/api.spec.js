const request = require('supertest')('http://localhost:3000');

const app = require('../server/index.js');

const server = app.listen(3000, () => { console.log('Server running on 3000'); });

describe('Serving pages', () => {
  after(() => server.close());
});
