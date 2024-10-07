/* Javascript Promises */


    const mypromise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Promise has been resolveed!!")
        }, 5000);
    })
    .then((result) => {
       console.log(result)
    })

    // console.log(mypromise)



// Resolve 
{
    // const mypromise = new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         resolve("Promise has been resolveed!!")
    //     }, 5000);
    // })
    // .then((result) => {
    //    console.log(result)
    // })
    // .then(() => {
    //     console.log("next progress")
    // })
    // .catch(() => {
    //     console.log("rejected")
    // })

    // console.log(mypromise)
}

// Rejected 
{
    // const mypromise = new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         reject("Promise has been rejected!!")
    //     }, 5000);
    // })
    // .then((result) => {
    //    console.log(result)
    // })
    // .then(() => {
    //     console.log("next progress")
    // })
    // .catch(() => {
    //     console.log("rejected")
    // })

    // console.log(mypromise)
}

// async wait 

{
    async function print1(){
        console.log("async function 1")
        let result1 = await mypromise;
        console.log("THis is async and wait method 1")
    }

    print1();
}