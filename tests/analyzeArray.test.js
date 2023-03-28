import analyzeArray from "../functions/analyzeArray";

test("Analyze array example 1", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test("Analyze array example 2", () => {
	expect(analyzeArray([6, 1, 4, 0, 6])).toEqual({
		average: 3.4,
		min: 0,
		max: 6,
		length: 5,
	});
});
