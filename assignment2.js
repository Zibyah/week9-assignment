// This line declares a function named printPersonDetails that takes one parameter, 'peopleArray'

function printPersonDetails(peopleArray) {
    for (let i = 0; i < peopleArray.length; i++) {  // initiates a for loop that iterates over each element in the peopleArray array.
      const person = peopleArray[i];    //a variable 'person', assigned the value of the current element in the array
      console.log(`Person ${i + 1}:`);  //  prints the person's index in the array.
      console.log(`  Gender: ${person.gender}`); //  These lines use console.log to print information about each person
      console.log(`  Age: ${person.age}`);
    }
  }
  
  // Example usage:
  const peopleArray = [
    { gender: "Male", age: 30 },
    { gender: "Female", age: 25 },
  ];
  
  printPersonDetails(peopleArray);
  