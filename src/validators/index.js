import { extend, localize, setInteractionMode } from 'vee-validate';
import ptBR from 'vee-validate/dist/locale/pt_BR.json';
import {
  required, email, min, confirmed,
} from 'vee-validate/dist/rules';
import dictionary from './dictionary';


import cardNumberValidate from './rules/cardNumberValidate';
import fullNameValidate from './rules/fullNameValidate';
import cvvValidate from './rules/cvvValidate';
import expirationDateCardValidate from './rules/expirationDateCardValidate';

setInteractionMode('lazy');

extend('cardNumber', cardNumberValidate);
extend('fullName', fullNameValidate);
extend('expirationDateCard', expirationDateCardValidate);
extend('cvv', cvvValidate);
extend('email', email);
extend('required', required);
extend('min', min);
extend('confirmed', confirmed);

localize('pt-BR', ptBR);
localize(dictionary);
