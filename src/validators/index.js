import { extend, localize, setInteractionMode } from 'vee-validate';
import ptBR from 'vee-validate/dist/locale/pt_BR.json';
import {
  required, email, min, confirmed,
} from 'vee-validate/dist/rules';
import dictionary from './dictionary';


import cpfValidate from './rules/cpfValidate';

setInteractionMode('lazy');

extend('cpf', cpfValidate);
extend('email', email);
extend('required', required);
extend('min', min);
extend('confirmed', confirmed);

localize('pt-BR', ptBR);
localize(dictionary);
