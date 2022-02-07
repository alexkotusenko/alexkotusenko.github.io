const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(plaintext, key) {
	let ciphertext = "";
	let keyIndexes = [];

	// Appending the index of each letter in the key value
	for (iterator = 0; iterator < key.length; iterator++) {
		letterIndex = alphabet.indexOf(key.charAt(iterator).toLowerCase());
		if (letterIndex != -1) {
			keyIndexes.push(letterIndex)
		}
	}

	// Encryption
	let counter = 0;
	for (let iterator = 0; iterator < plaintext.length; iterator++) {
		let currentCharacter = plaintext.charAt(iterator);
		// Checking if the current character is a letter
		if (alphabet.includes(currentCharacter.toLowerCase()) == true) {
			let isUpper = false;
			// Checking if the current letter is uppercase
			if (alphabet.includes(currentCharacter) == false) {
				isUpper = true;
			}

			currentCharacter = currentCharacter.toLowerCase();
			currentKey = keyIndexes[counter % keyIndexes.length] + 1;
			oldIndex = alphabet.indexOf(currentCharacter);
			newIndex = (oldIndex + currentKey) % 26;
			encryptedLetter = alphabet.charAt(newIndex);

			if (isUpper == true) {
				encryptedLetter = encryptedLetter.toUpperCase();
			}			

			ciphertext += encryptedLetter;
			counter++;

		}

		else {
			ciphertext += currentCharacter;
		}
	
	}
	return ciphertext;

}

function decrypt(ciphertext, key) {
	let plaintext = "";
	let keyIndexes = [];

	// Appending the index of each letter in the key value
	for (iterator = 0; iterator < key.length; iterator++) {
		letterIndex = alphabet.indexOf(key.charAt(iterator).toLowerCase());
		if (letterIndex != -1) {
			keyIndexes.push(letterIndex)
		}
	}

	// Decryption
	let counter = 0;
	for (let iterator = 0; iterator < ciphertext.length; iterator++) {
		let currentCharacter = ciphertext.charAt(iterator);
		// Checking if the current character is a letter
		if (alphabet.includes(currentCharacter.toLowerCase()) == true) {
			let isUpper = false;
			// Checking if the current letter is uppercase
			if (alphabet.includes(currentCharacter) == false) {
				isUpper = true;
			}

			currentCharacter = currentCharacter.toLowerCase();
			currentKey = keyIndexes[counter % keyIndexes.length] + 1;
			oldIndex = alphabet.indexOf(currentCharacter);
			newIndex = oldIndex - currentKey;
			while (newIndex < 0) {
				newIndex += 26; 
			}
			decryptedLetter = alphabet.charAt(newIndex);

			if (isUpper == true) {
				decryptedLetter = decryptedLetter.toUpperCase();
			}			

			plaintext += decryptedLetter;
			counter++;
		}

		else {
			plaintext += currentCharacter;
		}
	
	}
	return plaintext;

}

// Defining the variables
const inputBox = document.querySelector("#inputBox");
const outputBox = document.querySelector("#outputBox");
const key = document.querySelector("#keyBox");
const functionDisplay = document.querySelector("#functionDisplay");
let currentFunction = "Encryption";

function changeFunction() {
    if (currentFunction === "Encryption") {
        currentFunction = "Decryption";
    }
    else if (currentFunction === "Decryption") {
        currentFunction = "Encryption";
    }
    functionDisplay.innerHTML = currentFunction;
}


function submit() {
    if (currentFunction === "Encryption") {
        outputBox.value = encrypt(inputBox.value, key.value);
    }
    else if (currentFunction === "Decryption") {
        outputBox.value = decrypt(inputBox.value, key.value);
    }
}