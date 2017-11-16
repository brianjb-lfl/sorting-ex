'use strict';

const sort = require('./sort');

// ***** O(n) ARRAY SORT

function sortArr(inArr, min, max) {
  let myObj = {};
  let newArr = [];
  let n;

  for (let i = 0; i < inArr.length; i++) {
    if(myObj[inArr[i]]) {
      myObj[inArr[i]] += 1;
    }
    else {
      myObj[inArr[i]] = 1;
    }
  }

  for (let i = min; i <= max; i++) {
    if(myObj[i]) {
      n = myObj[i];
      for(let j = 0; j < n; j++) {
        newArr.push(i);
      }
    }
  }
  return newArr;
}


// const oldArr = [5,2,3,10,-3,15,20,-18,5,27,3];
// const min = Math.min(...oldArr);
// const max = Math.max(...oldArr);

// console.log('--- before ---');
// console.log(oldArr);
// console.log(' ');
// console.log('--- after ---');
// console.log(sortArr(oldArr, min, max));


// ***** SHUFFLE

function shuffle (inArr) {
  
  let shuffledArr = inArr.slice();
  let tempItem;
  let selIdx;
  
  // shuffle cards - Fisher-Yates
  for(let i = (shuffledArr.length - 1); i > 0; i--) {
    selIdx = Math.floor(Math.random()*(i+1));
    tempItem = shuffledArr[selIdx];
    shuffledArr[selIdx] = shuffledArr[i];
    shuffledArr[i] = tempItem;
  }
  
  return shuffledArr;
}
  
  
// const sortedArr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ];
// console.log('----- before -----');
// console.log(sortedArr);
// console.log(' ');
// console.log('----- after -----');
// console.log(shuffle(sortedArr));
  

// ***** TEST BOOK SORT

const bookArr = [
  "Theory of money and credit",
  "Blink",
  "Freakanomics",
  "Big short",
  "Games that changed the game",
  "Self-taught programmer",
  "Outliers",
  "All the devils are here"
];

console.log(sort.quickSort(bookArr));