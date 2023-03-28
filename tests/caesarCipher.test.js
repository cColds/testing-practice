import caesarCipher from "../functions/caesarCipher";

// test("Caesar Cipher normal", () => {
// 	expect(caesarCipher("abc")).toBe("bcd");
// });

// test("Caesar Cipher 'z' to 'a'", () => {
// 	expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
// 		"bcdefghijklmnopqrstuvwxyza"
// 	);
// });

// test("Caesar Cipher random order", () => {
// 	expect(caesarCipher("baqe")).toBe("cbrf");
// });

// test("Caesar Cipher keep punctuation", () => {
// 	expect(caesarCipher("ab,cd")).toBe("bc,de");
// });

// test("Caesar Cipher keep letter case", () => {
// 	expect(caesarCipher("ABcdE")).toBe("BCdeF");
// });

test("Caesar Cipher normal", () => {
	expect(caesarCipher("abc")).toBe("bcd");
});

test("Caesar Cipher 'z' to 'a'", () => {
	expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
		"bcdefghijklmnopqrstuvwxyza"
	);
});

test("Caesar Cipher random order", () => {
	expect(caesarCipher("baqe")).toBe("cbrf");
});

test("Caesar Cipher keep punctuation", () => {
	expect(caesarCipher("ab,cd")).toBe("bc,de");
});

test("Caesar Cipher keep letter case", () => {
	expect(caesarCipher("ABcdE")).toBe("BCdeF");
});

test("unspecified shift factor", () => {
	expect(caesarCipher("Zah")).toBe("Abi");
});
