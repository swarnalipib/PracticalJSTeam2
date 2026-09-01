//write program Palindrome 

function palindromeCheck(num) {
    let x = num.toString();
    let y = x.split('').reverse().join('');
    return x === y;
}

console.log(palindromeCheck(121)); // true
console.log(palindromeCheck(123)); // false