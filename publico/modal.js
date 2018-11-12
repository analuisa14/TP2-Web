let $botaoModal = $('#botao-modal');
let $modal = $('#modal');
let $main = $('main');

$botaoModal.click(function() {
    $main.css('opacity', '.5');
    $modal.fadeIn(300);
});