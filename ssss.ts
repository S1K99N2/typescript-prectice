// array without data type
// push and update array oprations ints
// mixed array
// define array type

// let data:string[]=['alin','pook','juli','pink'];
// data[1]=("niraj")
// console.log(data);

// mixed data can be push when minimum 1data given then pushes but if define data type then those data only define (6)


// default typed object 
// update property
// add new property
// define a custom type for object
// use any with object

// let user={
//     name:"niraj",
//     age:30,
//     address:'usa'
// }
// user.name='d';
// console.log(user);
// new value or data can't be push like user.email

// custom type
// interface userTyped{
//     name:string,
//     age:number,
//     address:any
// }
// let user:userTyped={
//     name:"niraj",
//     age:30,
//     address:'use'
// }
// let user:any={
//     name:"niraj",//any field can gives any data type
//     age:30,
//     address:'use'
// }
// user.name='d';
// console.log(user);

// any use any data can you gives   (7)

// union datetype
// union use more then one data type can you define
// let data:string|number|boolean='anil'
// data=true
// console.log(data);

// let data:any='anil'
// data=90
// console.log(data);   (8)

// interface in typescript
// why use interface 
// how to interface
// interface example with object

// interface userType{
//     name:string,
//     age:number,
//     city:()=>string
// }
// let data:userType={
//     name:'anil sidhu',
//     age:90,
//     city:function(){
//         return 'anil singh'
//     }
// }

// console.log(data.city()); (9)

// function in typescript 
// define a normal function
// define function type
// add params in function
// optional params type
// optional params with type

// function calcs(a:number):number{
//     return a
// }
// console.log(calcs("100"));

// function calcs(a:number,b?:number):number{
//     return b?a+b:a
// }
// console.log(calcs(100,90));


// define the class
// create object for class
// make property
// make function
// define data type of function and property
// definr data type of params

// class App{
//     name;
//     constructor(name){
//         this.name=name;
//     }
//     getName()
//     {
//         console.log(this.name);
        
//     }
// }
// let a=new App('anil');
// a.getName()


// export{}
// class App {
//     name:string="niraj singh"
//     constructor(name:string) 
//     {
//         this.name = name
//     }
//     getName():string 
//     {
//         return this.name
//     }
// }
// let a1 = new App('anil');
// console.log(a1.getName()); (10)

// what is inheritance
// inherit a class 

