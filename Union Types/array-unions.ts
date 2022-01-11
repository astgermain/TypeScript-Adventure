// TypeScript allows you to declare a union of an array of different types.
// Remember to enclose the union in parentheses, (...), 
// and append square brackets, [] after the closing parenthesis.

function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900,
]);

console.log(result);

const removeDashes = (id: string | number) => {
  if (typeof id === 'string') {
    id = id.split('-').join('');
    return parseInt(id);
  } else {
    return id;
  }
} 
// This is a union of array types
let ids: (number | string)[] = ['93-235-66', '89-528-92'];
let newIds: (number | string)[] = [];
for (let i=0; i < ids.length; i++) {
  newIds[i] = removeDashes(ids[i]); // Convert string id to number id
}
console.log(newIds);  // Prints [9323566, 8952892]