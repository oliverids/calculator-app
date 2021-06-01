const theme = document.querySelector('input[type="range"]'),
     fundo = document.querySelector('body');     

theme.addEventListener('change', () => {
    if (theme.value === "1") {
        fundo.classList.remove("claro", "roxo");
    }

    else if (theme.value === "2") {
        fundo.classList.remove("claro", "roxo");
        fundo.classList.add("claro");
    }

    else {
        fundo.classList.remove("claro", "roxo");
        fundo.classList.add("roxo");
    }
});

