export default function validate(value) {
  const cvv = String(value);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(cvv)) throw new TypeError('valor não é um número válido');
  return cvv.length > 2;
}
