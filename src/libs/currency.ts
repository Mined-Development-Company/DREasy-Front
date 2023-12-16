export function formatToCurrency(value: string): string {
  let onlyDigits = value.replace(/[^\d]/g, '');

  const minimumIntegerDigits = 1;
  const decimalDigits = 2;
  const currencyMinDigits = decimalDigits + minimumIntegerDigits;

  onlyDigits = onlyDigits.padStart(currencyMinDigits, '0');

  const isBiggerThanMinimum = onlyDigits.length > currencyMinDigits
  const startsWithZero = onlyDigits[0] === '0';
  if (isBiggerThanMinimum && startsWithZero) { onlyDigits = onlyDigits.slice(1); }

  const dotIndex = onlyDigits.length - decimalDigits;
  const integers = onlyDigits.substring(0, dotIndex);
  const decimals = onlyDigits.substring(dotIndex, onlyDigits.length);
  return integers + '.' + decimals;
}
