const request = require('supertest')('http://localhost:3000');

const app = require('../server/index');

let server;

describe('Bingo API', () => {
  beforeAll(() => {
    server = app.listen(3000, () => {
      console.log('server running on 3000');
    });
  });

  afterAll(() => server.close());

  describe('createBoard', () => {
    test('it should make a board', done => {
      request.post('/board/will')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201, done);
    });

    test('The board should be array with length 25', done => {
      request.post('/board/will')
        .expect((res) => {
          expect(Array.isArray(res.body.board)).toBe(true);
          expect(res.body.board.length).toBe(25);

        })
        .expect(201, done);
    });

    test('The board should only contain numbers between 1 and 100', done => {
      request.post('/board/will')
        .expect((res) => {
          for (let i = 0; i < 25; ++i) {
            expect(typeof res.body.board[i]).toBe('number');
            expect(res.body.board[i] <= 100 && res.body.board[i] > 0).toBe(true);
          }
        })
        .expect(201, done);
    });
  });

  describe('getBoard', () => {
    test('it should get a board', done => {
      request.get('/board/will')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    });

    test('Should get the correct board', done => {
      let board;
      request.post('/board/will')
        .expect((res) => {
          board = res.body.board;
        }).then(() => {
          request.get('/board/will', (res) => {
            expect(res.body.board).toBe(board);
          }).expect(200, done);
        })
    });
  });
});
