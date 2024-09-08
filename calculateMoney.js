/**
 * Problem -1 : Help the zoo manager
 * Manger "Baker bhai k calculateMoney name function banai dte hbe"
 * Ticket price - 120
 * 1 daruan khoroch - 500
 *
 *8 jon stuff k lunch kranor jonne khoroch jonproti 50 tk
 */

function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  }
  //   let remainingAmount = ticketSale * 120 - (500 + 8 * 50);

  return ticketSale * 120 - (500 + 8 * 50);
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney("abc"));
