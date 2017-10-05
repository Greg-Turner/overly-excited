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
    for (let i=0; i<theWordArray.length; i++) {
        let frSentence=(theWordArray[i]);
        let n=(i/3);
        if ((i+1) % 3 == 0 && i>0) {
            for (let j=0; j<n; j++) {
                frSentence += punctuation;
            } 
            frSentence += " ";
        } else {
                frSentence += " ";
            }
        
        
        fnSentence += frSentence;
        console.log(fnSentence);
        }
    }



// Invoke the function and pass in the array
addExcitement(sentence, "?");
addExcitement(nextSentence, "&");
