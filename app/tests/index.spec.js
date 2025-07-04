const request = require('supertest');
const app = require('../src/infra/server');

let server;
let agent;

beforeAll((done) => {
  server = app.listen(() => {
    agent = request.agent(server);
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe('E2E', () => {
    // method get in  /
    it('Testing method get in / ', async () => {
      const response = await request(app).get('/');
      expect(response.text).toBe("{\"app\":\"teste\"}");
      expect(response.status).toBe(200);
    });

    // testing metod get passing credentials
    it('Testing method get in /hello', async () => {
        const response = await request(app).get('/hello')
        expect(response.status).toBe(200);
        expect(response.text).toBe("{\"hello\":\"world\"}");
    });
});


