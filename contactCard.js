$(document).ready(function(){
    $(document).on("submit", function(){
        var values=[];
        $("label").children().each(function(i){
            values[i] = $(this).val();
        });
        $('#cards').append("<div class='card'><h1>"+values[0]+" "+values[1]+"</h1><p>"+values[2]+"</p></div>");
        return false;
    });

    $(document).on("click", ".card", function(){
        $(this).children().toggle(); 
        console.log("test");
     });
});