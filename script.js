function stringChop(str, size) {
  // your code here
  let result = []
  for(let i = 0; i<str.length; i+=size) {
    let substr = str.substring(i, i+size);
    result.push(substr)
  }
   
  return result.toString();
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
 