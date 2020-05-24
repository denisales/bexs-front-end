import cardNumberValidate from '@/validators/rules/cardNumberValidate';

describe('CardNumberValidate', () => {
  it('Deve ser uma função', () => {
    expect(typeof cardNumberValidate).toBe('function');
  });
  it('Deve retornar true quando for chamada e não for passado um argumento com valor', () => {
    expect(cardNumberValidate()).toBeTruthy();
    expect(cardNumberValidate(undefined)).toBeTruthy();
    expect(cardNumberValidate(null)).toBeTruthy();
  });
  it('Deve retornar TypeError quando chamada com um argumento errado', () => {
    expect(() => cardNumberValidate([])).toThrow(TypeError);
    expect(() => cardNumberValidate({})).toThrow(TypeError);
    expect(() => cardNumberValidate(1234567891234567)).toThrow(TypeError);
  });
  it('Deve retornar true para "4916183279976756"', () => {
    expect(cardNumberValidate('4916183279976756')).toBeTruthy();
  });
  it('Deve retornar true para "4916 1832 7997 6756"', () => {
    expect(cardNumberValidate('4916 1832 7997 6756')).toBeTruthy();
  });
  it('Deve retornar false para "1234567891234567"', () => {
    expect(cardNumberValidate('1234567891234567')).toBeFalsy();
  });
});
