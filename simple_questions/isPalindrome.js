// Strip whitespace and non-alphanumeric
const clean = (s) => s.toLowerCase().replace(/[\W_]/g, '');

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

// For...of
const isPalForOf = (s) => {
	const cleanS = clean(s);
	const charArr = cleanS.split('');

	for (let char of charArr) {
		if (char !== charArr.pop()) {
			return false;
		}
	}
	return true;
}





let a = 'race a car';
let b = 'A man, a plan, a canal: Panama'

console.log(isPalindrome(a));
console.log(isPalindrome(b));
console.log(isPal(a));
console.log(isPal(b));
console.log(isPalForOf(a));
console.log(isPalForOf(b));