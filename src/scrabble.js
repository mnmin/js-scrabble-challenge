// 1 - Create object with keys equal to letters and their values
// 2 - Create a function for initial score = 0 for no words/letters
// 3 - Create a fuction where you input a letter/word and it calucates, a score and reassign this score to score value.

// Restart
//1 create a class for Scrabble where you input a word and the output is a score for that word.
// 1 

const scrabbleScore = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
}


class Scrabble {
  constructor (word) {
    this.word = word
    this.totalScore = 0 
  }
  
  score () {
    if (this.word === null) {
      return 0
    }
    // Loop through each letter of the word. 
    for (let i = 0; i < this.word.length; i++) {  
      // let i = 0 starts the for loop at index 0.
      // i smaller than this.word.length because if larger, loop stops.
    //  console.log(i, this.word.charAt(i))
      // prints character at index i
      const currentLetter = this.word.charAt(i).toLowerCase()
      // new variable, this is needed to store printed character from loop
     // console.log(scrabbleScore[currentLetter])
      // prints scrabbleScore of currentLetter. 
      const letterScore = scrabbleScore[currentLetter]
      if (letterScore === undefined) {
         continue
      }
      // new variable to store scrabble score for currentletter index score
      this.totalScore = this.totalScore + letterScore
      // add letter score to total score
    }
    
    
    // When the loop passes for each letter I need to get the score for that letter through scrabbleScore
    // I need to add the letter score to the total score to this.totalScore.
    return this.totalScore
  }
}
let scrabble = new Scrabble ('')
//console.log(scrabble.word)
//console.log(scrabble.totalScore)
//console.log(scrabble.score())
// Create an obbect where keys equal to letters and their values for Scrabble



module.exports = Scrabble
