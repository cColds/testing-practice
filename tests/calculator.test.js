import { add, subtract, divide, multiply } from "../functions/calculator";

test("Add", () => {
	expect(add(1, 2)).toBe(3);
});

test("Subtract", () => {
	expect(subtract(1, 2)).toBe(-1);
});

test("Divide", () => {
	expect(divide(18, 9)).toBe(2);
});

test("Multiply", () => {
	expect(multiply(5, 8)).toBe(40);
});
