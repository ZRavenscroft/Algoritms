//=========================================================================
//TASK 1
//=========================================================================

const numbers = [0,6,3,4,-4,-1,-5,-2];
const newSet = new Set(numbers);

const uniqueNumbers =Array.from(newSet);
console.log(uniqueNumbers);

//=========================================================================
//TASK 2
//=========================================================================

const square = numbers.reduce((prev, item)=>{
    if (0<item) {
        console.log(item**2);
    }
})

//=========================================================================
//TASK 3
//=========================================================================

let str = `Azerbaycan`;

function wordReserve(word) {
    
    return word.split("").reverse().join("")
    
}
console.log(wordReserve(str));