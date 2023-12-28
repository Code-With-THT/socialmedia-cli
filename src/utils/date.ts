import {format} from 'date-fns';

/**
 * @returns 04/20/2021
 */
export const parseDateToString = (date: Date | number) => {
  return format(date, 'MM/dd/yyyy');
};
