import caesarCipher from "../functions/caesarCipher";

test("Caesar Cipher 'z' to 'a'", () => {
	expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
		"bcdefghijklmnopqrstuvwxyza"
	);
});

test("Caesar Cipher keep punctuation", () => {
	expect(caesarCipher("ab,cd")).toBe("bc,de");
});

test("Caesar Cipher keep letter case", () => {
	expect(caesarCipher("ABcdE")).toBe("BAdeF");
});
