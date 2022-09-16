//math.js

export const plus = (a,b) => a+b;
export const minus = (a,b) => a-b;
export const divide = (a,b) => a/b;

//Dynamic import 

function doMath() {
  import("./math")
  .then(math => math.plus(2,2)) 
}

btn.addEventListner('click',doMath)

async function doMath() {
  const math = await import ("./math")
  math.plus(2,2)
}
btn.addEventListner('click',doMath) 
