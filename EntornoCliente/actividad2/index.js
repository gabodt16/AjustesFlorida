const rl = require('readline-sync');
const artCientifico = require('./objetos/articuloCientifico').articuloCientifico;
var autores = ['hola', 'vale'];
var articuloNuevo =  new artCientifico('La vida', autores, 20, 2, 3);
console.log(articuloNuevo);
articuloNuevo.darBaja();
console.log(articuloNuevo);
articuloNuevo.darAlta();
console.log(articuloNuevo);
autores[2] = 'ramon';
var autores2 = ['la vida', 'es', 'dificil'];
articuloNuevo.cambiarAutores(autores2);
console.log(articuloNuevo);

/*var art1 = new articuloCientifico(, )*/

/*let newcar = new clase(matricula, marca, modelo, color, km);
listadocoches.push(newcar); para crear un array con la información de newcar;
console.log(listadocoches);

-----------------------------------

-nueva estructura del bucle for
for (let coche of listadocoches){
    if (coche.matricula === matricula){
        console.log(coche);
        break;
    }
}

-----------------------------------

if(opcion === borrar){
    //dar un coche de baja
    let matricula = rl.question('matricula del que quieres borrar: ');
    for (let i=0; i<listacoches.length; i++){
        let coche = listacoches[i];
        if(coche.matricula === matricula){
            listacoches.splice(i);  ----> para eliminar el coche del array, buscar mas a fondo este metodo!!!
            encontrado = true;
            break;
        }
    }
}
*/