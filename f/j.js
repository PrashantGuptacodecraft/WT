// function fun(a,...b){//...Rest operator
//     console.log(a,b)
// }
// fun(1,2,3,4);


// const arr=[2,5,6,3,8,9]
// const arr1=[22,55,66,33,48,69]
// const final=[...arr,...arr1]  //Spread OPerator
// console.log(final)


// const arr1=[22,55,66,33,48,69]
// const arr=[2,5,6,3,8,9]
// const[a,b,c]=arr  //Destructing of Array
// console.log(a+b+c)

// const [x,...y]=arr1 //Destructing of Array with Rest operator
// console.log(y)


// const obj={
//     name:"Prashant",
//     age:20,
//     key:'Yee'
// }
// console.log(obj)
// let dub={key:"hii", ...obj}
// console.log(dub)
///output 
// { name: 'Prashant', age: 20, key: 'Yee' }
///{ key: 'Yee', name: 'Prashant', age: 20 }





// const obj={
//     name:"Prashant",
//     age:20,
//     key:'Yee'
// }
// console.log(obj)
// let dub={ ...obj,key:"hii"}
// console.log(dub)
//OUTPUT
// { name: 'Prashant', age: 20, key: 'Yee' }
// { name: 'Prashant', age: 20, key: 'hii' }


// const obj={
//     name:"Prashant",
//     age:20,
//     key:'Yee'
// }
// console.log(obj)
// let dub={ ...obj,key:"hii",age:90}
// console.log(dub)
//OUTPUT
// { name: 'Prashant', age: 20, key: 'Yee' }
// { name: 'Prashant', age: 90, key: 'hii' }



// const obj={
//     name:"Prashant",
//     age:20,
//     key:'Yee'
// }
// console.log(obj)
// let dub={ ...obj,key:"hii",age:90}
// console.log(dub)
// let{name,age,key}=obj
// console.log(name)
// console.log(age)
// console.log(key)
// let{name:myname,age:dage,key:dkey}=obj
// console.log(myname)
// console.log(dage)
// console.log(key)

// const obj={
//     name:"Prashant",
//     age:20,
//     key:'Yee'
// }

// let dub={ ...obj,key:"hii",age:90}

// function showdata({name,age,key}){
// console.log(name)
// console.log(age)
// console.log(key)
// }
// showdata(obj)
// showdata(dub)


// function show(){
//     console.log("Hi")
// }

// let sh=function(){
//     console.log("Bye")
// }
// let sh2=()=> console.log("How")
// sh()
// show()
// sh2()


// const add=(a,b)=>{
//     return a+b
// }
// let add2=(a,b=90)=>{
//     return a+b
// }
// console.log(add(2,4))
// console.log(add2(2,8))
// const r=name=>`hello ${name}`
// console.log(r("hii"))


// let myobj=name=>`Name is ${name}`
// console.log(myobj("Prashant"))


// let obj=()=>(
//     {Name:"Abc",age:21})

// console.log(obj())



// function person(){
//     this.age=90;
//     setTimeout(function(){
//         console.log(this.age)
//     },1000)
// } //nahi chalega
// new person();



// function person(){
//     this.age=90;
//     setTimeout(()=>{
//         console.log(this.age)
//     },1000)
// }
// new person();


// function person(){
//     let age=90;
//     setTimeout(()=>{
//         console.log(age)
//     },9000)
// }
// new person();



//NOT access 
// let  person={
//    Name:"Abc",
//    greet:function(){
//     setTimeout(()=>{
//         console.log(`My name is ${Name}`)
//     },1000)
// }
// }
// person.greet()





// let  person={
//    Name:"Abc",
//    greet:function(()=>{
//     setTimeout(()=>{
//         console.log(`My name is ${Name}`)
//     },1000)
// })
// }
// person.greet()