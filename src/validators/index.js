import { extend, localize, setInteractionMode } from 'vee-validate';
import ptBR from 'vee-validate/dist/locale/pt_BR.json';
import {
  required, email, min, confirmed,
} from 'vee-validate/dist/rules';
import dictionary from './dictionary';


import cardNumberValidate from './rules/cardNumberValidate';
import cvvValidate from './rules/cvvValidate';
import expirationDateCardValidate from './rules/expirationDateCardValidate';

setInteractionMode('lazy');

extend('cardNumber', cardNumberValidate);
extend('expirationDateCard', expirationDateCardValidate);
extend('cvv', cvvValidate);
extend('email', email);
extend('required', required);
extend('min', min);
extend('confirmed', confirmed);

localize('pt-BR', ptBR);
localize(dictionary);
