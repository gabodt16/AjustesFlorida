const rl = require('readline-sync');
const patentesCientificas = require('./objetos/patentes').PatentesCientificas;
const artRevista = require('./objetos/tiposArticulos/revista').ArticuloDeRevista;
const artConferencia = require('./objetos/tiposArticulos/conferencia').ArticuloDeConferencia;

//const funciones = require('./funciones/funciones').funciones;
var flag = true;
var final = "";
var opcion = 0;
var titulo = "";
var pagsArticulo = 0;
var publicadoEl = 0;
var menciones = 0;
var listaArticulos = [];
var id = 0;
var ids = 0;
var busquedaAnyoPublicacion = 0; 
var tipoDeArticulo = "";
var busquedaAutor = "";

/* Funciones */

// Parámetros para los filters


function isEmpty(str) {
    return (!str || 0 === str.length);
}

function busquedaGeneral(elemento){
    
    if (busquedaAutor.length > 0 && busquedaAnyoPublicacion.length > 0) {
        if(elemento.autores == busquedaAutor && elemento.publicacion == busquedaAnyoPublicacion && elemento.tipoDeArticulo === tipoDeArticulo ){
            return elemento;
        }
    } else if (busquedaAutor.length > 0){
        if(elemento.autores == busquedaAutor){
            return elemento;
        }
    } else if (busquedaAnyoPublicacion.length > 0) {
        if(elemento.publicacion == busquedaAnyoPublicacion){
            return elemento;
        }
    } else {
        console.log('Error, los valores introducidos no son válidos');
    }
 
}




// Inicio del código

var articuloActual=titulo;

console.log("*************************************************************************");
console.log("** Bienvenido al sistema de publicación de descubrimientos científicos **");
console.log("*************************************************************************");

while (flag==true) {
    let autores = [];

    console.log("Escriba:\n(1) Si desea dar de alta un nuevo artículo científico\n(2)Si desea dar de alta una patente científica \n(3) Si desea dar de baja un artículo científico\n(4) Si desea modificar los autores de un artículo científico\n(5) Si desea modificar un artículo científico\n(6) Si desea modificar las patentes científicas\n(7) Si desea ver todos los artículos científicos que hay dados de alta\n(8) Si desea buscar artículos científicos o patentes científicas\n(0) Si desea salir\n");
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
        console.log('Qué tipo de artículo científico es?\nEscribe:\n(1) De Tipo Revista\n(2) De Tipo Conferencia');
        tipoArticuloCientifico = rl.questionInt();

        if (tipoArticuloCientifico === 1) {

            let nombreDeRevista = rl.question('Cual es el nombre de la revista?: ');
            let editorial = rl.question('Cual es la editorial?: ');
            let factorImpacto = rl.questionInt('Cual es el factor de impacto de esta revista?: ');

            var articuloRevista =  new artRevista(id, titulo, autores, pagsArticulo, publicadoEl, menciones, nombreDeRevista, editorial, factorImpacto);
            listaArticulos.push(articuloRevista);
        } else if(tipoArticuloCientifico === 2) {

            let nombreConferencia = rl.question('Cual es el nombre de la conferencia?: ');
            let lugarCelebracion = rl.question('Cual es el lugar donde se celebra la conferencia?: ');

            var articuloConferencia =  new artConferencia(id, titulo, autores, pagsArticulo, publicadoEl, menciones, nombreConferencia, lugarCelebracion);
            listaArticulos.push(articuloConferencia);
        }
        

        console.log(listaArticulos);

    }else if (opcion === 2) {
        


    }else if (opcion === 3) {
        let encontrado = false;
        ids = rl.questionInt('Escribe el ID del artículo científico que quieres borrar: ');

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
    }else if (opcion === 4) {
        
        let encontrado = false;
        let ids = rl.questionInt('Escribe el ID del artículo científico al que deseas cambiarle los autores: ');
        for (let i=0; i<listaArticulos.length; i++){
            let articulo = listaArticulos[i];
            
            if(articulo.id === ids){
                let numautores = rl.questionInt('Artículo encontrado, escriba cuantos auntores va a tener el artículo: ');

                //Funciones.numeroDeAutores(numautores); aquiiiiiiiiiiiiiiiiiiiii lo de las funciones para mejorar el codigo

                
                for (let i = 0; i < numautores ; i++) {
                    autores[i] = rl.question('Escriba el nombre del autor ' + (i+1) + ': ');
                }
                
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

    }else if (opcion === 7) {
        console.log(listaArticulos);
        console.log();
    }else if (opcion === 8) {
        let flag = false;

        while (!flag) {
            
            
            console.log('\nDesea buscar artículos científicos o patentes científicas?\n(1) Para buscar artículos científicos\n(2) Para buscar patentes científicas');
            let eleccionDeBusqueda = rl.questionInt();
            console.log('Se puede realizar la busqueda  mediante varios parámetros, si no conoce alguno de estos déjelo vacio');

            if (eleccionDeBusqueda === 1) {
                busquedaAutor = rl.question('Introduce nombre del autor: ');
                busquedaAnyoPublicacion = rl.questionInt('Introduce el año de publicación del artículo: ');
                let num = rl.questionInt('Escribe:\n(1) Si el artículo es de revista\n(2) Si el artículo es de conferencia\n');
                
                let buscando = listaArticulos.filter(busquedaGeneral);
                console.log(buscando);
                if (num === 1) {
                    tipoDeArticulo = "tipoRevista";
                } else if(tipoBusqueda === 2) {
                    tipoDeArticulo = "tipoConferencia";
                } else {
                    console.log('El numero introducido no es válido');
                }


            } else {
                
            }

            
            
            console.log('¿Desea salir del programa?');
            console.log('1) Si');
            console.log('2) No');
            let opcion = readline.questionInt('Por favor seleccione una opcion: ');
            if(opcion === 1){
                salir = true;
            } else {
                salir = false;
            }
        }


    } else {
            
    }
}
    
/*PARTE DE JAVI DONDE USA LA FUNCION -------------------------------------

console.log('¿Que criterios de busqueda deseas utilizar?');
            console.log('1) Busquedas por revistas');
            console.log('2) Busqueda por articulos en conferencia');
            console.log('3) Busqueda por patentes cientificas');
        
            let tipoBusqueda = readline.questionInt('Introduce el tipo de busqueda: ');
            buscandoAutor = readline.question('Introduce el autor: ');
            busquedaAnyoPublicacion = readline.question('Introduce el anyo de publicacion: ');

            if (tipoBusqueda === 1) {
                let prueba = listaRevista.filter(busqueda);
                console.log(prueba);
            } else if(tipoBusqueda === 2) {
                let prueba = listaConferencia.filter(busqueda);
                console.log(prueba);
            } else if(tipoBusqueda === 3){
                let prueba = listaPatentes.filter(busqueda);
                console.log(prueba);
            } else {
                console.log('El numero introducido no es valido');
                
            }
            console.log('¿Desea salir del programa?');
            console.log('1) Si');
            console.log('2) No');
            let opcion = readline.questionInt('Por favor seleccione una opcion: ');
            if(opcion === 1){
                salir = true;
            } else {
                salir = false;
            }

*/


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