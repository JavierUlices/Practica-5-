//Objetos literales no indexados

const animal = {
    color: "naranja",
    nombre:"Simba",
    Rugiendo: "True",
    favoritos:{
        días: {
            ok: true,
            
        },
        noche:{
            ok: false
        }
    }
}
console.log(animal.favoritos?.días?.ok); 

//guardar el valor de la propiedad color en una constante
const color = animal.color;
const nombre = animal.color;
console.log("color: "+ color + ", animal: " + nombre );
