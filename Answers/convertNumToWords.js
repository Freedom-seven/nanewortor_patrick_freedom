// const arr = (x) => Array.from(x);
// const num = (x) => Number(x) || 0;
// const str = (x) => String(x);
// const isEmpty = (xs) => xs.length === 0;
// const take = (n) => (xs) => xs.slice(0, n);
// const drop = (n) => (xs) => xs.slice(n);
// const reverse = (xs) => xs.slice(0).reverse();
// const comp = (f) => (g) => (x) => f(g(x));
// const not = (x) => !x;
// const chunk = (n) => (xs) =>
//   isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

// let numToWords = (n) => {
//   let a = [
//     "",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//     "ten",
//     "eleven",
//     "twelve",
//     "thirteen",
//     "fourteen",
//     "fifteen",
//     "sixteen",
//     "seventeen",
//     "eighteen",
//     "nineteen",
//   ];
//   let b = [
//     "",
//     "",
//     "twenty",
//     "thirty",
//     "forty",
//     "fifty",
//     "sixty",
//     "seventy",
//     "eighty",
//     "ninety",
//   ];
//   let g = ["", "thousand"];

//   let makeGroup = ([ones, tens, huns]) => {
//     return [
//       num(huns) === 0 ? "" : a[huns] + " hundred",
//       num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + "-") || "",
//       a[tens + ones] || a[ones],
//     ].join("");
//   };

//   let thousand = (group, i) => (group === "" ? group : `${group} ${g[i]}`);

//   if (typeof n === "number") return numToWords(String(n));
//   if (n === "0") return "zero";
//   if (n < 1) return console.log("Number is below 1");
//   if (n > 5000) return console.log("Number is above 5,000");
//   if (n )

//   return comp(chunk(3))(reverse)(arr(n))
//     .map(makeGroup)
//     .map(thousand)
//     .filter(comp(not)(isEmpty))
//     .reverse()
//     .join(" ");
// };

// console.log(numToWords(100));

function convertNumToWords(n, custom_join_character) {
  if (n > 5000) {
    return (words = "number too large");
  } else {
    var string = n.toString(),
      units,
      tens,
      scales,
      start,
      end,
      chunks,
      chunksLen,
      chunk,
      ints,
      i,
      word,
      words;

    var and = custom_join_character || "and";

    if (parseInt(string) === 0) {
      return "zero";
    }

    units = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    scales = ["", "thousand"];

    start = string.length;
    chunks = [];
    while (start > 0) {
      end = start;
      chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
      return "";
    }

    words = [];
    for (i = 0; i < chunksLen; i++) {
      chunk = parseInt(chunks[i]);

      if (chunk) {
        ints = chunks[i].split("").reverse().map(parseFloat);

        if (ints[1] === 1) {
          ints[0] += 10;
        }

        if ((word = scales[i])) {
          words.push(word);
        }

        if ((word = units[ints[0]])) {
          words.push(word);
        }

        if ((word = tens[ints[1]])) {
          words.push(word);
        }

        if (ints[0] || ints[1]) {
          if (ints[2] || (!i && chunksLen)) {
            words.push(and);
          }
        }

        if ((word = units[ints[2]])) {
          words.push(word + " hundred");
        }
      }
    }

    return words.reverse().join(" ");
  }
}

module.exports = convertNumToWords;
