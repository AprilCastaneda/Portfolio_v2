$(document).ready(function (){
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

function appFunction() {
    var gamesSection = document.getElementById("gamesSection");
    var webSection = document.getElementById("webSection");
    var appSection = document.getElementById("appSection");

    gamesSection.style.display = "none";
    webSection.style.display = "none";
    appSection.style.display = "block";

    var gamesButton = document.getElementById("games");
    var webButton = document.getElementById("web");
    var appButton = document.getElementById("app");

    gamesButton.disabled = false;
    webButton.disabled = false;
    appButton.disabled = true;
}

function gamesFunction() {
    var gamesSection = document.getElementById("gamesSection");
    var webSection = document.getElementById("webSection");
    var appSection = document.getElementById("appSection");

    webSection.style.display = "none";
    appSection.style.display = "none";
    gamesSection.style.display = "block";

    var gamesButton = document.getElementById("games");
    var webButton = document.getElementById("web");
    var appButton = document.getElementById("app");

    gamesButton.disabled = true;
    webButton.disabled = false;
    appButton.disabled = false;
}

function webFunction() {
    var gamesSection = document.getElementById("gamesSection");
    var webSection = document.getElementById("webSection");
    var appSection = document.getElementById("appSection");

    appSection.style.display = "none";
    gamesSection.style.display = "none";
    webSection.style.display = "block";

    var gamesButton = document.getElementById("games");
    var webButton = document.getElementById("web");
    var appButton = document.getElementById("app");

    gamesButton.disabled = false;
    webButton.disabled = true;
    appButton.disabled = false;
}