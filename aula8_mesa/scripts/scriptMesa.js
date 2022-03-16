window.onload = function() {
    alert("Bem vindo ao formulário!")
}

let impedimento = document.getElementById('botaoReset');

impedimento.addEventListener('click', function(evento){
    alert("Você clicou!");
    evento.preventDefault();
    });

let mouseIn = document.querySelector('input');

mouseIn.onmouseover = function(){
    mouseIn.style.color = "blue";
}

mouseIn.onmouseout = function(){
    mouseIn.style.color = "red";
}

