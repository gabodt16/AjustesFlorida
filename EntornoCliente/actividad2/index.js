const rl = require('readline-sync');
const artCientifico = require('./objetos/articuloCientifico').articuloCientifico;
var flag = true;
var final = "";
var opcion = 0;
var titulo = "";
var autores = [];
var pagsArticulo = 0;
var publicadoEl = 0;
var menciones = 0;
var listaArticulos = [];


var articuloActual=titulo;

console.log("*************************************************************************");
console.log("** Bienvenido al sistema de publicación de descubrimientos científicos **");
console.log("*************************************************************************");

while (flag==true) {

    console.log("Escriba:\n1) Si desea dar de alta un nuevo artículo científico\n2) Si desea dar de baja un artículo científico\n3) Si desea modificar los autores de un artículo científico\n4) Si desea modificar un artículo científico\n5) Si desea modificar las patentes científicas\n0) Si desea salir\n");
    opcion = rl.questionInt();
    if (opcion === 0) {
        flag = false;
    }else if(opcion === 1){
        titulo = rl.question('Escriba el título del artículo científico: ');
        let numautores = rl.question('Cuantos autores tiene éste artículo científico?: ');
        for (let i = 0; i < numautores ; i++) {
            autores[i] = rl.question('Escriba el nombre del autor ' + (i+1) + ': ');
        }
        var autoresPropios = new Array(autores);
        pagsArticulo = rl.question('De cuantas páginas consta este artículo científico?: ');
        publicadoEl = rl.question('Cuando fue publicado este artículo científico?: ');
        menciones = rl.question('Cuantas menciones tiene este artículo científico?: ');

        var articuloNuevo =  new artCientifico(titulo, autoresPropios, pagsArticulo, publicadoEl, menciones);
        listaArticulos.push(articuloNuevo);

        console.log(listaArticulos);

    }else if (opcion === 2) {
        
    } else {
        
    }
}


/*
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
*/
/*
var objetos = ['h', 'g', 'd'];
var array = new Array (objetos);

esto lo que hace es que te crea una copia del array que le estas pasando para que asi 
cuando estes creando el objeto al modificar el array principal, no modificará el 
almacenado en el objeto

*/

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