// ### Question 2: Check if a Number is a Perfect Square

function isSquart(num : number){

    const sqrt = Math.sqrt(num); 
    return sqrt % 1 === 0;
}

console.log(isSquart(16));//output : true
console.log(isSquart(20));// output : false
