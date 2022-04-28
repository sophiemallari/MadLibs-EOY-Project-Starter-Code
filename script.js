let storiesCreated;
$("button").click(function()  {
    let name = $(".name-iput").val();
    let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let time = $(".number-input").val();

    $(".story").append(" One day my friend " + name + " and I decided to take a trip to the beach ");
    $(".story").append (", so we packed our bags and took the " + transport + " over. " );
     $(".story").append (" It was a " + adjective + " day at the beach! ");
     $(".story").append(" We ended up staying for " + time + "  hours! ");

});