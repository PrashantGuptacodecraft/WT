// function cake(){
//     console.log("1.  Putting the cake in ")
//     setTimeout(()=>{
// console.log(`2. cake is packed`)
//     },2000)
//     console.log("3. Now i can eat the cake")
// }

// cake()



function cake(callback){
    console.log("1.  Putting the cake in ")
    setTimeout(()=>{
console.log(`2. cake is packed`)
callback()
    },2000)
    
}

cake(()=>{
console.log("3. Now i can eat the cake")
})