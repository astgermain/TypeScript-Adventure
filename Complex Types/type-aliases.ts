type Coord = [number, number, string, number, number, string]

let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];


// This is a type alias
type Student = {
    name: string,
    age: number,
    courses: string[]
  };
   
  let boris: Student = {name: 'Boris', age: 35, courses: ['JavaScript', 'TypeScript']};

  
// This is also a type alias with the same type as Student
type Employee = {
    name: string,
    age: number,
    courses: string[]  
  }
   
  let studentBoris: Student = {name: 'Boris', age: 35, courses: ['JavaScript', 'TypeScript']};
  let employeeBoris: Employee = studentBoris;     // No error
  console.log(studentBoris === employeeBoris);    // Prints true

  // This is a function type alias
type NumberArrayToNumber = (numberArray: number[]) => number;
 
// This function uses a function type alias
let sumAll: NumberArrayToNumber = function(numbers: number[]) {
  let sum = 0;
  for (let i=0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
 
// This function also uses the same function type alias
let computeAverage: NumberArrayToNumber = function(numbers: number[]) {
  return sumAll(numbers)/numbers.length;
};
 
console.log(computeAverage([5, 10, 15]));   // Prints 10