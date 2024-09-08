/**
 * Problem - 2 : Good Name, Bad Name
 * jodi kuno namer sese thake "a,e,i,o,u, w,y" tahole good name hobe
 * na hole Bad name
 * check also this input - 199, ['Rashed']
 */

function checkName(name) {
  //check invalid input
  if (typeof name !== "string") {
    return "invalid input";
  }

  let lastName = name.slice(-1).toLowerCase();
  let checkArray = ["a", "e", "i", "o", "u", "w", "y"];
  let result = false;

  for (let char of checkArray) {
    if (char === lastName) {
      result = true;
    }
  }
  return result ? "Good Name" : "Bad Name"; // ternary operator
}

console.log(checkName("Rusho"));
console.log(checkName("Limon"));
console.log(checkName("Lima"));
console.log(checkName("RAFEE"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
