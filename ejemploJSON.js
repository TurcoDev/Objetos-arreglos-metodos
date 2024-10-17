const person1 = {
  name: 'John',
  age: 30,
  married: true,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston'
  },
  children: null
}

console.log("Objeto", person1);

const person1JSON = JSON.stringify(person1);

console.log("JSON", person1JSON);
console.log("Que es??", typeof person1JSON);

const personText = '{"name":"John","age":30,"married":true,"hobbies":["music","movies","sports"],"address":{"street":"50 main st","city":"Boston"},"children":null}';
const person1JS = JSON.parse(personText);
console.log("Objeto Convertido", person1JS);

