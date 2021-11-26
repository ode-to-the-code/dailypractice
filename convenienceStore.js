

// given a total and an array (representing the amount of change in your pocket),
// see if you can pay for something.
// follows quarters, dimes, nickels and pennies.
// returns a boolean, returning true only if the coins exactly equal

coins = [12, 0, 0, 0];
price = 3.01;


function convenienceStore(coins, price){
  let quartersVal = coins[0] * 0.25;
  let dimesVal = coins[1] * 0.10;
  let nickelsVal = coins[2] * 0.05;
  let penniesVal = coins[3] * 0.01;

  return (quartersVal + dimesVal + nickelsVal + penniesVal) === price;

}

console.log(convenienceStore([12, 0, 0, 0], 3.00));

