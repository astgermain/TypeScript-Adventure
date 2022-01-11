// Interfaces vs Types

type Mail = {
  postagePrice: number;
  address: string;
}
 
const catalog: Mail = ...

interface Mail {
  postagePrice: number;
  address: string;
}
 
const catalog: Mail = ...


// Notice the difference from the lack of = between type and interfaces

// The biggest difference between interface and type is that interface 
// can only be used to type objects, while type can be used to type 
// objects, primitives, and more. As it turns out, type is more versatile 
// and functional than interface. So why would we use interface?

// Sometimes, we don’t want a type that can do everything. 
// We’d like our types to be constrained so we’re more 
// likely to write consistent code. Since interface may only 
// type objects, it’s a perfect match for writing 
// object-oriented programs because these programs need many typed objects.