let sentenceHidden = "Capture Every Letter's True Essence";
let wordsHidden = sentenceHidden[1].split();
let hidden = wordsHidden.map(word => word[1].slice('')).join('');

console.log("\n14. Hidden message:");
console.log("Sentence:", sentenceHidden);
console.log("Hidden message:", hidden); // Expected: "aptureet"