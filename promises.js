// synchronous and asyncronous
// synchronous----the second statement of code executes only after completition of the first statement
// asyn-----the second statement wont wait until the first statement execution
// syn examples

alert("hii")
alert("good afternoon")
alert("how are you...?")

// async examples---fetch(url)

const url="https://apis.ccbp.in/jokes/random";
let responseObject1=fetch(url);
console.log("Fetching done");
console.log(responseObject1);

// promises---way of handling asynchronous functions

// states of promises---pending, fulfillment, rejectionn


// successss---.then(onReoved)
// /reject-----.catch(onRejected)

//success
const url2="https://apis.ccbp.in/jokes/random";
let responseObject2=fetch(url2);
responseObject.then((response)=>{
    console.log(responseObject2);
})

//failure

const url3="https://apis.ccbp./jokes/radom";//incorrect url
let responseObject=fetch(url3);
responseObject.then((response)=>{
    console.log(response);
})
responseObject.catch((error)=>{
    console.log(error);
});

