import blackbox from '../src/blackbox';

describe('Blackbox', () => {
  it('should return true because is between two numbers', () => {
    SECRET_NUMBER = 10;
    const result = blackbox(0, 20);
    expect(result).toBe(true);
  });

  it('should return false because isn\'t between two numbers', () => {
    SECRET_NUMBER = 50;
    const result = blackbox(0, 20);
    expect(result).toBe(false);
  });
});
