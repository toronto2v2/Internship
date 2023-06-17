function parseNumber(str) {
  let number = 0;
  let hasNumbers = false;
  let isNegative = false;
  let digitsAfterFloat = 0;

  const isNumber = charCode => {
    return charCode > 47 && charCode < 58;
  };

  for (let i = 0; i < str.length; i++) {
    const codeNumber = str[i].charCodeAt(0);

    // if str[i] === ""-"" and next symbol str[i + 1] is number
    if (codeNumber === 45) {
      isNegative = isNumber(str[i + 1].charCodeAt(0));
    } else if (isNumber(codeNumber)) {
      const digit = codeNumber - 48;
      number = number * 10 + digit;
      hasNumbers = true;

      if (digitsAfterFloat > 0) {
        digitsAfterFloat *= 10;
      }
    } else if (
      // if str[i] === "","" or ""."" and next symbol str[i + 1] is number
      !digitsAfterFloat &&
      (codeNumber === 44 || codeNumber === 46) &&
      isNumber(str[i + 1].charCodeAt(0))
    ) {
      digitsAfterFloat = 1;
    } else if (number) {
      // stop all iterations when number is completely parsed.
      break;
    }
  }

  if (!hasNumbers) {
    return NaN;
  }

  const leftPart = isNegative ? -number : number;
  console.log(digitsAfterFloat, leftPart);

  return digitsAfterFloat ? leftPart / digitsAfterFloat : leftPart;
}
const text2 = 'hello world here is my balance -0123463269,345123.123456789 USDT';

console.log(parseNumber(text2));