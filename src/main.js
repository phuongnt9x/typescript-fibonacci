function fibonacci(number) {
    if (number == 1 || number == 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var sum = 0;
for (var i = 1; i <= 20; i++) {
    var fi_x = fibonacci(i);
    console.log(fi_x + " ");
    sum += fi_x;
}
console.log("Sum: " + sum);
