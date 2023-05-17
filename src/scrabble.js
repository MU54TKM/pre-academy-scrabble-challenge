class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (!this.word || typeof this.word !== "string") {
      return 0;
    }

    const letterValues = {
      AEIOULNRST: 1,
      DG: 2,
      BCMP: 3,
      FHVWY: 4,
      K: 5,
      JX: 8,
      QZ: 10,
    };

    let score = 0;
    for (let i = 0; i < this.word.length; i++) {
      for (const letters in letterValues) {
        if (letters.includes(this.word[i].toUpperCase())) {
          let letterScores = letterValues[letters];
          if (
            i + 1 < this.word.length &&
            this.word[i + 1].toUpperCase() === this.word[i].toUpperCase()
          ) {
            //Double letter
            letterScores *= 2;
          }
          if (
            i + 2 < this.word.length &&
            this.word[i + 2].toUpperCase() === this.word[i].toUpperCase()
          ) {
            //Triple letter
            letterScores *= 3;
          }
          score += letterScores;
          break;
        }
      }
    }

    //Double word or triple word
    if (this.word.length >= 7) {
      score * 2;
    } else if (this.word.length >= 5) {
      score *= 3;
    }

    return score;
  }
}

export default Scrabble;
