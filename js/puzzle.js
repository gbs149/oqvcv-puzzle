"use strict";

var width = 4;
// var height = 3;
var tileWidth = "25vw";
var tileHeight = "33.333vh"

$(".tile").on("click", move);

function move() {
    var position = Number($(this).attr("data-pos"));
    var emptyPos = Number($("#empty").attr("data-pos"));
    var line = Math.ceil(position / width);
    var emptyLine = Math.ceil(emptyPos / width);

    if (position + 1 === emptyPos && line === emptyLine) {
        $(this).animate({"left": "+=" + tileWidth}, 200)
        $('#empty').animate({"left": "-=" + tileWidth}, 200);
        $(this).attr("data-pos", emptyPos);
        $("#empty").attr("data-pos", position);
    } 

    if (position - 1 === emptyPos && line === emptyLine) {
        $(this).animate({"left": "-=" + tileWidth}, 200)
        $('#empty').animate({"left": "+=" + tileWidth}, 200);
        $(this).attr("data-pos", emptyPos);
        $("#empty").attr("data-pos", position);
    }

    if (position + width === emptyPos) {
        $(this).animate({"top": "+=" + tileHeight}, 200)
        $('#empty').animate({"top": "-=" + tileHeight}, 200);
        $(this).attr("data-pos", emptyPos);
        $("#empty").attr("data-pos", position);
    }
    
    if (position - width === emptyPos) {
        $(this).animate({"top": "-=" + tileHeight}, 200)
        $('#empty').animate({"top": "+=" + tileHeight}, 200);
        $(this).attr("data-pos", emptyPos);
        $("#empty").attr("data-pos", position);
    }

}




