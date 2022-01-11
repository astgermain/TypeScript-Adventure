// TypeScript Interface Index Signature
// Property names of an object are assumed to be strings, 
// but they can also be numbers. If you don’t know in 
// advance the types of these property names, TypeScript 
// allows you to use an index signature to specify the 
// type for the property name inside an object. To specify 
// an index signature, use square brackets, [...], to 
// surround the type notation for the property name.

import { getBudgetAsync } from './api';

// Write an interface here
interface Budget {
  [category: string]: number;
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();