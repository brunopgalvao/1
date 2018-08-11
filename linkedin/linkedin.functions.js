const linkedin = document.querySelector('.linkedin');
linkedinURL = encodeURI("https://www.linkedin.com/in/brunopgalvao");
linkedin.innerHTML = "<div class='connect'><button><a href=" + linkedinURL + ">Connect</a></button></div>";

$(document).ready(function(){
    $(".linkedin").click(function(){
        $(".linkedin").animate({opacity: '0.6'});
    });
});
