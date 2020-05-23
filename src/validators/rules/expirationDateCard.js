import { isValid, parse, isBefore } from 'date-fns';

export default (value) => {
  const isBeforeDate = isBefore(parse(value, 'MM/yy', new Date()), new Date());
  const isValidDate = isValid(parse(value, 'MM/yy', new Date()));
  return !isBeforeDate && isValidDate;
};
