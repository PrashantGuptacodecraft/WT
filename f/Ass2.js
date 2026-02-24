// 1. Print student(Object) details (name, roll, marks) using template literals.

// const obj=[{name: "Prashant Gupta",roll:234,marks:90}]
// console.log(obj)
// obj.forEach(element => {
//     console.log(` Name:${element.name}`)
//     console.log(`Roll: ${obj.roll}`)
//     console.log(`marks: ${obj.marks}`)
// });


 //Write a function that accepts any number of arguments and returns their average.
//  function r(...s){
//     sum=0
//     for(let i in s){
//         sum+=i
//     }
// return sum/s.length

//  }
//  const ans=r(5,9,7,4)
//  console.log(`Avarage ${ans}`)


// Use rest operator to separate one value from remaining array elements.

// obj =[2,4,7,8,5,3,5,6,4]
// function  ans(a,...b){
//     console.log(`${a}`)
//     console.log("next")
//     console.log(`${b}`)

// }
// ans(...obj)

4. //Demonstrate rest operator in object destructuring.
// obj =[2,4,7,8]
// const [a,b,c,d]=obj
// console.log(`a:${a}`)
// console.log(`b:${b}`)
// console.log(`c:${c}`)
// console.log(`d:${d}`)


//5. Merge two arrays using spread operator.
// arr1=[1,2,3,4]
// arr2=[4,5,78,9]
// arr3=[...arr1,...arr2]
// console.log(`${arr3}`)


//6. Copy an object and override one property.
// const obj=[{name: "Prashant Gupta",roll:234,marks:90}]
// ans=obj
// dub={...obj,marks:80}

// console.log(dub)


// const arr = [1, 2, 3];

// const newArr = [...arr, 4, 5];

// console.log(arr);    
// console.log(newArr);  


// Create an object student with properties name and roll.

// Add a method display() using a normal function

// Print the value of this.name
// const student = {
//     name: "Prashant Gupta",
//     roll: 234,

//     display: function () {  
//         console.log(this.name);
//     }
// };

// student.display();


const student = {
    name: "Prashant Gupta",
    roll: 234,

    display:() => {console.log(this.name) }
};

student.display();
