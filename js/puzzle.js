$(document).ready(function () {
    "use strict";

    var colunas = 4;
    var tileWidth = "480px";
    var tileHeight = "360px";
    var emptyPosition = 8;

    var timer;

    $(".tile").on("click", clickHandler);

    function clickHandler() {
        move($(this));
        // $(this).off();
        clearTimeout(timer);
        console.log(emptyPosition);
        timer = setTimeout(function () {
            window.location.reload();
        }, 5 * 60000);
    }

    function move($obj) {
        var $empty = $("#empty");
        var position = Number($obj.attr("data-pos"));
        // var emptyPosition = Number($empty.attr("data-pos"));
        var line = Math.ceil(position / colunas);
        var emptyLine = Math.ceil(emptyPosition / colunas);
        
        var animateOptions = {
            duration: 1200,
            start: function () {
                $obj.off("click", clickHandler);
                pauseAudio(emptyPosition);
            },
            complete: function () {
                playAudio(position);
                $obj.on("click", clickHandler);
            }
        };

        if (position + 1 === emptyPosition && line === emptyLine) {
            $obj.animate({ "left": "+=" + tileWidth }, animateOptions)
            // $empty.animate({ "left": "-=" + tileWidth }, animateOptions);
            $obj.attr("data-pos", emptyPosition);
            emptyPosition = position;
        }

        if (position - 1 === emptyPosition && line === emptyLine) {
            $obj.animate({ "left": "-=" + tileWidth }, animateOptions)
            // $empty.animate({ "left": "+=" + tileWidth }, animateOptions);
            $obj.attr("data-pos", emptyPosition);
            emptyPosition = position;
        }

        if (position + colunas === emptyPosition) {
            $obj.animate({ "top": "+=" + tileHeight }, animateOptions)
            // $empty.animate({ "top": "-=" + tileHeight }, animateOptions);
            $obj.attr("data-pos", emptyPosition);
            emptyPosition = position;
        }

        if (position - colunas === emptyPosition) {
            $obj.animate({ "top": "-=" + tileHeight }, animateOptions)
            // $empty.animate({ "top": "+=" + tileHeight }, animateOptions);
            $obj.attr("data-pos", emptyPosition);
            emptyPosition = position;
        }

    }

    function playAudio(id) {
        var audio = document.getElementById(id);
        audio.load();
        audio.play();
    }

    function pauseAudio(id) {
        var audio = document.getElementById(id);
        audio.pause();
    };
});
