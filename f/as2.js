// let promise1 = new Promise(function(resolve, reject) {

//     let condition = true;

//     setTimeout(function() {
//         if (condition) {
//             resolve("Success after 2 sec");
//         } else {
//             reject("Condition failed");
//         }
//     }, 2000);

// });

// promise1.then(function(data) {
//     console.log("Success :", data);
// }).catch(function(error) {
//     console.log("Error :", error);
// });


// let promise2 = new Promise((resolve, reject) => {

//     let condition = false;   
//     setTimeout(() => {
//         if (condition) {
//             resolve("Promise resolved successfully");
//         } else {
//             reject("Promise rejected due to failure");
//         }
//     }, 2000);

// });

// promise2
//     .then(result => {
//         console.log("Success:", result);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });




// function checkPromise(value) {

//     return new Promise(function(resolve, reject) {

//         setTimeout(function() {
//             if (value) {
//                 resolve("Task completed!");
//             } else {
//                 reject("Task failed!");
//             }
//         }, 2000);

//     });
// }

// checkPromise(true)
//     .then(function(msg) {
//         console.log(msg);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });


function myTask(condition) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (condition) {
                resolve(" done ");
            } else {
                reject("Work not done");
            }
        }, 2000);

    });
}

async function runTask() {
    try {
        let result = await myTask(true);
        console.log("Success:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

runTask();