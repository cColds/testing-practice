import capitalize from "../functions/capitalize";

test("Capitalize string", () => {
	expect(capitalize("beans")).toBe("BEANS");
});
