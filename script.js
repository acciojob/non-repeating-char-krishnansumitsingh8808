function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let isRepeated = false;

    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isRepeated = true;
        break; // Exit inner loop as soon as a repeat is found
      }
    }

    if (!isRepeated) {
      return str[i]; // Return the first non-repeated character
    }
  }

  // If no character is non-repeated, return null
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
