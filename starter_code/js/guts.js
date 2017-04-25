// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y) {

    var quotient = x/y;
    return quotient;

}

function multiply(x,y) {
    var product = x*y;
    return product;


}

function subtract(x,y) {
    var difference = x-y;
    return difference;
    

}

function add(x,y) {
    var sum = x+y;
    return sum; 

}

function power(x,y) {
    var power = x^y;
    return Math.pow(x,y);
}

function square_root(x) {
    var root = x;
    return Math.sqrt(x)
    
}

function logBase10(x) {
    return Math.log10(x)

}

function generateRandomNumber() {
       return Math.floor(Math.random() * 200);
}
