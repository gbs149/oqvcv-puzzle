$(document).ready(function () {
    "use strict";

    var colunas = 4;
    var tileWidth = "480px";
    var tileHeight = "360px";

    var timer;

    $(".tile").on("click touchmove", function() {
        move($(this));
        console.log(timer);
        clearTimeout(timer);
        timer = setTimeout(function () {
            window.location.reload();
        }, 5 * 60000);
    });

    function move($obj) {
        var $empty = $("#empty");
        var position = Number($obj.attr("data-pos"));
        var emptyPosition = Number($empty.attr("data-pos"));
        var line = Math.ceil(position / colunas);
        var emptyLine = Math.ceil(emptyPosition / colunas);
        
        var animateOptions = {
            duration: 200,
            start: function () {
                pauseAudio(emptyPosition);
            },
            complete: function () {
                playAudio(position);
            }
        };

        if (position + 1 === emptyPosition && line === emptyLine) {
            $obj.animate({ "left": "+=" + tileWidth }, animateOptions)
            $empty.animate({ "left": "-=" + tileWidth }, animateOptions);
            $obj.attr("data-pos", emptyPosition);
            $empty.attr("data-pos", position);
        }

        if (position - 1 === emptyPosition && line === emptyLine) {
            $obj.animate({ "left": "-=" + tileWidth }, animateOptions)
            $empty.animate({ "left": "+=" + tileWidth }, animateOptions);
            $obj.attr("data-pos", emptyPosition);
            $empty.attr("data-pos", position);
        }

        if (position + colunas === emptyPosition) {
            $obj.animate({ "top": "+=" + tileHeight }, animateOptions)
            $empty.animate({ "top": "-=" + tileHeight }, animateOptions);
            $obj.attr("data-pos", emptyPosition);
            $empty.attr("data-pos", position);
        }

        if (position - colunas === emptyPosition) {
            $obj.animate({ "top": "-=" + tileHeight }, animateOptions)
            $empty.animate({ "top": "+=" + tileHeight }, animateOptions);
            $obj.attr("data-pos", emptyPosition);
            $empty.attr("data-pos", position);
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


/*

$(document).ready(function () {
    "use strict";

    var colunas = 4;
    var tileWidth = "480px",
        tileHeight = "360px";
    var timer;

    $(".tile").on("click touchmove", function () {
        move($(this).attr("data-pos"));
        console.log($(this).attr("data-pos"))
        clearTimeout(timer);
        timer = setTimeout(function () {
            window.location.reload(false);
        }, 5 * 1000);
    });

    function move(dataPosition) {
        var position = Number(dataPosition);
        var dataEmptyPosition = $("#empty").attr("data-pos");
        var emptyPos = Number(dataEmptyPosition);
        var line = Math.ceil(position / colunas);
        var emptyLine = Math.ceil(emptyPos / colunas);

        var animateOptions = {
            duration: 200,
            start: function () {
                pauseAudio(dataEmptyPosition);
            },
            complete: function () {
                playAudio(dataPosition);
            }
        };

        if (position + 1 === emptyPos && line === emptyLine) {
            $(this).animate({ "left": "+=" + tileWidth }, animateOptions)
            $('#empty').animate({ "left": "-=" + tileWidth }, animateOptions);
            $(this).attr("data-pos", emptyPos);
            $("#empty").attr("data-pos", position);
        }

        if (position - 1 === emptyPos && line === emptyLine) {
            $(this).animate({ "left": "-=" + tileWidth }, animateOptions)
            $('#empty').animate({ "left": "+=" + tileWidth }, animateOptions);
            $(this).attr("data-pos", emptyPos);
            $("#empty").attr("data-pos", position);
        }

        if (position + colunas === emptyPos) {
            $(this).animate({ "top": "+=" + tileHeight }, animateOptions)
            $('#empty').animate({ "top": "-=" + tileHeight }, animateOptions);
            $(this).attr("data-pos", emptyPos);
            $("#empty").attr("data-pos", position);
        }

        if (position - colunas === emptyPos) {
            $(this).animate({ "top": "-=" + tileHeight }, animateOptions)
            $('#empty').animate({ "top": "+=" + tileHeight }, animateOptions);
            $(this).attr("data-pos", emptyPos);
            $("#empty").attr("data-pos", position);
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
*/