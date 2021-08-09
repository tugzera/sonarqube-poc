"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_1 = require("../src/calculate");
describe('calculate', () => {
    it('should return correct value', () => {
        expect(calculate_1.calculate(10)).toBe(15);
    });
});
