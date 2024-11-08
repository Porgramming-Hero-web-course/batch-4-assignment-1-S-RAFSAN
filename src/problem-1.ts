{
//

function sumArray(numbers: number[]): number {
    let result = 0; 
    for (let sum of numbers) {
        result += sum; 
    }
    return result; 
}

const numbers = [1,2,3,4,5];
console.log(sumArray(numbers));


//
}