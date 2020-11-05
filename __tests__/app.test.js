require('../lib/data/data-helpers')
const request = require('supertest');
const app = require('../lib/app');

describe('notes-be routes', () => {
  it('should add a note to the database table using POST', async () => {
    return await request(app)
      .post('/api/v1/notes')
      .send({
        topic: 'JavaScript',
        note: 'My JavaScript note'
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          topic: 'JavaScript',
          note: 'My JavaScript note'
        })
      })
  })
});
