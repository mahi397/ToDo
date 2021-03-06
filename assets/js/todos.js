//checking off specific li when clicked
// $("li").click(function(){
    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");
    
    // above OR :-
    //make an object with key-val pairs as color and textdecoration
    
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

$("ul").on("click", "li", function(){  //when an li is clicked inside of this ul, run this code
    $(this).toggleClass("completed");
}); //you add a listener to an element that exists when the page loads, hence ul coz all li's don't exist when the page loads

//remove todos by clicking X
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    
    event.stopPropagation();
});

//add new todo
$("input[type = text]").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();    //val() as getter
        $(this).val("");                 //val() as setter
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});
