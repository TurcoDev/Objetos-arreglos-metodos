const person1 = {
    name: 'John',
    age: 30,
    married: true,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston'
    },
}

const person2 = {
  name: 'Juana',
  age: 10,
  married: false,
  hobbies: ['music', 'sports'],
  address: {
    street: '80 main st',
    city: 'New York'
  }
}

const person3 = {
  name: 'Federico',
  age: 40,
  married: true,
  hobbies: ['music', 'sports'],
  address: {
    street: '80 main st',
    city: 'New York'
  }
}

const person4 = {
  name: 'Maria',
  age: 35,
  married: false,
  hobbies: ['music', 'sports'],
  address: {
    street: '80 main st',
    city: 'New York'
  }
}

const personas = [person1, person2, person3, person4];

for (let index = 0; index < personas.length; index++) {
  console.log(personas[index].age);
}

function mayorDe30(listaPersonas) {
  let listaMayores = [];
  for (let index = 0; index < listaPersonas.length; index++) {
    if (listaPersonas[index].age > 30) {
      listaMayores.push(listaPersonas[index]);
      // listaMayores[listaMayores.length] = listaPersonas[index];
    }
  }

  return listaMayores;
}

console.log(mayorDe30(personas));

// funciones anonimas
const miFuncion = function (dato) {
  console.log(dato);
}

miFuncion('hola');

// funciones flecha
const miFuncionFlecha = dato => console.log(dato);

miFuncionFlecha('hola flecha');


function recibeFuncion(funcionIn) {
  funcionIn('Un dato de texto');
}

recibeFuncion(miFuncion)


