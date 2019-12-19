class Lorem{

    words: string [];
    wordsNoPerSentence: [number, number];
    sentenceNo: [number, number];
    sentenceStartWith: string;
    sentenceEndsWith: string;

    constructor({ words = "Lorem ipsum dolor sit.", wordsNoPerSentence = [2, 7], sentenceNo = [2, 7], sentenceStartWith = '', sentenceEndsWith = '' }: { words?: string, wordsNoPerSentence?: [number, number], sentenceNo?: [number, number], sentenceStartWith?: string, sentenceEndsWith?: string } = {}) {
        this.words = words.length > 0 ? this.getWordsArray(words) : this.getWordsArray("Lorem ipsum dolor sit.");
        this.wordsNoPerSentence = wordsNoPerSentence;
        this.sentenceNo = sentenceNo;
        this.sentenceStartWith = sentenceStartWith;
        this.sentenceEndsWith = sentenceEndsWith;
    }

    getLorem(): string{
        let loremText = '';

        for(let i = 0; i < this.getRndInteger(this.sentenceNo); i++){
            let wordsText = '';
            let maxWords = this.getRndInteger(this.wordsNoPerSentence);
            for(let j = 0; j < maxWords; j++){
                wordsText += j == 0 ? this.capitilizeFirstLetter(this.getRandomWord(this.words)) : this.getRandomWord(this.words);
                wordsText += j == maxWords - 1 ? '. ' : ' ';
            }
            wordsText = this.sentenceStartWith + wordsText + this.sentenceEndsWith;
            loremText += wordsText;
        }

        return loremText;

    }

    /* Allow only alphanumeric characters and space */
    private sanitizeWords(words: string): string{
        return words.replace(/[^0-9a-z ]/gi, '').toLocaleLowerCase();
    }

    /* Get array from words */
    private getWordsArray(words: string) : string[]{
        return this.sanitizeWords(words).split(" ");
    }

    /* Get random integer */
    private getRndInteger(minMax: [number, number]): number {
        const min = minMax[0];
        const max = minMax[1];
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    /* Get random word */
    private getRandomWord(words: string[]): string{
        return words[Math.floor(Math.random() * words.length)];
    }

    /* Capitilize first letter */
    private capitilizeFirstLetter(word: string): string{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    /* Set sentences number */
    setSentencesNo(sentenceNo: [number, number]): void{
        this.sentenceNo = sentenceNo;
    }

    /* Set sentences number */
    setWordsNoPerSentence(wordsNo: [number, number]): void{
        this.wordsNoPerSentence = wordsNo;
    }
}