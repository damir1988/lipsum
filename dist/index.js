"use strict";
var Lorem = /** @class */ (function () {
    function Lorem(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.words, words = _c === void 0 ? "Lorem ipsum dolor sit." : _c, _d = _b.wordsNoPerSentence, wordsNoPerSentence = _d === void 0 ? [2, 7] : _d, _e = _b.sentenceNo, sentenceNo = _e === void 0 ? [2, 7] : _e, _f = _b.sentenceStartWith, sentenceStartWith = _f === void 0 ? '' : _f, _g = _b.sentenceEndsWith, sentenceEndsWith = _g === void 0 ? '' : _g;
        this.words = words.length > 0 ? this.getWordsArray(words) : this.getWordsArray("Lorem ipsum dolor sit.");
        this.wordsNoPerSentence = wordsNoPerSentence;
        this.sentenceNo = sentenceNo;
        this.sentenceStartWith = sentenceStartWith;
        this.sentenceEndsWith = sentenceEndsWith;
    }
    Lorem.prototype.getLorem = function () {
        var loremText = '';
        for (var i = 0; i < this.getRndInteger(this.sentenceNo); i++) {
            var wordsText = '';
            var maxWords = this.getRndInteger(this.wordsNoPerSentence);
            for (var j = 0; j < maxWords; j++) {
                wordsText += j == 0 ? this.capitilizeFirstLetter(this.getRandomWord(this.words)) : this.getRandomWord(this.words);
                wordsText += j == maxWords - 1 ? '. ' : ' ';
            }
            wordsText = this.sentenceStartWith + wordsText + this.sentenceEndsWith;
            loremText += wordsText;
        }
        return loremText;
    };
    /* Allow only alphanumeric characters and space */
    Lorem.prototype.sanitizeWords = function (words) {
        return words.replace(/[^0-9a-z ]/gi, '').toLocaleLowerCase();
    };
    /* Get array from words */
    Lorem.prototype.getWordsArray = function (words) {
        return this.sanitizeWords(words).split(" ");
    };
    /* Get random integer */
    Lorem.prototype.getRndInteger = function (minMax) {
        var min = minMax[0];
        var max = minMax[1];
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /* Get random word */
    Lorem.prototype.getRandomWord = function (words) {
        return words[Math.floor(Math.random() * words.length)];
    };
    /* Capitilize first letter */
    Lorem.prototype.capitilizeFirstLetter = function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    /* Set sentences number */
    Lorem.prototype.setSentencesNo = function (sentenceNo) {
        this.sentenceNo = sentenceNo;
    };
    /* Set sentences number */
    Lorem.prototype.setWordsNoPerSentence = function (wordsNo) {
        this.wordsNoPerSentence = wordsNo;
    };
    return Lorem;
}());
