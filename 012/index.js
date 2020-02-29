/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
  let result = '';
  const thousand = Math.floor(num / 1000);

  if (thousand > 0) {
    result += 'M'.repeat(thousand);
  }

  num = num - thousand * 1000;

  const hundred = Math.floor(num / 100);
  if (hundred === 9) {
    result += 'CM';
  } else if (hundred >= 5) {
    result += ('D' + 'C'.repeat(hundred - 5));
  } else if (hundred === 4) {
    result += 'CD';
  } else {
    result += 'C'.repeat(hundred);
  }

  num = num - hundred * 100;
  const ten = Math.floor(num / 10);
  if (ten === 9) {
    result += 'XC';
  } else if (ten >= 5) {
    result += 'L' + 'X'.repeat(ten - 5);
  } else if (ten === 4) {
    result += 'XL';
  } else {
    result += 'X'.repeat(ten);
  }

  num = num - ten * 10;
  if (num === 9) {
    result += 'IX';
  } else if (num >= 5) {
    result += 'V' + 'I'.repeat(num - 5);
  } else if (num === 4) {
    result += 'IV';
  } else {
    result += 'I'.repeat(num);
  }

  return result;
}


console.log(intToRoman(1994));