$( document ).ready(function() {
    $("#about").on("click", function(event){
        event.preventDefault();
        var route = $(this).attr("href");
        var request = $.ajax({
            url: route,
            method: "GET",
        });
        request.done(function(response){
            if ($(".infopane").length == 0) {
                $("#buttons").append(response);
            } else {
                $(".infopane").replaceWith(response);
            }
        }); 
    });
    
    $("#projects").on("click", function(event){
        event.preventDefault();
        var route = $(this).attr("href");
        var request = $.ajax({
            url: route,
            method: "GET",
        });
        request.done(function(response){
            if ($(".infopane").length == 0) {
                $("#buttons").append(response);
            } else {
                $(".infopane").replaceWith(response);
            }
        }); 
    });

});
