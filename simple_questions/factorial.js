const fact = (n) => {
	let result = 1;
	for (let i = 1; i < n+1; i++) {
		result *= i
	}
	return result
}


const recursiveFact = (n) => {
	if (n === 1) {
		return 1
	} else {
		return n * recursiveFact(n - 1)
	}
}








console.log(fact(5));
console.log(fact(7));
console.log(recursiveFact(5));
console.log(recursiveFact(7));
