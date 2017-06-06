const request = require('supertest')
    , { expect } = require('chai')
    , db = require('APP/db')
    , app = require('./start')

/* global describe it before afterEach */

describe('/api/faces', () => {
    before('Await database sync', () => db.didSync)
    afterEach('Clear the tables', () => db.truncate({ cascade: true }))

    describe('GET /', () =>
        describe('getting all the faces', () =>
            it('succeeds with a 200(authorized)', () =>
                request(app)
                    .get(`/api/faces`)
                    .expect(200)
            )))

    describe('GET /:id', () =>
        describe('when not logged in', () =>
            it('succeeds with a 200(authorized)', () =>
                request(app)
                    .get(`/api/faces/1`)
                    .expect(200)
            )))


})
