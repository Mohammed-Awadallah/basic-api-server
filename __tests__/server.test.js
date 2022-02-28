'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index');
let id;

beforeAll(async () => {
    await db.sync();
});

afterAll(async () => {
    await db.drop();
});

describe('Web server', () => {
    it('Should responed 404', async () => {
        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    });
});

describe('food routes test', () => {
    it('add new food', async () => {
        const response = await mockRequest.post('/food').send({
            foodName: "Mansaf",
            foodOrigin: "jordanain"
        });
        expect(response.status).toBe(201);
        id = response.body.id
    });
    it('get all foods', async () => {
        const response = await mockRequest.get('/food');
        expect(response.status).toBe(200);
    });
    it('get one food', async () => {
        const response = await mockRequest.get(`/food/${id}`);
        expect(response.status).toBe(200);
    });
    it('update food', async () => {
        const response = await mockRequest.put(`/food/${id}`).send({
            foodName: "Mansaf",
            foodOrigin: "jordanain"
        });
        expect(response.status).toEqual(201);
    });
    it('delete food', async () => {
        const response = await mockRequest.delete(`/food/${id}`);
        expect(response.status).toEqual(204);
    });
});

describe('clothes routes test', () => {
    it('add new clothing', async () => {
        const response = await mockRequest.post('/clothes').send({
            brandName: "Nike",
            color: "red"
        });
        expect(response.status).toBe(201);
        id = response.body.id
    });
    it('get all clothes', async () => {
        const response = await mockRequest.get('/clothes');
        expect(response.status).toBe(200);
    });
    it('get clothing by ID', async () => {
        const response = await mockRequest.get(`/clothes/${id}`);
        expect(response.status).toBe(200);
    });
    it('update clothing', async () => {
        const response = await mockRequest.put(`/clothes/${id}`).send({
            brandName: "Nike",
            color: "blue"
        });
        expect(response.status).toEqual(201);
    });
    it('delete clothing', async () => {
        const response = await mockRequest.delete(`/clothes/${id}`);
        expect(response.status).toEqual(204);
    });
});