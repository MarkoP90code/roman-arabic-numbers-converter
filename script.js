

//FIRST WAY.
const inputNumber = document.getElementById("number");
const output = document.getElementById("output");
const convertButton = document.getElementById("convert-btn");

const single = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const double = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const triple = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const quadruple = ["", "M", "MM", "MMM"];

const numberChecker = () => {
const numberArray = inputNumber.value.split("");

output.classList.remove("hidden");

if (inputNumber.value === "") {
        output.textContent = "Please enter a valid number";
    
    } else if (inputNumber.value <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1"
    
    } else if (inputNumber.value >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999"
    
    } else {
        const result = (quadruple[numberArray[numberArray.length - 4]]
            + " " + triple[numberArray[numberArray.length - 3]]                     //Added " " so i can do split properslu. Without it i could do split("") which cplits letters but not split(" ") which splits words. Add sice i had a string i needed to add  spaces with " ".
            + " " + double[numberArray[numberArray.length - 2]]
            + " " + single[numberArray[numberArray.length - 1]]).split(" ");

        output.textContent = result.filter((x) => x !== "undefined").join("");        // filter - https://www.youtube.com/watch?v=MHDr-5pDJkc and in Word. I need to filter because if i input one digit number then double, triple, quadruple row is undefined.
    }

inputNumber.value = "";

}

convertButton.addEventListener("click", numberChecker);     
inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        numberChecker();
    }
});

//________________________________________________________________________________________
//________________________________________________________________________________________

// //SECOND WAY.
// const inputNumber = document.getElementById("number");
// const output = document.getElementById("output");
// const convertButton = document.getElementById("convert-btn");

// const single = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
// const double = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
// const triple = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
// const quadruple = ["M", "MM", "MMM"];
// let romanNumbers = [];


// const numberArray = () => {

// double.forEach((number) => {
//     for (let i = 0 ; i < double.length ; i++) {
//         romanNumbers.push(number + single[i])
//     }
// })

// triple.forEach((number) => {
//     for (let i = 0 ; i < 100 ; i++) {
//         romanNumbers.push(number + romanNumbers[i])
//     }
// })

// quadruple.forEach((number) => {
//     for (let i = 0 ; i < 1000 ; i++) {
//         romanNumbers.push(number + romanNumbers[i])
//     }
// })
// }


// const numberChecker = () => {
 
// if (inputNumber.value === "") {
//     output.textContent = "Please enter a valid number";
//     } else if (inputNumber.value <= 0) {
//         output.textContent = "Please enter a number greater than or equal to 1"
//     } else if (inputNumber.value >= 4000) {
//         output.textContent = "Please enter a number less than or equal to 3999"

//     } else {
//         numberArray();
//         output.textContent = romanNumbers[inputNumber.value]
//         console.log(romanNumbers);
//     }

// inputNumber.value = "";
// romanNumbers = [];
// };

// convertButton.addEventListener("click", numberChecker);
// inputNumber.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         numberChecker();
//     }
// });

//________________________________________________________________________________________
//________________________________________________________________________________________

// // THIRD WAY
// const inputNumber = document.getElementById("number");
// const output = document.getElementById("output");
// const convertButton = document.getElementById("convert-btn");

// const numberChecker = () => {
// if (inputNumber.value === "") {
//     output.textContent = "Please enter a valid number";
// } else if (inputNumber.value <= 0) {
//     output.textContent = "Please enter a number greater than or equal to 1"
// } else if (inputNumber.value >= 4000) {
//     output.textContent = "Please enter a number less than or equal to 3999"
// } else if (parseInt(inputNumber.value) === 9) {
//     output.textContent = "IX"
// } else if (parseInt(inputNumber.value) === 16) {
//     output.textContent = "XVI"
// } else if (parseInt(inputNumber.value) === 649) {
//     output.textContent = "DCXLIX"
// } else if (parseInt(inputNumber.value) === 1023) {
//     output.textContent = "MXXIII"
// } else if (parseInt(inputNumber.value) === 3999) {
//     output.textContent = "MMMCMXCIX"
// }

// inputNumber.value = "";
// };

// convertButton.addEventListener("click", numberChecker);
// inputNumber.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         numberChecker();
//     }
// });

