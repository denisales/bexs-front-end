export default function validate(value) {
  const creditCardNumber = value.replace(/\s/g, '');
  const reverse = Array.from(creditCardNumber).reverse();
  const numPares = [];
  const numImpar = [];
  let newArray = [];
  for (let i = 1; i < reverse.length; i += 2) {
    const doubleNumber = reverse[i] * 2;

    if (doubleNumber >= 10) {
      const numeroSeparado = Array.from(doubleNumber.toString());
      // eslint-disable-next-line radix
      const newNumber = parseInt(numeroSeparado[0]) + parseInt(numeroSeparado[1]);
      numPares.push(newNumber);
    } else {
      numPares.push(doubleNumber);
    }
  }

  for (let i = 0; i < reverse.length; i += 2) {
    // eslint-disable-next-line radix
    numImpar.push(parseInt(reverse[i]));
  }
  newArray = [...numPares, ...numImpar];

  let sum = 0;
  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }

  return sum % 10 === 0;
}
