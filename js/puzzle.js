"use strict";

var width = 4;
var height = 3;

$(".tile").on("click", move);

function move() {
    var position = Number($(this).css("order"));
    var emptyPos = Number($("#empty").css("order"));

    if ( position + 1 === emptyPos || 
         position - 1 === emptyPos ||
         position + width === emptyPos ||
         position - width === emptyPos ) {

        /*$(this).css("order", emptyPos);
        $("#empty").css("order", position);*/

        /*$(this).animate( { order: emptyPos } );
        $("#empty").animate( { order: position } );*/

    }
     console.log(position + 1);

    
}
                                                                        



