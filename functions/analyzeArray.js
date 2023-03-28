export default function analyzeArray(array) {
	return {
		average: average(array),
		min: min(array),
		max: max(array),
		length: length(array),
	};
}

const average = (array) => array.reduce((a, b) => a + b) / array.length;
const min = (array) => Math.min(...array);
const max = (array) => Math.max(...array);
const length = (array) => array.length;
