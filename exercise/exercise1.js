// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no();
// }

// function A() {
//   console.log("A")
// }

// ()=>{console.log("A") }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

// //แบบฝักหัด การเขียนCode
// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// n = prompt("n?", '');

// if (n <= 0) {
//   alert (`Power ${n} is not supported, 
//   please enter an integer number greater than zero`);
// } else {
//   alert ( pow(x, n) )
// }

// // แบบฝึกหัด BMI
// function pow (name1, BMI1, name2 ,BMI2){
 
//   if (BMI1 > BMI2){
//     alert (`${name1},${BMI1}`)
//   }
//   else {
//     alert (`${name2},${BMI2}`)
//   }
// }

// let name1 = prompt("put your name");
// let BMI1 = prompt("put your BMI");
// let name2 = prompt("put your name");
// let BMI2 = prompt("put your BMI");

// pow(name1,BMI1,name2,BMI2)

//แบบฝึกหัด BMI 2
// let name1 = prompt("your name");
// let hight1 = prompt("CM");
// let weight1= prompt("KK");
// let BMI1;
// BMI1 = weight1 / (hight1 **2)

// let name2 = prompt("your name");
// let hight2 = prompt("CM");
// let weight2 = prompt("KK");
// let BMI2;
// BMI2 = weight2 / (hight2 **2)

// function pow (name1, BMI1, name2 ,BMI2){
 
//   if (BMI1 > BMI2){
//     alert (`${name1},${BMI1}`)
//   }
//   else {
//     alert (`${name2},${BMI2}`)
//   }
// }
// pow(name1,BMI1,name2,BMI2)

//แบบฝึกหัด 3
let max = 0;

while (true){
  let value = +prompt("");
  
  max += value;

}
alert("sum:" + sum);
 