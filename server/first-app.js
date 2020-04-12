
// variables
const name = 'Ke Deng';
let age = 26;

// define function using arrow
const add = (a, b) => a + b;

console.log(add(1, 2));
console.log(age);

/*
 * Object
 * this.name refers to global scope when using arrow 
 */
const person = {
    name: 'Ke Deng',
    age: 26,
    greet() {
        console.log('This is ' + this.name);
    }
};

// call object function
person.greet();

// array
// reference const can be modified by some operations like adding, cause the address doesn't change
const team = ['Minyan Chen', 'Ke Deng'];
const teammate = team.map(t => {
    return 'teammate: ' + t;
});
console.log(teammate);

// not copying array
const copiedTeam = [team];
team.push('K. Bryant');
console.log(copiedTeam);

// copy array using spread
const copiedSecTeam = [...team];
console.log(copiedSecTeam);

//destructing
const personName = ({ greet }) => {
    console.log(greet());
}
personName(person);