import calculator from "../functions/calculator";

test("Add", () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract", () => {
	expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Divide", () => {
	expect(calculator.add(18 / 9)).toBe(2);
});

test("Multiply", () => {
	expect(calculator.add(5, 8)).toBe(40);
});
