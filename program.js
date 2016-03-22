var arguments = process.argv.splice(2);

var total = 0
arguments.forEach(function(item){
  total += Number(item);
});

console.log(total);
