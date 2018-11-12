let $chat = $('#chat');
let $box = $('#box');

function criaMensagem(lado, texto) {
	let $mensagem = $('<p class="mensagem ' + lado + '"></p>').hide();
  $mensagem.html(texto);
  $chat.append($mensagem);
  $mensagem.show(100);
}

setTimeout(function() {criaMensagem('esquerda', 'Olá!');}, 250);

$box.keyup(function(e) {
	if(e.which == 13 && $box.val() != '') {
  	criaMensagem('direita', $box.val());
    $box.val('');
  }
});
