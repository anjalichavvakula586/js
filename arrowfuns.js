//terinary operator
let speed=10;
let msg=speed>50?"true":speed<50?"ok":"not ok";
console.log(msg);


//switch case
let day=1
switch(day){
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")

        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    default:
        console.log("invalid")
}
//arrow functions

let sum=(a,b)=>{
    let res=a+b;
    return res
}
console.log(sum(5,6))
//when there is only one exp no need of {} and return statement
let sum2=(a,b)=>a+b
console.log(sum2(5,6))
//when there is only one arg no need of ()

let sum3=a=>`hii ${a}`
console.log(sum3("anju"))


//when there are no parameters

let sayhi=()=>"hello"
console.log(sayhi())