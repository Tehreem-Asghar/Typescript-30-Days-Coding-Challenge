// *Question 1: Calculate the Product of Non-Zero Digits*

function ProductNo(num :number):number{

    const conStr= String(num)
     let product = 1

    for(let i = 0 ; i < conStr.length ; i++){

        let dig = Number(conStr[i])
        if(dig !== 0){
          product *= dig
        }
    }       

    return product 
}

console.log(ProductNo(4056)); // output : 120
console.log(ProductNo(1002));// output : 2


