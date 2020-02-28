//แบบฝึกหัด 1
// let user = {
//     name : "jonh",
//     go : function(){ alert(this.name)}
// }

// user.go();


//แบบฝึกหัด 2
// function makeUser(){
//    return{
//        name: "john",
//        ref : this
//    } ;   
// } ;

// let user = makeUser();
// alert (user.ref.name);

//แบบฝึกหัด 3
 
// let calculator = {
//  read(){   
//  this.n1= +prompt("put your number1"),
//  this.n2= +prompt("put your number2")
//  },

//  sum(){
//      return(this.n1+this.n2);
//  },

//  mul(){
//      return(this.n1*this.n2);
//  }
    //thisใช้ประกาศใช้สำหรับแค่ในObject
 
//  };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

 
//แบบฝึกหัด 4
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//       return this;
//     }
//   };

//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep(); // 1

//   ladder.up().up().down().showStep(); // 1

  //Exp
//   function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//       alert( "My name is: " + this.name );
//     };
//   }
  
//   let john = new User("jang");
  
//   john.sayHi(); // My name is: John
 /*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
 
  //แบบฝึกหัด 7.4 ข้อ1
// function Calculator(){
// this.read= function(){   
//  this.n1= +prompt("put your number1");
//  this.n2= +prompt("put your number2")
// },

//  this.sum= function(){
//      return(this.n1 + this.n2);
//  },

//  this.mul=function(){
//      return(this.n1 * this.n2);
//  }
    
 
// };

//  let calculator = new Calculator();
// calculator.read();

// alert( calculator.sum() );
// alert( calculator.mul() );

//แบบฝึกหัด 7.4 ข้อ2
function Accumulator(staringValue){
    this.value = staringValue;
    this.read = function (){
        this.value = number(prompt("adding number"));
    }
}
let acc = new Accumulator(4);
console.log(acc.value);

acc.read();

console.log(acc.value);

//exp ตัวเลข
let num =1.23456;
alert(math.floor(num * 100)/100);