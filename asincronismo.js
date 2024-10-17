
function oper(a, b, callback) {
  setTimeout(function () {
    console.log(callback(a, b));
  }, 2000);
}
console.log('Antes de la ejecucion');

oper(3, 20, (a, b) => a + b);

console.log('Despues de la ejecucion?');