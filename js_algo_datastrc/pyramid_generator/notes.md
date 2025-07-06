 * Variable naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number.
 * Mutation is characteristic of non primitives data types, such as an array. It means it is mutable, can be changed, when otherwise, primitive data types can only be reassigned
 * A method is a funciton that is associated with certian variables and values
 * for functions:
  for (const value of iterable) {}
  for ("iterator"; "condition"; "iteration") {}
 * array.push() => add value to the end of the array
 * array.pop() => removes the last element from the array
 * for ("iterator"; "condition"; "iteration") {}
 * for (const value of iterable) {}
 * functions should not return a hard-coded value, i.e., a vixed value, be it a string, a number or a variable that was never changed 
 * false, 0, "", null, undefined, and NaN are all falsy values for JavaScript
 * console.log(rows); => the array doesn't looks good as bricks
 * equality operator "==" if two variables are equal => "0" == 0 => true
 * strict equality operator "===" if two are equal and has the same type => "0" === 0 => false
 * The strict inequality operator !== allows you to check if two values are not equal, or do not have the same type. The syntax is similar to the equality operator: value !== 4.
 * .unshift() method of an array allows you to add a value to the beginning of the array, unlike .push() which adds the value at the end of the array.
 * .unshift() returns the new length of the array it was called on.
  console.log(variable.unshift(<no matter what value>)) => length of the array after the unshift method being applied.
  * .fisrt() removes the first element of an array. It returns the element removed
  * if the variable is not going to be used in a way to be changed, it should be declared with const
