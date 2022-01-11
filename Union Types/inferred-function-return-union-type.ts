// TypeScript infers the return type of a function, hence, if a 
// function returns more than one type of data, TypeScript will 
// infer the return type to be a union of all the possible return types. 
// If you wish to assign the function’s return value to a variable, 
// type the variable as a union of expected return types.

const popStack = (stack: any[]) => {
  if (stack.length) {
    return stack[stack.length-1]; // return type is any
  } else {
    return null;      // return type is null
  }
};
let toys: string[] = ['Doll', 'Ball', 'Marbles'];
let emptyBin: any[] = [];
let item: any | null = popStack(toys); // item has union type
console.log(item);  // Prints "Marbles"
item = popStack(emptyBin);
console.log(item);  // Prints null

type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}

let userData: User | string = createUser()