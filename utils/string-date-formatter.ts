// For now the only locale supported is 'en-us' - this could be extended to other locales
import { formatAsOrdinal } from '#/utils/ordinal-formatter';

export function formatStringDate(dateStringISO: string) {
  const date = new Date(dateStringISO);
  const dateFormatter = new Intl.DateTimeFormat('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const partitionedDate = dateFormatter.formatToParts(date);

  return partitionedDate.reduce((formattedDate, { type, value }) => {
    if (type === 'day') {
      // represent day number as ordinal
      value = formatAsOrdinal(value as unknown as number);
    } else if (type === 'literal' && value.includes(',')) {
      // replace commas with space
      value = ' ';
    }
    return formattedDate + value;
  }, '');
}
