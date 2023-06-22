'use strict';

// const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  console.log(arr);
  arr.sort(compareYear);
  return arr;
}


function compareYear(a, b) {
  //do the thing
  return b.year - a.year;
}

function sortTitle(arr) {
  arr.sort(compareTitle);
  return arr;
}


function compareTitle(a, b) {
  //do the thing
  const titleA = removeWords(a.title);
  const titleB = removeWords(b.title);

  if (titleA < titleB) { //if a < b is true move it before b in the sorted array
    return -1;
  } else if (titleA > titleB) { //if a > b is true move it after b in the sorted array
    return 1;
  } else { //if equivalent in the comparison
    return 0;
  }
}

function removeWords(title) { //takes movie title as a param
  const removedWords = ['A', 'An', 'The']; //words to be removed
  const words = title.split(' '); //splits the title string into an array of words

  if (removedWords.includes(words[0])) { //checks if the first word is included in removedWords
    return words.slice(1).join(' ');
  }
  return title;
}


module.exports = { sortYear, compareYear, sortTitle, compareTitle, removeWords };
