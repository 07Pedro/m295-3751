//console.log(process.argv);
var arr = process.argv;
let sum = 0;

arr.slice(2).forEach(function(value) {
    sum += parseInt(value);
});

console.log(sum);
