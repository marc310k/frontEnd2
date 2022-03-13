let element = document.querySelector('h1');
let element2 = document.querySelector('body');
let element3 = document.querySelector('.container'); 
//querySelectorAll para todos os elementos
let element4 = document.querySelectorAll('.item'); 


function myFunction() {
    
    element.classList.toggle("darkH1")
    
    element2.classList.toggle("darkBackground");
    
    element3.classList.toggle("darkTextos");

    //forEach para interar a array  com arrow function
    element4.forEach(elemento => {
        elemento.classList.toggle('darkCards')
    })
 }

  
// Passo 1
let selecao = prompt("Informe o felino para alteração: (0) Leão, (1) Leopardo, (2) Pantera, (3) Jaguar ou (4) Guepardo");

// Passo 3
let novaUrl = prompt("Informe a nova URL: ")

let listaImagens = document.querySelectorAll("img");
// Passo 4
listaImagens[selecao].setAttribute("src", novaUrl)

