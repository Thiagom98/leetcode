/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arrayString = []
    let numString = ""
    for (let i = 1; i <= n; i++){
        if(i % 15 == 0){
            numString = "FizzBuzz";
        }else if(i % 5 == 0){
            numString = "Buzz";
        }else if(i % 3 == 0){
            numString = "Fizz"
        }else{
            numString = `${i}`
        }
        arrayString.push(numString)
    }

    return arrayString
};


console.log(fizzBuzz(15))