// class in typescript
// define a class
// create a object for class
// make property
// make function
// define data type of function and property
// define data type to params
// (11)
// export{}
// class App{
//     name;
//     constructor(name){
//         this.name=name
//     }
//     getName(){
//         console.log(this.name);
//     }
// }
// let a1=new App("anil");
// a1.getName()

// define data type of function and property
// export{}
// class App{
//     name:string="niraj singh"
//     constructor(name:string){
//         this.name=name
//     }
//     getName():string{
//         // console.log(this.name);
//         return this.name
//     }
// }
// let a1=new App("anil");
// a1.getName()
// console.log(a1.getName());



// (12)

// Inheritance in typescript
// what is inheritance
// make a parent class
// make a child class
// inherit a class
// example

// class child{
//     name="niraj singh"
//     getName(){
//         return this.name
//     }
// }
// let c1=new child();
// console.log(c1.getName());

// class Parent{
//     name:string;
//     setName(name:string){
//         this.name=name
//     }
// }
// export{}
// class child extends Parent{
    
//     getName():string{
//         return this.name
//     }
// }
// let c1=new child();
//  c1.setName("peter");
// console.log(c1.getName());

// (13)
// namespace in typescript
// what is namespace
// how to use it
// example of namespace

// Note : namespace want to gives output  in another file/
// run command -- tsc aap.ts --outfile out.js


// /// <reference path="./utils.ts" />
// // export {}
// namespace UserUtils{
//     export class Users extends Parent implements userTyped{
//         getName(){
//             return this.name
//         }
//     }
// }
// let u1=new UserUtils.Users();
// u1.setName("tony")
// console.warn(u1.getName());

// (14)

// modules in typescript
// what is modules
// make 2 file and make modules
// use them in single file

// note best use as compare of namespace 

// import sLogin from './Student'
// import tLogin from './Teacher'
 
// let teacher=new tLogin();
// console.log(teacher.data);


// let student=new tLogin();
// console.log(student.data);
// (16)
// enum in Typescript
// what is enum
// make programme with enum
// use enum with variable
// use enum with function
// (2)
// enum Days{
//     mon,tue,wed,thu,fir,sat,sun
// }
// let whichDay:Days;  
// whichDay=Days.wed
// console.log(whichDay);

// (1)
// enum Days{
//     // mon=10,tue,wed,thu,fir,set,sun
//     mon="mon",tue="tue"
// }

// // function whichDay(day:Days){
// //     return day
// // }

// let whichDay=Days.mon

// // console.log(whichDay(Days.mon));
// console.log(whichDay === "mon");

// (15)

// function user<T>(data:T):T
// {
//     return data
// }
// console.log(user({name:"niraj",age:90}).age);
  