$(document).ready(function(){
    var html_str = "";
    for(var i = 0; i < 8; i++){
        html_str += '<div class="hamster_div">' +
                        '<img class="hamster_photo" src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=e9258132e328b68f818d0ddf3b34f46d" alt="hamster_img" height= 180>' +
                    '</div>';
    }
    $("#main").html(html_str);
});

$(document).on("click", ".hamster_div", function(){
    $(this).hide("fast");
});
$(document).on("click", "#revive_hamster", function(){
    $(".hamster_div").show();
});
