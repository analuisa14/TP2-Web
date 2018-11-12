let playlist = JSON.parse(localStorage.getItem('music') || '[]');
for(let i=0; i<playlist.length; i++)        
            criaMusica(playlist[i]);
let adicionarEl = $('#adicionar-musica');
let removerEl = $('#remover-musica');
let inputEl = $('#adc');
//let playlistEl = $('#playlist');

function criaMusica (texto) {
    let musica = $('<div class="musica"></div>');
    let remove = $('<button class="botao-configurar" id="remover-musica">-</button>');
    let a = $('<a>' + texto + '</a>');
    let playlistEl = $('#playlist');
    musica.append(a);
    musica.append(remove);
    playlistEl.append(musica);    
    playlist.push(texto);
    localStorage.setItem('music', JSON.stringify(playlist));
    

    remove.click(function(){
        playlist.splice(playlist.length-1,1);        
        musica.remove();    
    });
}


adicionarEl.click(function () {
    inputEl.css('display', 'block');
});

inputEl.keydown(function(event) {
    if(event.which === 13 && inputEl.val()) {
        let music = inputEl.val();
               criaMusica(music);
        
            inputEl.css('display', 'none');
        inputEl.val('');
    }
});

