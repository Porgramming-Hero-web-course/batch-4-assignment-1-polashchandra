function countWordOccurrences(sentence: string, word: string){
    const words = sentence.toLowerCase().split(' ');
    const targetWord = word.toLowerCase();
    let count = 0;

    for (const P of words) {
        if (P === targetWord) {
            count++;
        }
    }

    return count;
}


console.log(countWordOccurrences("I love typescript", "typescript"))