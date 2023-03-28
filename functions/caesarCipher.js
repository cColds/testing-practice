export default function caesarCipher(letter) {
	let string = "";
	for (let i = 0; i < letter.length; i++) {
		if (!isLetter(letter[i])) {
			string += letter[i];
			continue;
		}

		let shiftLetter;
		if (isLetterZ(letter[i])) {
			shiftLetter = "a";
		} else shiftLetter = getNextLetter(letter[i]);

		string += shiftLetter;
	}
	return string;
}

function getNextLetter(letter) {
	const alphabet = getAlphabetByLetterCase(letter);
	return alphabet[alphabet.indexOf(letter) + 1];
}

function getAlphabetByLetterCase(letter) {
	if (letter.toUpperCase() === letter) return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // return uppercase alphabet

	return "abcdefghijklmnopqrstuvwxyz"; // return lowercase alphabet
}

function isLetter(letter) {
	return letter.toLowerCase() !== letter.toUpperCase();
}

function isLetterZ(letter) {
	return letter === "z";
}
