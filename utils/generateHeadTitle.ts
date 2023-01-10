import { formatStringDate } from '#/utils/string-date-formatter';

export function generateHeadTitle(
  title: string,
  author: string | null,
  dateString: string
) {
  if (!author) {
    return `${title} | ${formatStringDate(dateString)} | Nocturne Blog`;
  }
  return `${title} | by ${author} | ${formatStringDate(
    dateString
  )} | Nocturne Blog`;
}
