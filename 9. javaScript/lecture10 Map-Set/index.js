
// javascript set method 

const set1 = new Set();

// he add() method of Set instances inserts a new element 
set1.add(10)
set1.add(20)

console.log(set1, "add")

// The clear() method of Set instances removes all elements from this set.
// set1.clear();

console.log(set1)

// The delete() method of Set instances removes a specified value from this set, if it is in the set.
set1.delete(20)

console.log(set1, "delete")

// The has() method of Set instances returns a boolean

console.log(set1.has(6))

// The difference() method returns a new set containing elements in this set but not in the given set.

const odds = new Set([1,3,5,7]);
const squares = new Set([1,5,9])

console.log(odds.difference(squares));

// The intersection() method returns a new set containing elements in both this set and the given set.

console.log(odds.intersection(squares));

// The isDisjointFrom() method returns a boolean indicating if this set has no elements in common with the given set.
{
const primes = new Set([1,2,3]);
const squares1 = new Set([1,2,3]);
console.log(primes.isDisjointFrom(squares1)); 
}
// The isSubsetOf() method returns a boolean indicating if all elements of this set are in the given set. so true
{
const fours = new Set([4, 8, 12, 16]);
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 18]);
console.log(fours.isSubsetOf(evens)); // true
}
// The union() method returns a new set containing elements which are in either or both of this set and the given set.

{
    const evens = new Set([2, 4, 6, 8]);
 const squares3 = new Set([1, 4, 9]);
 console.log(evens.union(squares3)); // Set(6) { 2, 4, 6, 8, 1, 9 }
}

// The keys() method of Set instances is an alias for the values() method.

{
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.keys();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"

}

// The symmetricDifference() method returns a new set containing elements which are in either this set or the given set, but not in both.

{
    const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); // Set(5) { 2, 6, 8, 1, 9 }

}
