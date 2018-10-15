const rl = require('readline-sync');
const artCientifico = require('./objetos/articuloCientifico').articuloCientifico;
const funciones = require('./objetos/funciones').funciones;
var flag = true;
var final = "";
var opcion = 0;
var titulo = "";
var pagsArticulo = 0;
var publicadoEl = 0;
var menciones = 0;
var listaArticulos = [];
var id = 0;

var Funciones = new funciones();


var articuloActual=titulo;

console.log("*************************************************************************");
console.log("** Bienvenido al sistema de publicación de descubrimientos científicos **");
console.log("*************************************************************************");

while (flag==true) {
    let autores = [];

    console.log("Escriba:\n(1) Si desea dar de alta un nuevo artículo científico\n(2) Si desea dar de baja un artículo científico\n(3) Si desea modificar los autores de un artículo científico\n(4) Si desea modificar un artículo científico\n(5) Si desea modificar las patentes científicas\n(6) Si desea ver todos los artículos científicos que hay dados de alta\n(0) Si desea salir\n");
    opcion = rl.questionInt();
    if (opcion === 0) {
        flag = false;
    }else if(opcion === 1){
        
        id = id + 1;
        titulo = rl.question('Escriba el título del artículo científico: ');
        let numautores = rl.questionInt('Cuantos autores tiene éste artículo científico?: ');
        for (let i = 0; i < numautores ; i++) {
            autores[i] = rl.question('Escriba el nombre del autor ' + (i+1) + ': ');
        }
        
        pagsArticulo = rl.questionInt('De cuantas páginas consta este artículo científico?: ');
        publicadoEl = rl.questionInt('Cuando fue publicado este artículo científico?: ');
        menciones = rl.questionInt('Cuantas menciones tiene este artículo científico?: ');

        var articuloNuevo =  new artCientifico(id, titulo, autores, pagsArticulo, publicadoEl, menciones);
        listaArticulos.push(articuloNuevo);

        console.log(listaArticulos);

    }else if (opcion === 2) {
        let encontrado = false;
        let ids = rl.questionInt('Escribe el ID del artículo científico que quieres borrar: ');
        for (let i=0; i<listaArticulos.length; i++){
            let articulo = listaArticulos[i];
            
            if(articulo.id === ids){
                listaArticulos.splice(i,1);
                encontrado = true;
                console.log();
                console.log("El artículo fue eliminado con éxito");
                break;
            }

            
        }
        
        if (encontrado == false) {
            console.log();
            console.log("No se ha podido encontrar el artículo científico especificado, vuelva a intentarlo con otro ID.");
        }

        console.log();
    }else if (opcion === 3) {
        
        let encontrado = false;
        let ids = rl.questionInt('Escribe el ID del artículo científico al que deseas cambiarle los autores: ');
        for (let i=0; i<listaArticulos.length; i++){
            let articulo = listaArticulos[i];
            
            if(articulo.id === ids){
                let numautores = rl.questionInt('Artículo encontrado, escriba cuantos auntores va a tener el artículo: ');

                Funciones.numeroDeAutores(numautores);

                /*
                for (let i = 0; i < numautores ; i++) {
                    autores[i] = rl.question('Escriba el nombre del autor ' + (i+1) + ': ');
                }
                */
                articulo.cambiarAutores(autores);
                encontrado = true;
                console.log();
                console.log('Los autores del artículo "' + articulo.titulo + '" fueron modificados con éxito');
                break;
            }

            
        }
        
        if (encontrado == false) {
            console.log();
            console.log("No se ha podido encontrar el artículo científico especificado, vuelva a intentarlo con otro ID.");
        }

        console.log();

    }else if (opcion === 6) {
        console.log(listaArticulos);
        console.log();
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

/*let newcar = new clase(titulo, marca, modelo, color, km);
listadocoches.push(newcar); para crear un array con la información de newcar;
console.log(listadocoches);

-----------------------------------

-nueva estructura del bucle for
for (let coche of listadocoches){
    if (coche.titulo === titulo){
        console.log(coche);
        break;
    }
}

-----------------------------------

if(opcion === borrar){
    //dar un coche de baja
    let titulo = rl.question('titulo del que quieres borrar: ');
    for (let i=0; i<listacoches.length; i++){
        let coche = listacoches[i];
        if(coche.titulo === titulo){
            listacoches.splice(i);  ----> para eliminar el coche del array, buscar mas a fondo este metodo!!!
            encontrado = true;
            break;
        }
    }
}
*/