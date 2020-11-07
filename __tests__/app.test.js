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

  it('should get all notes in the database using GET', async () => {
    await request(app)
      .get('/api/v1/notes')
      .then(res => {
        expect(res.body).toEqual(expect.arrayContaining([{
          id: expect.any(String),
          topic: expect.any(String),
          note: expect.any(String)
        }]))
      })
  })

  it('should get a single note by id from the database using GET', async () => {
    await request(app)
      .get('/api/v1/notes/1')
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          topic: expect.any(String),
          note: expect.any(String)
        })
      })
  })
});
