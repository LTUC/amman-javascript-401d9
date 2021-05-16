'use strict';
const logger = require('../src/middlewares/Logger.js');

describe('logger middleware', () => {
    let consoleSpy;
    const req = { method: 'get', path: 'test'};
    const res = {};
    const next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('should log requests', () => {
        //arrange
        //act
        logger(req, res, next);
        //assert
        expect(consoleSpy).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith('request log', 'get', 'test');
        expect(next).toHaveBeenCalledWith();
    });
});