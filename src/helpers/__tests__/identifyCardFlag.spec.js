import identifyCardFlag from '@/helpers/identifyCardFlag';

describe('helper - IdentifyCardFlag', () => {
  it('Deve ser uma função', () => {
    expect(typeof identifyCardFlag).toBe('function');
  });

  it('Deve retornar a bandeira Visa para o numero 4111 1111 1111 1111', () => {
    const valueExpect = { name: 'visa', test: '^4[0-9]{12}(?:[0-9]{3})' };
    expect(identifyCardFlag(4111111111111111)).toEqual(valueExpect);
  });

  it('Deve retornar um erro se o valor não for um número válido', () => {
    expect(() => identifyCardFlag('ab23232323232323c')).toThrow(TypeError);
    expect(() => identifyCardFlag('abcde')).toThrow(TypeError);
    expect(() => identifyCardFlag('$')).toThrow(TypeError);
  });

  it('Deve retornar null para um número não encontrado', () => {
    expect(identifyCardFlag('12345678910123456')).toBeNull();
  });

  it('Deve retornar a bandeira Visa para o numero "4111 1111 1111 1111"', () => {
    const valueExpect = { name: 'visa', test: '^4[0-9]{12}(?:[0-9]{3})' };
    expect(identifyCardFlag('4111 1111 1111 1111')).toEqual(valueExpect);
  });

  it('Deve retornar a bandeira MasterCard para o numero "5500 0000 0000 0004"', () => {
    const valueExpect = { name: 'mastercard', test: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}' };
    expect(identifyCardFlag('5500 0000 0000 0004')).toEqual(valueExpect);
  });

  it("Deve retornar a bandeira Diner's Club para o numero '3000 0000 0000 04'", () => {
    const valueExpect = { name: 'dinersclub', test: '^3(?:0[0-5]|[68][0-9])[0-9]{11}' };
    expect(identifyCardFlag('3000 0000 0000 04')).toEqual(valueExpect);
  });

  it("Deve retornar a bandeira Discover para o numero '6011 0000 0000 0004'", () => {
    const valueExpect = { name: 'discover', test: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}' };
    expect(identifyCardFlag('6011 0000 0000 0004')).toEqual(valueExpect);
  });

  it("Deve retornar a bandeira Maestro para o numero '6761837614424464'", () => {
    const valueExpect = { name: 'maestro', test: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}' };
    expect(identifyCardFlag('6761837614424464')).toEqual(valueExpect);
  });

  it("Deve retornar a bandeira Amex para o numero '3400 0000 0000 009'", () => {
    const valueExpect = { name: 'amex', test: '^3[47][0-9]{13}' };
    expect(identifyCardFlag('3400 0000 0000 009')).toMatchObject(valueExpect);
  });
});
