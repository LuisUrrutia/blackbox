import precision from '../src/precision';

describe('Precision', () => {
  it('should match with the precision', () => {
    const result = precision(0.000001);
    expect(result).toBe(0.000001);
  });

  it('should round the number', () => {
    const result = precision(0.33333333 / 2);
    expect(result).toBe(0.166667);
  });
});
