const rl = require('readline-sync');

function busquedaArticulo (x, titulo){
    return x == titulo;
};

function numeroDeAutores(num, autores){
    console.log(autores);
    for (let i = 0; i < num ; i++) {
        autores[i] = rl.question('Escriba el nombre del autor ' + (i+1) + ': ');
    }
    return autores;
}

var perro = 3;
var potra = ['potrica', 'potranca', 'potra'];

console.log(numeroDeAutores(perro, potra));


//exports.funciones = funciones;