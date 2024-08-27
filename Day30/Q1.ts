// *Question 1: Convert Number to Words*

function numberToWords(num: number): string {
    const singleDigits = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (num < 10) {
        return singleDigits[num];
    } else if (num < 20) {
        return teens[num - 10];
    } else {
        const ten = Math.floor(num / 10);
        const unit = num % 10;
        return unit === 0 ? tens[ten] : `${tens[ten]}-${singleDigits[unit]}`;
    }
}

console.log(numberToWords(45)); //output : Forty-Five
console.log(numberToWords(30)); // output : Thirty
console.log(numberToWords(8));// output : Eight
