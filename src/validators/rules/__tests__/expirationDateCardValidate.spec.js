import expirationDateCardValidate from '@/validators/rules/expirationDateCardValidate';
import {
  addYears, addMonths, format, subYears, subMonths,
} from 'date-fns';

describe('expirationDateCardValidate', () => {
  it('Deve ser uma função', () => {
    expect(typeof expirationDateCardValidate).toBe('function');
  });
  it('Deve retornar true', () => {
    expect(expirationDateCardValidate()).toBeTruthy();
  });
  it('Deve retornar true quando for chamada e não for passado um argumento com valor', () => {
    expect(expirationDateCardValidate()).toBeTruthy();
    expect(expirationDateCardValidate(undefined)).toBeTruthy();
    expect(expirationDateCardValidate(null)).toBeTruthy();
  });
  it('Deve retornar false para datas com o formato dd/mm/yyyy', () => {
    expect(expirationDateCardValidate('12/12/2025')).toBeFalsy();
    expect(expirationDateCardValidate('12/12/1900')).toBeFalsy();
  });
  it('Deve retornar false para a validate anterior ao ano atual', () => {
    const date = subYears(new Date(), 2);
    const formatDate = format(date, 'MM/yy');
    expect(expirationDateCardValidate(formatDate)).toBeFalsy();
  });
  it('Deve retornar True para a validade depois do ano atual', () => {
    const date = addYears(new Date(), 2);
    const formatDate = format(date, 'MM/yy');
    expect(expirationDateCardValidate(formatDate)).toBeTruthy();
  });
  it('Deve retornar false para a validate anterior ao mês atual', () => {
    const date = subMonths(new Date(), 1);
    const formatDate = format(date, 'MM/yy');
    expect(expirationDateCardValidate(formatDate)).toBeFalsy();
  });
  it('Deve retornar True para a validade depois do mês atual', () => {
    const date = addMonths(new Date(), 1);
    const formatDate = format(date, 'MM/yy');
    expect(expirationDateCardValidate(formatDate)).toBeTruthy();
  });
  it('Deve retornar False para a validade que seja do mesmo mês atual', () => {
    const formatDate = format(new Date(), 'MM/yy');
    expect(expirationDateCardValidate(formatDate)).toBeFalsy();
  });
});
