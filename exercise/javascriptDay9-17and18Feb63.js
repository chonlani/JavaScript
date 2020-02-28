//exercise 1
let name,human;
name = "jang";
human = name;
console.log(human);

let human;
let name = "Jang";
human = name;
console.log(human);


let mymoney;
mymoney = 100;
let familyname;

let address;
address = "theloftsasoke"
let age;


console.log(Infinity/-Infinity);
console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${name}`);

//exercise 2
let mynameis,age,myaddress;
mynameis = "Jang";
age = 25;
myaddress = "theloftsasoke"
let history = `  mynameis ${mynameis} i'm ${age} years old my address is ${myaddress}`;
console.log(`history ${mynameis} ${age} ${myaddress}`);
console.log(history);
console.log(`hello `);

//สร้าง string
let vars = null;
let var1 = String(vars); "null"
console.log(typeof var1);
console.log(var1);

//แบบฝึกหัด ตัวดำเนินการเบื้องต้น
//1. ให้ระบุค่าของ a, b, c และ d หลังจากจบ statements ทั้งสามบรรทัด
let a = 1,b = 1;
let c = ++a;
let d = b++;

//แบบฝึกหัด ตัวดำเนินการเบื้องต้น
//2. จงหาผลลัพธ์ของ Statement ต่อไปนี้
console.log(""+1+0);
console.log(""-1+0);
console.log(true+false);
console.log(6/"3");
console.log("2"*"3");
console.log(4+5+"px");
console.log("$"+4+5);
console.log("4"-2);
console.log("4px"-2);
console.log(7/0);
console.log("-9"+5);
console.log("-9"-5);
console.log(null+1);
console.log(undefined+1);
console.log("\t\n"-2);


console.log(1 == "1");
console.log(1 === "1");


alert ("hello world");
let age = prompt ("how old are you");
console.log(age);

if (age >= 18){
    console.log(1);
} else if ( age >= 15){
    console.log(2);
} else {
    console.log(3);
}

age >= 18 ? console.log(1): age>= 15 ? console.log(2): console.log(3);

//แบบฝึกหัด
//2.ใช้ if else ในการเขียนถามชื่อของคุณ
let names = prompt("ชื่อของฉัน");

if (names == "jang"){
    alert("เก่งมาก")
    }
    else{
        alert("ไม่รุ้จักชื่อฉัน")
    
    }

//แบบฝึกหัด
//3.ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
    let point = prompt("คะแแนนของคุณ");
if (point >= 80){
    alert("A")
}
else if (point >= 70){
    alert("B")
}
else if(point >= 60){
    alert("C")
}
else if(point >= 50){
    alert("D")
}
else {
    alert("F")
}

point >= 80 ? console.log("A"): point >= 70 ? console.log("B"): point >= 60 ? console.log("C"): point >= 50 ? console.log("D"): console.log("F");

//แบบฝึกหัด
//3.ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
let age = prompt("how old are you")
let price;
if(age < 18){
    alert(2000);
}
else {
    alert(3500)
}


let x;
false || (x = 1);
alert(x);

let x = 2;
(x > 0) && alert ("graeter than zero");




/*1. ""+1+0 = 10
2. ""-1+0 = -1  
3. true+false = 1
4. 6/"3" = 2
5. "2"*"3" = 6
6. 4+5+"px" = 9px
7. "$"+4+5 = $45
8. "4"-2 = 2
9. "4px"-2 = nan
10. 7/0 = infinity
11. " -9 "+5 = -4
12. " -9 "-5 = 4
13. null+1 = 0
14. undefined+1 = nan
15. "/t/n"-2 = -2


5>4 = true 
"apple">"pineapple" = false 
"2">"12" = true 
undefined==null = true 
undefined===null = false 
"bee"<"be" = false
"bee">"Bee" = true
"Bee"<"be" = true */
