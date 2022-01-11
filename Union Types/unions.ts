function printNumsAndStrings(statement: number | string) {
    console.log(`ℹ️ LOG:: ${statement}`);
  }
  
  printNumsAndStrings('hello!');
  printNumsAndStrings(12);
  
  // returns 
  // ℹ️ LOG:: hello!
  // ℹ️ LOG:: 12