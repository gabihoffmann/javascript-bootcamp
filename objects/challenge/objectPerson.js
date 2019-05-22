// model a person

let person = {
    name: 'Ana',
    age: 26,
    location: 'Goiânia'
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);