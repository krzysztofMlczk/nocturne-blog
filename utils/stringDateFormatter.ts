// TODO: For now the only locale supported is 'en-us' - this could be extended to other locales
import { formatAsOrdinal } from '#/utils/ordinalFormatter';

export function formatStringDate(dateStringISO: string, withWeekday?: boolean) {
  const date = new Date(dateStringISO);
  const dateFormatter = new Intl.DateTimeFormat('en-us', {
    ...(withWeekday && { weekday: 'long' }),
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const partitionedDate = dateFormatter.formatToParts(date);

  return partitionedDate.reduce((formattedDate, { type, value }, currentIndex) => {
    if (type === 'day') {
      // represent day number as ordinal
      value = formatAsOrdinal(value as unknown as number);
    } else if (type === 'literal' && value.includes(',')) {
      // replace commas with space
      value = withWeekday && currentIndex === 1 ? ', ' : ' '; // do not remove comma after weekday name
    }
    return formattedDate + value;
  }, '');
}
