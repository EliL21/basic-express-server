'use strict';

const { exportAllDeclaration } = require('@babel/types');
const { it } = require('node:test');
const supertest = require('supertest');
const { describe } = require('yargs');
const { app } = require('../server');
const request = supertest(app);

describe('API server', () => {
  it('should handle invalid requests', async() => {
    const res = await req.get('/invalid');
    expect(response.status).toEqual(404);
});
});