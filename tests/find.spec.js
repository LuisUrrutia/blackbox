import find from '../src/find';

describe('Find', () => {
  it('should return the secret number based on env variables', () => {
    const result = find(A, B);
    expect(result).toEqual(Number.parseFloat(SECRET_NUMBER));
  });

  it('should return the secret number', () => {
    const a = 0;
    const b = 20;

    SECRET_NUMBER = 10;
    const result = find(a, b);
    expect(result).toEqual(Number.parseFloat(SECRET_NUMBER));
  });

  it('should throw an Error because the number isn\'t betweem the two numbers', () => {
    const test = () => {
      const a = 0;
      const b = 20;

      SECRET_NUMBER = 40;
      find(a, b);
    };

    expect(test).toThrowError();
  });
});
