'use strict';

const loggerMiddleware = require('../src/middleware/logger');

describe('Logger Middleware', () => {
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('testing console', () => {
        loggerMiddleware(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });
    test('testing next', () => {
        loggerMiddleware(req, res, next);
        expect(next).toHaveBeenCalled();
    });

});