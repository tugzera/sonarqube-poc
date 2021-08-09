import { calculate } from '../src/calculate';

describe('calculate', () => {
    it('should return correct value', () => {
        expect(calculate(10)).toBe(15)
    });
});