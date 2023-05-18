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
          score += letterValues[letters];
          break;
        }
      }
    }

    return score;
  }
}

export default Scrabble;
