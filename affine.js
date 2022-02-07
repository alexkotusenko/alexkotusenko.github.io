
// Defining variables
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const a_values = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
const a_inverses = [1, 9, 21, 15, 3, 19, 7, 23, 11, 5, 17, 25];

// Ecnryption
function encrypt(plaintext, a, b) {
    let ciphertext = "";

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
            let newIndex = oldIndex * a + b;
            while (newIndex > 25) {
				newIndex -= 26;
			}
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

// Decryption
function decrypt(ciphertext, a, b) {
    let plaintext = "";
    console.log("Old a: " + a);
    a = a_inverses[a_values.indexOf(a)];
    console.log("New a: " + a);
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
            let newIndex = (oldIndex * a - b) % 26;
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
const aBox = document.querySelector("#aBox");
const bBox = document.querySelector("#bBox");
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

function submit() {
    if (currentFunction === "Encryption") {
        outputBox.value = encrypt(inputBox.value, aBox.value, bBox.value);
    }
    else if (currentFunction === "Decryption") {
        outputBox.value = decrypt(inputBox.value, aBox.value, bBox.value);
    }
}
