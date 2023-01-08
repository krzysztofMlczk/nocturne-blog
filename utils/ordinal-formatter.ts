// For now the only locale supported is 'en-us' - this could be extended to other locales
// Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#using_options
export function formatAsOrdinal(num: number) {
  const suffixes = new Map([
    ['one', 'st'],
    ['two', 'nd'],
    ['few', 'rd'],
    ['other', 'th'],
  ]);
  const pr = new Intl.PluralRules('en-us', { type: 'ordinal' });
  return `${num}${suffixes.get(pr.select(num))}`;
}
