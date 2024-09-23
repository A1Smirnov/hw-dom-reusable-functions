console.log(`Testing Reusable Functions`);

console.log('-----------------------------------');
console.log('%cPart 1: Thinking Functionally', 'font-size: 16px');
console.log('-----------------------------------');

// 1. Take an array of numbers and return the sum.

function sumArray(numbers) {
    // reduce - make sum that starts with zero value and add to acc current number
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sumArray([1, 2, 3, 4, 5]));

  // 2. Take an array of numbers and return the average.
  
  function avgArray(numbers) {
    // Avoiding conflict to div by 0
    if (numbers.length === 0) return 0;
    // Make sum
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    // Calculate average
    return sum / numbers.length;
  }
  console.log(avgArray([1, 2, 3, 4, 5]));

  // 3. Take an array of strings and return the longest string.
  
  function longestString(strings) {
    // Compare longest string with current string, if current longer then longest make longest=current
    return strings.reduce((longest, current) => current.length > longest.length ? current : longest, "");
  }
  console.log(longestString(["say", "hello", "in", "the", "morning"])); // "morning"

  // 4. Take an array of strings, and a number and return an array of the strings that are longer than the given number.
  // For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
  
  function cutShortStrings(strings, maxLength) {
    // We filter array, If string length > max length then we return it
    return strings.filter(str => str.length > maxLength);
  }
  console.log(cutShortStrings(['say', 'hello', 'in', 'the', 'morning'], 3));
  
    // 5. Take a number, n, and print every number between 1 and n without using loops. Use recursion.

  function printNumbers(n) {
    // Print numbers between 1 and N, that mean we don't include 1 and last n value
    if (n > 2) {
      printNumbers(n-1);
      console.log(n-1);
    }
  }
  printNumbers(7); 

console.log('-----------------------------------');
console.log('%cPart 2: Thinking Methodically', 'font-size: 16px');
console.log('-----------------------------------');

const list =
    [   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "48", name: "Barry", occupation: "Runner", age: "25" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// 1. Sort the array by age. If a>b then switch their place
const sortByAge = list.sort((a, b) => a.age - b.age);
console.log(sortByAge);

// 2. Filter the array to remove entries with an age greater than 50.
const filterByAge = list.filter(person => person.age <= 50);
console.log(filterByAge);

// 3. Map the array to change the “occupation” key to “job” and increment every age by 1.
const newList = list.map(person => {
    return {
      id: person.id,
      name: person.name,
      job: person.occupation, // change key value form "occupation" to "job"
      age: parseInt(person.age) + 1 // increment every age by 1
    };
  });
  console.log(newList);

//   Use the reduce method to calculate the sum of the ages.
const sumAge = list.reduce((sum, person) => sum + parseInt(person.age), 0);
console.log(`Sum of persons age is: ${sumAge} years.`);

// Then use the result to calculate the average age
const avgAge = sumAge / list.length;
console.log(`Persons in list are ${avgAge} years old in average`);

