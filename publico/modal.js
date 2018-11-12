let $botaoModal = $('#botao-modal');
let $modal = $('#modal');
let $main = $('main');
let $fechar = $('#fechar');

$botaoModal.click(function() {
    $main.css('opacity', '.5');
    $modal.fadeIn(300);
});

$fechar.click(function() {
    $main.css('opacity', '1');
    $modal.fadeOut(300);
});