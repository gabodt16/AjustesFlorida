//Para que el js no se coma todo y siga las normas estrictas del lenguaje de programación
"use strict";

var text = 'Hola mundo, y hola a todos, y adios';

//Para dividir el string en arrays cortando las palablas por cada espacio
var wordArray = text.split(' ');
var wordMap = new Map();

for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    if(wordMap.has(word)){
        let count = wordMap.get(word);
        wordMap.set(word,count+1);
    }else{
        wordMap.set(word,1);
    }
    
}

console.log(wordMap);