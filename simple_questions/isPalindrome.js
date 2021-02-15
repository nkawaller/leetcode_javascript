// Strip whitespace and non-alphanumeric
// str.toLowerCase().replace(/[\W_]/g, '');

const isPalindrome = (s) => {
	return s === s.split('').reverse().join('');
}

const isPal = (s) => {
	let len = Math.floor(s.length / 2);
	for (let i = 0; i < len; i++) {
		if (s[i] !== s[s.length - i - 1]) {
			return false;
		} 
	} return true;
}





let a = 'race a car';
let b = 'racecar';

console.log(isPalindrome(a));
console.log(isPalindrome(b));
console.log(isPal(a));
console.log(isPal(b));
