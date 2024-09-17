const animal = {
    color: 'azul',
    nombre: 'torogoz',
    volando: 'true'
}

//Destructuring objetos literales...
const { color, nombre, volando } = animal;
console.log("El " + nombre + " es de color: " + color);

//arrays indexados

const frutas = ["pera", "manzana", "Sandía"];

//destructuring array
const [pera, manzana, Sandía] = frutas;
console.log("A mi me gusta mucho la " + pera);