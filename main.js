function numberDoubler(num) {
    // Your code here
    while(num < 100){
        num *= 2;
    }
    return num;
}

function stringRepeater(str) {
    // Your code here
    let originalString = str;
    while(str.length < 10){
        str += originalString;
    }
    return str;
}

function makeDivisible(x, y) {
    // Your code here
    while( x % y !== 0){
        x++;
    }
    return x;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};