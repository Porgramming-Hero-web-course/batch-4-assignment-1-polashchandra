function sumArray(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const myNumbers = [1, 2, 3, 4, 5];
console.log(sumArray(myNumbers))