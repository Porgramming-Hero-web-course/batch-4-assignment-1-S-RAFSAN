{
//

function countWordOccurrences(sentence: string, word: string): number {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    
    const words = lowerSentence.split(" ");
    
    let count = 0;
    for (const word of words) {
        if (word === lowerWord) {
            count++;
        }
    }
    
    return count;
}

console.log(countWordOccurrences("I love typescript", "typescript"));






//
}