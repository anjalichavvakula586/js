// spread operator
// with arrays 

let a=[1,2,3]
let b=[0, ...a, 4]
console.log(b);


// //concatinating
let c=[1,2,3]
let d=[4,5,6]
console.log(...c,...d);

// //copying
let e=[1,2,3]
let f=[...e]
console.log(...f);

//with objects

let obj={
    name:"Anju",
    age:21
};
let obj2={...obj, city:"hyd"}
console.log(obj2);

// concatinating
let one={name:"anju", age:20};
let two={city:"hyd",role:"sde"}
let three={...one,...two}
console.log(three)




//rest parameters

function argss(...nums){
    console.log(nums)
}
argss(1,2,3)

//template strings

let name="Anjuuuuu"
console.log(`Heloooo ${name}!`)