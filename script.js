function stringChop(str, size) {
  // your code here
  if (!str || size <= 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substr(i, i + size));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
 