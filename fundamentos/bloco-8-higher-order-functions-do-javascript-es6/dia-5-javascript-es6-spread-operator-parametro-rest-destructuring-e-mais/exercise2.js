const sum = (...numbers) => numbers.reduce(((acc, curr) => acc + curr), 0);

console.log(sum(5, 2));