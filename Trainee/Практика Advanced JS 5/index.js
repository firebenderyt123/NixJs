const vowels = "аеиіїоуєюя";

// var 1
function findVowels(str) {
   const vowels = "аеиіїоуєюяАЕИІЇОУЄЮЯ";
   let count = 0;
   for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
         if (str.charAt(i).toLowerCase() === vowels.charAt(j)) {
            count++;
         }
      }
   }
   return count;
}

console.log(findVowels("Привіт")); // => 2
console.log(findVowels("Абракадабра")); // => 5

// var 2
function findVowels(str) {
   let count = 0;
   for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
         count++;
      }
   }
   return count;
}
console.log(findVowels("Привіт")); // => 2
console.log(findVowels("Абракадабра")); // => 5

// var 3
function findVowels(str) {
   return (str.match(/[аеиіїоуєюя]/gi) || []).length;
}

console.log(findVowels("Привіт")); // => 2
console.log(findVowels("Абракадабра")); // => 5
