
//ตัวอย่างการทำงานของ FOREACH
Array.prototype.jangForEach = function(callback){
    for(let i = 0 ; i < this.length ; i++){
        callback(this[i] , i , this ,"jang");
    }
}


["red","pink","yellow"].jangForEach(function(element,index,arr,color){
    console.log(`element = ${element}`)
    console.log(`index = ${index}`)
    console.log(`arr = ${arr}`)
    console.log(`color = ${color}`)
    console.log("-------------------");

})

//แบบฝึกหัด 4.10 ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()

//ข้อ1
Array1 = [1,2,30,400]

let Array2 = Array1.map(function(item){
    return item*2;
})

console.log(Array2);

//ข้อ2
let Array1 = [1,2,3,4]

let Array2 = Array1.map(item => String(item))

console.log(Array2);

//ข้อ3
let Array1 = [1,"1",2,{}]

let Array2 = Array1.map(item => typeof(item));

console.log(Array2); //["number", "string", "number", "object"]

//ข้อ4
let Array1 = ["apple","banana","orange"]

let Array2 = Array1.map(function(item){
    return item.toUpperCase();
})

console.log(Array2);

//ข้อ5
let Array1 = [
    {name: "apple", age: 14},
    {name: "banana", age: 18},
    {name: "watermelon", age: 32},
]

let Array2 = Array1.map(Obj => Obj.name)
console.log(Array2);


//ข้อ6
let Array1 = [
    {name: "apple", age: 14},
    {name: "banana", age: 18},
    {name: "watermelon", age: 32},
]

let Array2 = Array1.map(Obj => Obj.age);
console.log(Array2);

//ข้อ7
let Array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ]

  let Array2 = Array1.map(Obj => Obj.name + " " + Obj.surname);//`${item.name} ${item.surname}`

  console.log(Array2);

  
//ข้อ8
let Array1 = [1,3,4,5,6,7,8]

let Array2 = Array1.map(item => item % 2 == 0 ? "even":"odd");
console.log(Array2); //["odd", "odd", "even", "odd", "even", "odd", "even"]

//ข้อ9
let Array1 = [1, -3, 2, 8, -4, 5]

let Array2 = Array1.map(item => Math.abs(item));
console.log(Array2);

//ข้อ10
let Array1 = [100, 200.25, 300.84, 400.3]

let Array2 = Array1.map(item =>  String(item.toFixed(2)));
console.log(Array2);

//ข้อ11
let Array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
  ]

let Array2 = Array1.map(function(item){
    
    let Array = item.birth.split("-");
    item.age = 2020-Array[0];
    return item
});

console.log(Array2);

//ข้อ12
let Array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
  ]
let Array2 = Array1.map(function (item){
    let date = new Date(item)
    .toString()
    .slice(4)
    .split(" ")
    return
    <tr>
        <td> ${item.name} </td>
        <td> ${date[1]} ${date[0]} ${date[2]}</td>
    </tr>
})
console.log(Array1);
console.log(Array2);


//แบบฝึกหัด 6.10
function unique(arr){

}
let value = ["Hare","Krishna","Hare","Krishna","Krishna","Krishna","Hare","Hare",":-0"]
alert( unique(value));