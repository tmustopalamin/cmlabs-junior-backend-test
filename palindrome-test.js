class Task2 {
  constructor(word) {
    this.word = word;
    this.withSpaces = true;
  }

  reverseString = () => {
    let reversed = ""; //prepare empty variabel for the reversed string
    for (let w of this.word) {
      //loop all word as usually
      reversed = w + "" + reversed; // every char who entered to variabel should placed in the front (left side) of previous char (right side)
      // abcd , loop 1 = a, loop 2 = b+a = ba, loop 3 = c+ba = cba
    }
    return reversed;
  };

  removeSpaces = (str) => {
    return str.split(" ").join("");
  };

  //solution
  palindromSolution = () => {
    const reversed = this.reverseString().toLowerCase();
    if (this.withSpaces) {
      return reversed === this.word.toLowerCase();
    }
    return (
      this.removeSpaces(reversed) === this.removeSpaces(this.word.toLowerCase())
    );
  };

  isPalindrome = () => {
    console.log("Palindrome without spaces: ", this.palindromSolution());

    this.withSpaces = false;
    console.log("Palindrome include spaces: ", this.palindromSolution());
    console.log("");
  };
}

const word1 = new Task2("SAIPPUAKIVIKAUPPIAS");
word1.isPalindrome();

const word2 = new Task2("Aibohphobia");
word2.isPalindrome();

const word3 = new Task2("Anna");
word3.isPalindrome();

const word4 = new Task2("My gym");
word4.isPalindrome();

const word5 = new Task2("No lemon, no melon");
word5.isPalindrome();
