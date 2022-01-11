let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

let myArr = dogTup.concat(dogTup)
myArr[50] = 'not a dog';
console.log(myArr)

//In the code above, TypeScript infers the variable ,myArr as an array of numbers, not a tuple.
//The takeaway here is that type inference returns arrays. When we want tuples, we need to use explicit type annotations.
