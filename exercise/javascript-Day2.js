
let x;
false || (x = 1);
alert(x);

let x = 2;
(x > 0) && alert ("graeter than zero");

//แบบฝึกหัดที่1
//1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
alert(null || 2 || undefined);  
alert( alert(1) || 2 || alert(3));
alert( 1 && null && 2);
alert( alert(1) && alert(2));
alert( null || 2 && 3 || 4);

//แบบฝึกหัดที่2
//1.9 แบบฝึกหัด
let age = prompt("how old are you");
if (!( age <= 18  || age >= 60)){

}

//แบบฝึกหัดที่3
//4. คำสั่ง alert ไหนที่จะถูกรันบ้าง
if (-1 || 0) alert("first");     //run
if (-1 && 0) alert("second");       //not run
if (null || -1 && 1 ) alert("third"); //run

//แบบฝึกหัดที่4
//5. ให้เขียนระบบ login
let user = prompt("who are you");

if ( user == "admin") {
    let password = prompt("your password");
    if(password == "codecamp5")
    alert ("welcome");
}
else if (!user == null || user == ""){
    alert("cancle");
}
else{
    alert("don't know you");
}




Exp
for (let i = 10; i < 10; i++){
console.log(i);
}
for (let i = 10; i < 10; i++){
    console.log(i);
    }

    let จำนวนรอบ =prompt("จำนวนรอบ")
    let จำนวนครั้ง =prompt("จำนวนครั้ง")
    for (let i = 1; i < จำนวนรอบ; i++){
        console.log();
        }

let sum = 0;
for (let i = 1; i <= 1027; i = i + 2){
    sum += i;
}
console.log(sum);

for (let i = 0; i < 3; i++){
    alert(`Number ${i}!`);
}

let number1 = prompt("ใส่ตัวเลข");
while (!( number1 <= 100 ) && number1 >= 1){
    number1 = prompt("ใส่ตัวเลข");
}

 let number2 = prompt("ใส่ตัวเลขใหม่")
 while (!(number1 == number2)){
     if (number2 > number1){
         number2 = prompt("ใส่น้อยกว่านี้")
        }
        else  {
            number2 = prompt("ใส่มากกว่านี้")
    }
}
    
  let browser = ("edge");
  if ( browser == "edge"){
      alert ("you got the edge");
  }
  else if ( browser == "chorme" || browser == "firefox" || browser =="safari" || browser == "opera"){
      alert ( "ok we support too")
  } 
  else {
      alert( "we hope that this is ok")
  }

let a = prompt(2);
switch(a){

}

function var1  (input){
    

     for (let i = 0; i < input; i++){
        let output = "";
        for (let i = 0; i < input; i++){
            output = output + "*"; 
        }
        // output = output +"\n"
    console.log(output)
}
}
var1(3)

//แบบฝึกหัด if > swich cass
let a = +prompt("a?","");

switch(a){
    case (0):
      alert(0);
    break;

    case (1):
        alert(1);
    break;

    default :
       alert(2,3);
}





