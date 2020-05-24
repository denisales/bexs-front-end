const flags = [
  { name: 'visa', test: '^4[0-9]{12}(?:[0-9]{3})' },
  { name: 'mastercard', test: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}' },
  { name: 'amex', test: '^3[47][0-9]{13}' },
  { name: 'dinersclub', test: '^3(?:0[0-5]|[68][0-9])[0-9]{11}' },
  { name: 'discover', test: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}' },
  { name: 'maestro', test: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}' },
  // { name: 'JCB', test: '^(?:2131|1800|35\d{3})\d{11}' },
];
export default (value) => {
  const valueString = String(value);
  const cardnumber = valueString.replace(/\s/g, '');
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(cardnumber)) throw new TypeError('valor não é um número válido');

  // eslint-disable-next-line no-restricted-syntax
  for (const flag of flags) {
    if (cardnumber.match(flag.test)) {
      return flag;
    }
  }
  return null;
};
