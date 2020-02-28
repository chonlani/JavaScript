//4.10. แบบฝึกหัด
//ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
//ข้อ 1
let array1 = [1, 2, 30, 400] 

let array2 = array1.filter(item => item >= 10);

console.log(array2); // [30, 400]

//ข้อ 2
array1 = [1, 2, 3, 4]

let array2 = array1.filter(item => item % 2 !== 0 );

console.log(array2); //[1, 3]

//ข้อ 3
array1 = [1, "1", 2, {}] 

let  array2 = array1.filter(item => item === Number(item));
// typeof = (item) === "number" 

console.log(array2);  //[1, 2]

//ข้อ 4
array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]

let array2 = array1.filter(item => item.length > 6)

console.log(array2); // ["pineapple", "watermeon"]

//ข้อ 5
let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]

  let array2 = array1.filter(item => item.age < 18)

  console.log(array2);  //0: {name: "apple", age: 14} , 1: {name: "pineapple", age: 16}

  //ข้อ 6
  let array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]
 
  let array2 = array1.filter(item => item.age != 32)
  
  /* 0:{name: "apple", age: 14}
  1: {name: "banana", age: 18}
  2: {name: "pineapple", age: 16}
  3: {name: "peach", age: 24} */
  console.log(array2); 

  //ข้อ 7
 let array1 = [1, -3, 2, 8, -4, 5]

 let array2 = array1.filter( item => item > 0);

 console.log(array2); // [1, 2, 8, 5]

 //ข้อ 8 
 array1 = [1,3,4,5,6,7,8]

 let array2 = array1.filter(item => item % 3 == 0 );
 
 console.log(array2); //[3, 6]

 //ข้อ 9 
 array1 = ["peach", 1, -3, "2", {}, []]

 let array2 = array1.filter(item => item === String(item))

console.log(array2); //["peach", "2"]

//ข้อ 10
array1 = ["APPLE", "appLE", "PEACH", "PEach"]

let array2 = array1.filter(item => item === item.toUpperCase())

console.log(array2);  //["APPLE", "PEACH"]

//ข้อ 11
let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]

  let array2 = array1.filter(function(item){
      let array = item.birth.split("-")
      return   array[1] == 10 ;
        
  })

console.log(array2);

//ข้อ 12
 let array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]

  let array2 = array1.filter(function(item){
      let array = item.birth.split("-")
      return array[0] < 2000
  })

  console.log(array2); //0: {name: "banana", birth: "1990-10-10"} ,  1: {name: "watermelon", birth: "1985-12-30"


  //6.10.  แบบฝึกหัด
  function unique(arr) {
     let valueset = new set(arr);
     let result = [];
     for (let element of valueset){
         rusult.push(element)
     }
     return result;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
  
  alert( unique(values) );

  //7.2.  แบบฝึกหัด

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function sumSalaries(salaries){
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  
alert( sumSalaries(salaries) );
    
//ข้อ 2
let user = {
    name: 'John',
    age: 30
  };

  function count(obj) {
    return Object.keys(obj).length;
  }

  alert( count(user) ); // 2