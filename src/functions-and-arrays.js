// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(7, 90));

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(wordsArr) {
  if (!wordsArr.length) {
    return null;
  }
  let longestWord = "";

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > longestWord.length) {
      longestWord = wordsArr[i];
    }
  }
  return longestWord;
}

console.log("findLongestWord is ; ", findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
  let sumNumbers = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sumNumbers += numbersArr[i];
  }
  return sumNumbers;
}

console.log("sumNumbers is : ", sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2Arr) {
  if (!numbers2Arr.length) {
    return 0;
  }
  return sumNumbers(numbers2Arr) / numbers2Arr.length;
}

console.log("averageNumbers : ", averageNumbers(numbers2));

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words2Arr, wordToSearch) {
  if (!words2Arr.length) {
    return null;
  } 
  for (let i = 0; i < words2Arr.length; i++) {
    if (words2Arr[i] === wordToSearch) {
      return true;
    }
  }
  return false;  // Si on sort de la boucle sans avoir trouvé le mot, alors il n'existe pas
}
console.log(doesWordExist(words2, "subset"));
