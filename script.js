const numeros = document.querySelectorAll('.numero'),
    resultado = document.querySelector('#result');

numeros.forEach(e => {
    e.addEventListener('click', () => {
        resultado.value += e.value;
    })
})

const deleta = document.querySelector('input[value="DEL"]'),
    reseta = document.querySelector('input[value="RESET"]');

deleta.addEventListener('click', backspace);
function backspace() {
    let x = resultado.value;
    if(x.length > 0) {
        let y = x.substring(0, x.length - 1);
        resultado.value = y;
    }
}

reseta.addEventListener('click', apagaTudo);
function apagaTudo() {
    resultado.value = '';
}

const soma = document.querySelector('input[value="+"]'),
    subt = document.querySelector('input[value="-"]'),
    divi = document.querySelector('input[value="/"]'),
    operacoes = [soma, subt, divi];

operacoes.forEach(e => {
    e.addEventListener('click', () => {
        resultado.value += e.value;
    })
})

const times = document.querySelector('input[value="x"]');
times.addEventListener('click', () => {
    resultado.value += '*'; 
})

const ponto = document.querySelector('input[value="."]');
ponto.addEventListener('click', () => {
    resultado.value += ponto.value;
})

const final = document.querySelector('input[value="="]');
final.addEventListener('click', () => {
    resultado.value = eval(resultado.value);

})

