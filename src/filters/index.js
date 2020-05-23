import Vue from 'vue';

const currency = (value = 0) => {
  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};


Vue.filter('currency', currency);
