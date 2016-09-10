$(document).ready(function () {
    "use strict";

    var colunas = 4;
    var tileWidth = "480px";
    var tileHeight = "360px";
    var emptyPosition = 8; // posição inicial
    var $tiles = $(".tile");

    var timer; // timer para recarregar a página

    $tiles.on("click", clickHandler);

    function clickHandler() {
        move($(this));

        // reseta o timer a cada click
        clearTimeout(timer);

        // em X minutos sem atividade, recarrega a página
        timer = setTimeout(function () {
            window.location.reload();
        }, 5 * 60000);
    }

    // função que move as peças e aciona o áudio ao final da animação
    function move($obj) {
        var position = Number($obj.attr("data-pos"));
        var line = Math.ceil(position / colunas);
        var emptyLine = Math.ceil(emptyPosition / colunas);
        
        var animateOptions = {
            duration: 600,
            start: function () {
                $tiles.off("click", clickHandler);
                pauseAudio(emptyPosition);
            },
            complete: function () {
                playAudio(position);
                $tiles.on("click", clickHandler);
            }
        };

        // verifica se a peça clicada é adjacente à posição vazia (linha ou coluna)
        // se for, move a peça na direção correta
        if (position + 1 === emptyPosition && line === emptyLine) {
            $obj.animate({ "left": "+=" + tileWidth }, animateOptions)
            $obj.attr("data-pos", emptyPosition);
            emptyPosition = position;
        }

        if (position - 1 === emptyPosition && line === emptyLine) {
            $obj.animate({ "left": "-=" + tileWidth }, animateOptions)
            $obj.attr("data-pos", emptyPosition);
            emptyPosition = position;
        }

        if (position + colunas === emptyPosition) {
            $obj.animate({ "top": "+=" + tileHeight }, animateOptions)
            $obj.attr("data-pos", emptyPosition);
            emptyPosition = position;
        }

        if (position - colunas === emptyPosition) {
            $obj.animate({ "top": "-=" + tileHeight }, animateOptions)
            $obj.attr("data-pos", emptyPosition);
            emptyPosition = position;
        }

    }

    // toca o elemento de áudio. usada ao final da animação.
    function playAudio(id) {
        var audio = document.getElementById(id);
        audio.load();
        audio.play();
    }

    // para a reprodução do áudio. Usada em caso de novo click antes do fim do áudio.
    function pauseAudio(id) {
        var audio = document.getElementById(id);
        audio.pause();
    };
});
