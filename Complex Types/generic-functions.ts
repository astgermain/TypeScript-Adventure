function getFilledArray<T>(value: T, n: number): T[] {
    return Array(n).fill(value);
  }
  
  let stringArray: string[];
  let numberArray: number[];
  let personArray: {name: string, age: number}[];
  let coordinateArray: [number, number][];
  
  // Write your code below:
  stringArray = getFilledArray<string>('hi',6)
  numberArray = getFilledArray<number>(9, 6)
  personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24}, 6)
  coordinateArray = getFilledArray<[number, number]>([3,4], 6)
  
  
  // This is a generic function type alias
  function findMiddleMember<M>(members: M[]): M {
    return members[Math.floor(members.length/2)];
  }
   
  // Call function for an array of strings
  console.log(findMiddleMember<string>(['I', 'am', 'very', 'happy'])); // Prints "very"
   
  // Call function for an array of numbers
  console.log(findMiddleMember<number>([210, 369, 102]));     // Prints 369
  
  function getFilledArray<T>(value: T, n: number): T[] {
    return Array(n).fill(value);
  }
  
  let stringArray: string[];
  let numberArray: number[];
  let personArray: {name: string, age: number}[];
  let coordinateArray: [number, number][];
  
  // Write your code below:
  stringArray = getFilledArray<string>('hi',6)
  numberArray = getFilledArray<number>(9, 6)
  personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24}, 6)
  coordinateArray = getFilledArray<[number, number]>([3,4], 6)
  
  