// Callback function is function which is passed inside a function.'
function sumOfProduct(a, b, c) {
  let product = a * b + b * c + c * a;
  return product;
}

function fun(x, y) {
  console.log(x - y);
}
fun(sumOfProduct(4, 6, 7), 7);
