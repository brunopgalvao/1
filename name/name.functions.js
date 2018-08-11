const name = document.querySelector('.name');
name.innerHTML = "<h1>Bruno Galvao</h1>";

$(document).ready(function(){
    $(".name").click(function(){
        $(".name").animate({opacity: '0.2'});
        $(".name").animate({opacity: '1'});
        $(".name").animate({height: 'toggle'});
    });
});
