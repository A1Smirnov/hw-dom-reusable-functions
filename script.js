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

//  4. Use the reduce method to calculate the sum of the ages.
const sumAge = list.reduce((sum, person) => sum + parseInt(person.age), 0);
console.log(`Sum of persons age is: ${sumAge} years.`);

//  5. Then use the result to calculate the average age
const avgAge = sumAge / list.length;
console.log(`Persons in list are ${avgAge} years old in average`);

console.log('-----------------------------------');
console.log('%cPart 3: Thinking Critically', 'font-size: 16px');
console.log('-----------------------------------');

// 1. Take an object and increment its age field.
function incrementAge(person) {
  if (!person.age) {
    // if the object does not yet contain an age field, create one and set it to 0
      person.age = 0;
  } else {
      person.age += 1;
  }
  // add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
  person.updTime = new Date();
  return person;
}

// Testing:
let person1 = { id: "42", name: "Borat" };
console.log(incrementAge(person1));

// 2. Take an object, make a copy, and increment the age field of the copy. Return the copy.
function incrementAgeCopy(person) {
  const copy = { ...person };
  if (!copy.age) {
      copy.age = 0;
  } else {
      copy.age += 1;
  }
  copy.updTime = new Date();
  return copy;
}

// Testing 2:
let person2 = { id: "78", name: "Azamat" };
const updatedCopy = incrementAgeCopy(person2);
console.log(updatedCopy);
console.log(person2);

// Date is an object. If you change it in copy, date of copy will change too (due to memory dump address). That mean we need new Date object for each copy of this attribute.

const date = new Date();
const dateCopy = new Date(date); // New Date Object for copy attribute
dateCopy.setTime(Date.now() + 3600000); // Change Time in copy

console.log('Original Date:', date);
console.log('Modified Date:', dateCopy);

console.log('-----------------------------------');
console.log('%cPart 4: Thinking Practically', 'font-size: 16px');
console.log('-----------------------------------');

// We compare salaries in IT team
// Our Employers
const employees = [
  { id: "1", name: "Cat", salary: 60000, job: "Engineer" },
  { id: "2", name: "Shark", salary: 75000, job: "Manager" },
  { id: "3", name: "Bird", salary: 45000, job: "Intern" },
  { id: "4", name: "Dog", salary: 52000, job: "Designer" }
];

// 1. Function to add employee
function addEmployee(list, newEmployee) {
  list.push(newEmployee);
}

// 2. Function for salary sum
function getSumSalary(list) {
  return list.reduce((sum, employee) => sum + employee.salary, 0);
}

// 3. Function for average salary
function getAvgSalary(list) {
  if (list.length === 0) return 0;
  const totalSalary = getSumSalary(list);
  return totalSalary / list.length;
}

// 4. Function for filtering employee
function filterByMinSalary(list, minSalary) {
  return list.filter(employee => employee.salary >= minSalary);
}

// 5. Function for changing value of salary
function updateSalary(employeeId, newSalary, list) {
  const employee = list.find(emp => emp.id === employeeId);
  if (employee) {
      employee.salary = newSalary;
  }
}

// Let's use this functions

addEmployee(employees, { id: "01", name: "Neo", salary: 180000, job: "Director" });

console.log("Total Salary:", getSumSalary(employees)); 
console.log("Average Salary:", getAvgSalary(employees));
console.log("Employees with salary >= 60000:", filterByMinSalary(employees, 60000));

updateSalary("3", 50000, employees);
console.log("Updated Employees:", employees); 


console.log('-----------------------------------');
console.log('%cPart 5: Thinking Back', 'font-size: 16px');
console.log('-----------------------------------');

console.log(`Thinking back: I had to use different layout to increase code readability and optimize some functions and code.`)