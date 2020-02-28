//แแบบฝีกหัด 
// function random(max,min){
//     return Math.random() * (max - min)+ min;

// }
//หรือจะเอาเป็นตัวเลขทศนิยมสองตำแหน่งจะเขียนได้
// function random(max,min){
//     let num = Math.random() * (max - min)+ min;
//     return num.toFixed(2);

// }
// alert(random(1,5));

//แแบบฝีกหัด 1
// function ucFirst(string){
//     return string[0].toUpperCase()+string.slice(1);
// };

// alert(ucfirst("john"));

//แแบบฝีกหัด 2
// function checkSpam(str){
//     let isSpam = false;
//     // str = str.toLowerCase(); เช็คตัวอักษรพิมเล็กทั้งหมด
//     if (str.includes("xxx")) isSpam = true;
//     if (str.includes("viagra")) isSpam = true;
// return isSpam;    

// }

// alert (isSpam);

//แแบบฝีกหัด 3
// function truncate(str , maxLeanght){
//     if (str.leanght <= maxleanght ){
//         return str;
//     }

//     return str.slice(0,maxLeanght-1)+"...";
// }

//แแบบฝีกหัด 4
// function extractCurrencyValue(dollar, rate){
    
//     return Number(dollar.slice(1)) * rate;

// }
// console.log(extractCurrencyValue("$120",30.5));

// Array มี key เป็นตัวเลข / คีย์ของArray เรียกindex 
// For in เอา key หรือ index ออกมาแต่ For of เอา Elament 
//แแบบฝีกหัด Array 
// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;
// shoppingCart.push("Banana","mango");

// alert( fruits.length );  //5 *Array copy by referent

//แแบบฝีกหัด Array2
// let stlyes = ["Jazz","Blues"]

// stlyes.push("Rock-n-roll");
// stlyes[1]="Classics";
// stlyes.shift();
// stlyes.unshift("Rap","Raggae")

// console.log(stlyes);

//แแบบฝีกหัด Array3



function sumInput(){
    let arr = [];
    let Number = Number(prompt("put number"));
    while (isFinite(Number)); {
        arr.push(number);
        number = Number(prompt("put number"));
    }
    let sum = sumarray(arr);
    console.log(sum);
}

function sumarray(arr){
    let sum = 0;
    for(let number of arr) {
        sum += number;
    }
    return sum;
}

sumInput();