function cake(){
    return new Promise((resolve,reject)=>{
        console.log('1 putting the cake in oven')
        setTimeout(() => {
     
            let sucess=true
            if(sucess){
                resolve("2 cake is Backed")
            }
            else{reject("2 cake is burned")}
        }, 2000);
    })
}
cake().then((msg)=>{
    console.log(msg)
    console.log("ho gya")
}).catch((m)=>{
    console.log(m)
    console.log("nahi milega")
})
