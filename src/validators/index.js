import { extend, localize, setInteractionMode } from 'vee-validate';
import ptBR from 'vee-validate/dist/locale/pt_BR.json';
import {
  required, email, min, confirmed,
} from 'vee-validate/dist/rules';
import dictionary from './dictionary';


import cpfValidate from './rules/cpfValidate';
import cardNumberValid from './rules/cardNumberValid';
import fullNameValid from './rules/fullNameValid';
import cvvValid from './rules/cvvValid';
import expirationDateCard from './rules/expirationDateCard';

setInteractionMode('lazy');

extend('cpf', cpfValidate);
extend('cardNumber', cardNumberValid);
extend('fullName', fullNameValid);
extend('expirationDateCard', expirationDateCard);
extend('cvv', cvvValid);
extend('email', email);
extend('required', required);
extend('min', min);
extend('confirmed', confirmed);

localize('pt-BR', ptBR);
localize(dictionary);
