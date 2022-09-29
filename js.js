function narcissistic(value) {
  // Code me to return true or false
  let string = String(value);
  let mass = Array.from(string);
  let sum = 0;
  for (let i = 0; i < mass.length; i++) {
    let num = Number(mass[i]) ** mass.length;
    sum += num;
  }
  return value == sum ? true : false;
}

// return masked string
function maskify(cc) {
  let arr = Array.from(String(cc));
  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = "#";
  }
  let masked = arr.join("");
  return masked;
}

function descendingOrder(n) {
  //...
  let string = String(n);
  let mass = Array.from(string);
  let sorted = mass.sort((a, b) => b - a);
  return Number(sorted.join(""));
}

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sorted = numbers.sort((a, b) => a - b);
  sum = +sorted[0] + +sorted[1];
  return sum;
}

function nbYear(p0, percent, aug, p) {
  // your code
  let n = 0;
  while (p0 <= p) {
    p0 += Math.floor(p0 * percent) / 100 + aug;
    n++;
  }
  return n;
}

function createPhoneNumber(numbers) {
  let phone =
    "(" +
    numbers.splice(0, 3).join("") +
    ")" +
    " " +
    numbers.splice(0, 3).join("") +
    "-" +
    numbers.splice(0, 4).join("");
  return phone;
}

var countBits = function (n) {
  // Program Me
  let binar = n.toString(2);
  let count = 0;
  for (key in binar) {
    if (Number(binar[key])) {
      count += Number(binar[key]);
    }
  }
  return count;
};

function srt(str) {
  let srtArr = Array(str).sort();
  return srtArr;
}

function rgb(r, g, b) {
  // complete this function
  let hex = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] >= 255) {
      arguments[i] = 255;
      hex += arguments[i].toString(16);
    } else if (arguments[i] <= 0) {
      hex += "00";
    } else if (arguments[i] <= 15) {
      hex += +"0" + arguments[i].toString(16);
    } else {
      hex += arguments[i].toString(16);
    }
  }
  return hex.toUpperCase();
}

function rot13(message) {
  //your code here
  let rot = "";
  for (let i = 0; i < message.length; i++) {
    let letter = message[i].charCodeAt();
    let codedL = letter + 13;
    if (letter <= 122 && letter >= 97) {
      let coded = codedL > 122 ? codedL - 26 : codedL;
      rot += String.fromCharCode(coded);
    } else if (letter <= 90 && letter >= 65) {
      let coded = codedL > 90 ? codedL - 26 : codedL;
      rot += String.fromCharCode(coded);
    } else {
      rot += message[i];
    }
  }
  return rot;
}

function alphabetPosition(text) {
  let num = "";
  let str = text.toLocaleLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123) {
      num += String(str[i].charCodeAt() - 96);
      num += " ";
    }
  }
  text = num.endsWith(" ") ? num.slice(0, -1) : num;
  return text;
}

let mass = [1, 16, 9, 23, 23, 23, 23, 9, 16, 14, 14, 9, 16, 9, 9, 16, 14, 16, 23, 14];

function deleteNth(mass, n) {
  // ...
  let newArr = [];
  let powt = new Object();
  for (key in mass) {
    powt[mass[key]] = 1;
  }
  for (i in mass) {
    if (!newArr.includes(mass[i])) {
      newArr.push(mass[i]);
    } else if (newArr.includes(mass[i]) && powt[mass[i]] < n) {
      powt[mass[i]]++;
      newArr.push(mass[i]);
    }
  }
  let result = typeof newArr[newArr.length - 1] != "number" ? newArr.pop() : newArr;
  let arr = String.newArr;
  return newArr;
}

function firstNonRepeatingLetter(s) {
  // Add your code here
  let arr = Array.from(s.toLowerCase());
  let n = arr.indexOf(arr.filter((el) => !arr.includes(el, arr.indexOf(el) + 1))[0]);
  return s[n] || "";
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSequence(arr) {
  let sum = {};
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    sum[i] = arr.reduce((a, b) => a + b);
    console.log(arr);
    arr.shift();
  }
  console.log(arr);
  return sum;
}

let board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];
function isUnique(arr) {
  let uniqArr = [...new Set(arr)];
  if (uniqArr.length < 9) {
    return false;
  }
  return true;
}

function sudocu(board) {
  let col = {};
  let row = {};
  let mass = {};
  for (let i = 0; i < 9; i++) {
    row[i] = board[i].reduce((prev, curr) => prev + curr, 0);
    col[i] = [];
    if (!isUnique(board[i])) {
      return "try again";
    }
    for (let j = 0; j < 9; j++) {
      col[i].push(board[i][j]);
    }
    if (!isUnique(col[i])) {
      return "try again";
    }
  }

  let colI = 0;
  let rowJ = 0;

  for (let a = 0; a < 9; a++) {
    mass[a] = [];
    if (colI < 6 && a !== 0) {
      colI += 3;
    } else {
      colI = 0;
    }

    if (rowJ < 6 && (a === 3 || a === 6)) {
      rowJ += 3;
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        mass[a].push(board[i + colI][j + rowJ]);
      }
    }
    if (!isUnique(mass[a])) {
      return "try again";
    }
  }
  return "You win";
}

class PaginationHelper {
  constructor(array, itemsPerPage) {
    this.array = array;
    this.itemsPerPage = itemsPerPage;
    this.pages;
  }
  pageCount() {
    return Math.ceil(this.array.length / this.itemsPerPage);
  }
  itemCount() {
    return this.array.length;
  }

  pageItemCount(pageIndex) {
    return pageIndex < this.pageCount() && pageIndex > 0
      ? Math.min(this.itemsPerPage, this.array.length - pageIndex * this.itemsPerPage)
      : -1;
  }
  pageIndex(itemIndex) {
    return itemIndex < this.collection.length && itemIndex >= 0
      ? Math.floor(itemIndex / this.itemsPerPage)
      : -1;
  }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

class RomanNumerals {
  constructor() {}
  static symbols = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  static toRoman(number) {
    let result = "";
    for (let key in this.symbols) {
      let count = number / this.symbols[key];
      result = count >= 1 ? result + key : "";
      if (count === 1) {
        break;
      }
    }
    return result;

    // console.log(m, d, c, l, x, v, i);
  }
  static fromRoman(number) {
    if (typeof number === "number") return number;
  }
}

// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman("M"); // should return 1000
