// Defining the alphabet

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(plaintext, key) {
    // Defining the variables
    let ciphertext = "";

    // Encryption
    for (iterator = 0; iterator < plaintext.length; iterator++) {
        let currentCharacter = plaintext.charAt(iterator);
        let isUpper = false;
        if (alphabet.includes(currentCharacter.toLowerCase()) == true) {

            // Checking if the current letter is uppercase
            if (alphabet.includes(currentCharacter) == false) {
				isUpper = true;
			}

            currentCharacter = currentCharacter.toLowerCase();
            oldIndex = alphabet.indexOf(currentCharacter);
            newIndex = (oldIndex + key) % 26;
            encryptedLetter = alphabet.charAt(newIndex);


            if (isUpper == true) {
                encryptedLetter = encryptedLetter.toUpperCase();
            }

            ciphertext += encryptedLetter;
        }

        else {
			ciphertext += currentCharacter;
		}
    }
    return ciphertext;
}

function decrypt(ciphertext, key) {
    // Defining the variables
    let plaintext = "";

    // Decryption
    for (iterator = 0; iterator < ciphertext.length; iterator++) {
        let currentCharacter = ciphertext.charAt(iterator);
        let isUpper = false;
        if (alphabet.includes(currentCharacter.toLowerCase()) == true) {

            // Checking if the current letter is uppercase
            if (alphabet.includes(currentCharacter) == false) {
				isUpper = true;
			}

            currentCharacter = currentCharacter.toLowerCase();
            oldIndex = alphabet.indexOf(currentCharacter);
            newIndex = oldIndex - key;
            while (newIndex < 0) {
				newIndex += 26;
			}
            decryptedLetter = alphabet.charAt(newIndex);


            if (isUpper == true) {
                decryptedLetter = decryptedLetter.toUpperCase();
            }

            plaintext += decryptedLetter;
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
const shift = document.querySelector("#shiftBox");
const functionDisplay = document.querySelector("#functionDisplay");
let currentFunction = "Encryption";

functionDisplay.innerHTML = currentFunction;

function changeFunction() {
    if (currentFunction === "Encryption") {
        currentFunction = "Decryption";
    }
    else if (currentFunction === "Decryption") {
        currentFunction = "Encryption";
    }
    functionDisplay.innerHTML = currentFunction;
}



function shiftRestiction() {
    if (shift.value < 1 || shift.value > 26) {
        shift.value = "";
        outputBox.value = "";
        alert("Please choose a shift value between 1 and 26 inclusively.");
        return true;
    }
    else {
        return false;
    }
}

function submit() {
    if (shiftRestiction() === false) {
        if (currentFunction === "Encryption") {
            outputBox.value = encrypt(inputBox.value, parseInt(shift.value));
        }
        else if (currentFunction === "Decryption") {
            outputBox.value = decrypt(inputBox.value, parseInt(shift.value));
        }
    }
}

