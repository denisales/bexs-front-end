import cvvValidate from '@/validators/rules/cvvValidate';

describe('validator - cvvValidate', () => {
  it('Deve ser uma função', () => {
    expect(typeof cvvValidate).toBe('function');
  });
  it('Deve retornar false para o numeros menores que 3 digitos', () => {
    expect(cvvValidate('00')).toBeFalsy();
    expect(cvvValidate('0')).toBeFalsy();
  });
  it('Deve retornar true para valores com 3 ou mais digitos', () => {
    expect(cvvValidate('000')).toBeTruthy();
    expect(cvvValidate('1234')).toBeTruthy();
    expect(cvvValidate(1234)).toBeTruthy();
    expect(cvvValidate(123)).toBeTruthy();
  });
  it('Deve retornar um erro se o valor não for um número válido', () => {
    expect(() => cvvValidate('abc')).toThrow(TypeError);
    expect(() => cvvValidate('abcde')).toThrow(TypeError);
    expect(() => cvvValidate('$')).toThrow(TypeError);
  });
});
