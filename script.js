//Objects
const arditArray = ["Adni", "Latifi", "20",
    ["drila", "fisi", "bledi", "adni"]
];


const arditObject = {
    firstName: "Ardit",
    lastName: "Demolli",
    age:24,
    friends: ["drila", "fisi", "bledi", "adni"]
}

console.log(arditObject.firstName);
console.log(arditObject.lastName);
console.log(arditObject.friends[3]);


const personObject = {
    firstName: 'John',
    lastName:'Doe',
    age:25,
    nationality:'american',
    visitedCountries:['Spain','Germany', 'Italy'],
    job:'programmer'
}

console.log(`${personObject.firstName} ${personObject.lastName} is a ${personObject.age + 2} year old ${personObject.job} visited ${personObject.visitedCountries.length} countries`);

//John Doe a 25 year old programmer visited 3 countries


const coffeMachine = {
    brand: "Gaggia",
    model: "Classos pro",
    color: "silver",

    makeCoffe: function(coffeSize){
        if(coffeSize === 's' || coffeSize === 'S'){
            return "Short espresso";
        }else if(coffeSize === 'm' || coffeSize === 'M'){
            return "Medium espresso";
        }else if(coffeSize === 'l' || coffeSize === 'L'){
            return "Large espresso";
        }else if(coffeSize === 'd' || coffeSize === 'D'){
            return "Double espresso";
        }else{
            return "Invalid input"
        }
    },

    about: function(){
        return `I am a ${coffeMachine.color} colored ${coffeMachine.model} ${coffeMachine.brand}`;
     },
}

coffeMachine.brand;
console.log(coffeMachine.makeCoffe("m"));
console.log(coffeMachine.makeCoffe("L"));



console.log(coffeMachine.about())



/* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).

Store the BMI value to a property, and also return it from the method

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK
Assignment
Classwork 14.2 */

const markBMI = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height:1.69,

    calcBMI: () => this.markBMI = this.mass /this.height ** 2
}
const johnBMI = {
    firstName: "John",
    lastName: "smith",
    mass:92,
    height:1.92,
    calcBMI: () =>this.johnBMI = this.mass /this.height ** 2
}


console.log(markBMI)
console.log(johnBMI)