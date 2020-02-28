let sum = 0;
for (let i = 1 ; i <= 165 ; i = i+2 ){
    sum += i;
}
console.log(sum);

let propertiesName = "age";

let obj = {
  [propertiesName]: 20, // จะได้ key เป็น propertiesName
}

console.log(obj);

const obj ={
    name: "jang",
    age: 25,
    height: 165,
    weight: 47,
};

let clone1={};

for (let key in obj){
     clone[key] = obj[key];

}

console.log(clone1,obj);
ogj.name="bee";
console.log(clone,obj);

//แบบฝึกหัด
const obj = {
    name: "sonter",
    surname: "pakron",
    name: "Boy",
};
 
delete obj.name;

console.log(obj);

//ช้อ2
function isEmpty(obj){
    let isEmpty = true;
    for (let key in obj){
        return false;   // isEmpty = false;
    }
    //return true;  
    return isEmpty;

}
/*let obj = {
    name: "sonetr"
}*/

console.log(obj);

//ช้อ3
const user = {
    name : "john"
};

user.name = "pete";

//not work
console.log(user.name);

//ช้อ4
let salaries = {
    john : 100,
    ann : 160,
    pete : 130

}
let sum = 0;
function sum (salaries){
    for (let key in salaries)
    sum += salaries
    return sum;
}
sum(salaries);

// function sum(obj){
//     let totel =0;
//     for(let key in salaries){
//         total += obj[key];
//     }
//     return total;
// }
console.log(sum[salarise]);

//ข้อ5
function multiplynumberic(obj, times){
    for (let key in obj){
        if (typeof (obj[key]) == "number"){
            obj[key] *= times
        }
    }

    return obj;
}

let team={
    A: 100,
    B: 200
};
console.log(multiplynumberic(team,5)); //5 คือเลขที่นำไปคูณกับvalue


//Exp : Methods
let obj1 = {
    sayHi(){
        alert("hello")
    },
    saygoodbye(){
        alert("bye")
    }
}    
console.log(obj1);

