function stringChop(str, size) {
  // your code here
	    // Check if the input string is null, if so return an empty array
    if (str === null) {
        return [];
    }

    // Initialize an array to hold the chunks
    let chunks = [];

    // Loop through the string and slice it into chunks
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
