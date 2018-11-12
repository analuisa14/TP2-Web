let adicionarEl = $('#adicionar-musica');
let removerEl = $('#remover-musica');
let inputEl = $('#adc');
let playlistEl = $('#playlist');

function criaMusica (texto) {
    let musica = $('<div class="musica"></div>');
    let remove = $('<button class="botao-configurar" id="remover-musica">-</button>');
    let a = $('<a>' + texto + '</a>');
    musica.append(a);
    musica.append(remove);
    playlistEl.append(musica);    
    //let removeEl = $('#remover-musica');
    remove.click(function(){
        musica.remove();    
    });
}


adicionarEl.click(function () {
    inputEl.css('display', 'block');
});

inputEl.keydown(function(event) {
    if(event.which === 13 && inputEl.val()) {
        criaMusica(inputEl.val());
        inputEl.css('display', 'none');
        inputEl.val('');
    }
});

