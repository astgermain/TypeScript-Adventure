function formatValue(value: string | number) {
    //Type narrowing is when TypeScript can figure out what type a variable can be at a given point in our code.  Type narrowing allows us to use unions, then perform type-specific logic without TypeScript getting in the way.
  
    //Type guard
    if(typeof value === 'string'){
      console.log(value.toLowerCase())
    }
    else if(typeof value === 'number'){
      console.log(value.toFixed(2))
    }
  }
  
  formatValue('Hiya');
  formatValue(42);