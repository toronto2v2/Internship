
const icludesArr = ['misha', 'tina', 'ann', 'viktor', 'mark', 'sania'];

const includesStatus = icludesArr.includes('ann', -3);          // false

const includesStatus2 = icludesArr.includes('tina', NaN);      // true

console.log(includesStatus2);