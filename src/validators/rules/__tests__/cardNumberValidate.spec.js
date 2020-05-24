import cardNumberValidate from '@/validators/rules/cardNumberValidate';

describe('validator - CardNumberValidate', () => {
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
  it('Deve retornar true para os numeros dos cartões válidos', () => {
    expect(cardNumberValidate('4111 1111 1111 1111')).toBeTruthy();
    expect(cardNumberValidate('4111111111111111')).toBeTruthy();
    expect(cardNumberValidate('5500 0000 0000 0004')).toBeTruthy();
    expect(cardNumberValidate('5500000000000004')).toBeTruthy();
    expect(cardNumberValidate('3400 0000 0000 009')).toBeTruthy();
    expect(cardNumberValidate('340000000000009')).toBeTruthy();
    expect(cardNumberValidate('3000 0000 0000 04')).toBeTruthy();
    expect(cardNumberValidate('30000000000004')).toBeTruthy();
    expect(cardNumberValidate('6011 0000 0000 0004')).toBeTruthy();
    expect(cardNumberValidate('6011000000000004')).toBeTruthy();
    expect(cardNumberValidate('2014 0000 0000 009')).toBeTruthy();
    expect(cardNumberValidate('201400000000009')).toBeTruthy();
    expect(cardNumberValidate('3088 0000 0000 0009')).toBeTruthy();
    expect(cardNumberValidate('3088000000000009')).toBeTruthy();
  });
  it('Deve retornar false para "1234567891234567"', () => {
    expect(cardNumberValidate('1234567891234567')).toBeFalsy();
  });
  it('Deve retornar um erro se o valor não for um número válido', () => {
    expect(() => cardNumberValidate('abc')).toThrow(TypeError);
    expect(() => cardNumberValidate('abcde')).toThrow(TypeError);
    expect(() => cardNumberValidate('$')).toThrow(TypeError);
  });
});
