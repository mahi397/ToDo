//checking off specific li when clicked
// $("li").click(function(){
    // // $(this).css("color", "gray");
    // // $(this).css("text-decoration", "line-through");
    
    // // above OR :-
    // //make an object with key-val pairs as color and textdecoration
    
    // $(this).css({
    //     color: "gray",
    //     textDecoration: "line-through"  /* text-Decoration is an error. Hyphens not allowed in property names. So use camelCasing*/
    // });

    // if($(this).css("color") === "gray"){    //gray doesn't work. Put rgb here.
    
    

 /*   $("li").click(function(){
    
        if($(this).css("color") === "rgb(128, 128, 128)") { 
            $(this).css({
                color: "black",
                textDecoration: "none"
            });
        } else {
            $(this).css({
                color: "gray",
                textDecoration: "line-through"
            });
        }
    });

  Better still, create a CSS class. Toggle it on and off as needed.
*/

$("li").click(function(){
    $(this).toggleClass("completed");
});
