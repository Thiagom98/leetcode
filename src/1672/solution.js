/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxValue = 0
    for ( let i = 0 ; i < accounts.length; i++){
        let value = accounts[i].reduce((acumulador, numero) => acumulador + numero, 0);
        if(maxValue < value){
            maxValue=value
        }
    }
    return maxValue
};

let accounts =  [[1,5],[7,3],[3,5]]

console.log(maximumWealth(accounts))