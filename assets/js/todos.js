//checking off specific li when clicked
$("li").click(function(){
    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");
    
    // above OR :-
    //make an object with key-val pairs as color and textdecoration
    
    $(this).css({
        color: "gray",
        textDecoration: "line-through"  /* text-Decoration is an error. Hyphens not allowed in property names. So use camelCasing*/
    });
});