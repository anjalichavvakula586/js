function createCar(color,brand){
    return{
        color:color,
        brand:brand,
        start:function(){
            console.log("started");
        }
    };
}
let car1=createCar("black","Thar");
let car2=createCar("red","audi");
let car3=createCar("white","benz")
console.log(car1)
console.log(car2)
console.log(car3);


//shorthand notation

// function createCar(color,brand){
//     return{
//         color,
//       brand,
//         start(){
//             console.log("started");
//         }
//     };
// }
// let car1=createCar("black","Thar");
// let car2=createCar("red","audi");
// let car3=createCar("white","benz")
// console.log(car1)
// console.log(car2)
// console.log(car3);
// console.log(car1.start());


//constructor function

// function Car(color,brand){
//     this.color=color;
//     this.brand=brand;
//     this.start=function(){
//         console.log("started");
//     };
// }

// let car1=new Car("black", "thar");
//     console.log(car1);




// function properties
//name,length,constructor,prototype

//built in construction functions

//function date()

let now=new Date()
console.log(now)