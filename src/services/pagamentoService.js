import api from './api';

const pagar = (payload) => api.post('/pagar', payload);


export default {
  pagar,
};
