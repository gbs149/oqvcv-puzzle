"use strict";

var width = 4;
var tileWidth = "25vw";
var tileHeight = "33.333vh"

$(".tile").on("click touchmove", move);

function move() {
    var dataPosition = $(this).attr("data-pos");
    var position = Number(dataPosition);
    var dataEmptyPosition = $("#empty").attr("data-pos");
    var emptyPos = Number(dataEmptyPosition);
    var line = Math.ceil(position / width);
    var emptyLine = Math.ceil(emptyPos / width);
    var animateOptions = {
        duration: 200,
        start: function() {
            pauseAudio(dataEmptyPosition);
        },
        complete: function() {
            playAudio(dataPosition);
        }
    };

    if (position + 1 === emptyPos && line === emptyLine) {
        $(this).animate({"left": "+=" + tileWidth}, animateOptions)
        $('#empty').animate({"left": "-=" + tileWidth}, animateOptions);
        $(this).attr("data-pos", emptyPos);
        $("#empty").attr("data-pos", position);
    } 

    if (position - 1 === emptyPos && line === emptyLine) {
        $(this).animate({"left": "-=" + tileWidth}, animateOptions)
        $('#empty').animate({"left": "+=" + tileWidth}, animateOptions);
        $(this).attr("data-pos", emptyPos);
        $("#empty").attr("data-pos", position);
    }

    if (position + width === emptyPos) {
        $(this).animate({"top": "+=" + tileHeight}, animateOptions)
        $('#empty').animate({"top": "-=" + tileHeight}, animateOptions);
        $(this).attr("data-pos", emptyPos);
        $("#empty").attr("data-pos", position);
    }
    
    if (position - width === emptyPos) {
        $(this).animate({"top": "-=" + tileHeight}, animateOptions)
        $('#empty').animate({"top": "+=" + tileHeight}, animateOptions);
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



