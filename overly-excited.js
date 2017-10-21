// Create an array that contains the words in the sentence
let nextSentence = [
    "What",
    "a",
    "crazy",
    "sight",
    "to",
    "see",
    "this",
    "creature",
    "frolicing",
    "in",
    "the",
    "woods"
];

// Create a second array that contains the words in the sentence
let sentence = [
    "The",
    "walrus",
    "danced",
    "through",
    "the",
    "trees",
    "in",
    "the",
    "light",
    "of",
    "the",
    "moon"
];
/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
function addExcitement (theWordArray, punctuation) {
    let fnSentence="";

    // loop through theWordArray
    for (let i=0; i<theWordArray.length; i++) {
        let frSentence=(theWordArray[i]);
        let n=(i/3);
        
        // add 1 to the index (which begins at 0) and divid by 3. If the remainder (%) = 0 and index is not the first one (0)
        if ((i+1) % 3 == 0 && i>0) {

            // since this will occur only on 3rd words, loop through the multiples of 3 in the index to add that number of punctuations
            for (let j=0; j<n; j++) {

                // add the punctuation to the word
                frSentence += punctuation;
            } 

            // add a space after the word
            frSentence += " ";

        // otherwise just add a space after the word 
        } else {
                frSentence += " ";
            }
        
        // add the word including any added punctuation and space to the current sentence
        fnSentence += frSentence;

        // diplay the current sentance in the console
        console.log(fnSentence);
        }
    }



// Invoke the function and pass in the array and punctuation
addExcitement(sentence, "?");

// Invoke the function again with a new array and new punctuation
addExcitement(nextSentence, "&");
