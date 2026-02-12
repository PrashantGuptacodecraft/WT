// function cake(){
//     return new Promise((resolve,reject)=>{
//         console.log('1 putting the cake in oven')
//         setTimeout(() => {
     
//             let sucess=true
//             if(sucess){
//                 resolve("2 cake is Backed")
//             }
//             else{reject("2 cake is burned")}
//         }, 2000);
//     })
// }
// // cake().then((msg)=>{
// //     console.log(msg)
// //     console.log("ho gya")
// // }).catch((m)=>{
// //     console.log(m)
// //     console.log("nahi milega")
// // })

// async function party() {
//     console.log(`1`);
//     try{
//         const cakee=cake()
//         console.log(`2.1 ${cakee}`)
//     }
//     catch(e){
//         console.log(` ${e}2.2`)
//     }

    
// }
// party();


function cake() {
    return new Promise((resolve, reject) => {
        console.log('1 putting the cake in oven')

        setTimeout(() => {
            let success = true

            if (success) {
                resolve("2 cake is Baked")
            } else {
                reject("2 cake is burned")
            }
        }, 2000)
    })
}

async function party() {
    console.log("Start party")

    try {
        const cakee = await cake()   // ⭐ MUST use await
        console.log(cakee)
        console.log("ho gya")
    }
    catch (e) {
        console.log(e)
        console.log("nahi milega")
    }
}

party()
