const formulario = document.querySelector('.enviar-formulario');

formulario.addEventListener('click', function (e) {
    e.preventDefault()

    const nome = document.querySelector('#seuNome');

    const idade = document.querySelector('#suaIdade');

    const linguagem = document.querySelector('#suaLinguagem');

    const valueName = nome.value;
    const valueAge = idade.value;
    const valueProg = linguagem.value;

    const mostraMensagem = `Olá ${valueName}, sua idade é ${valueAge} e você está estudando ${valueProg}`;

    alert(mostraMensagem);
    console.log(mostraMensagem)
})
