//Preloading script

$(document).ready(function () {
    $('#preloader-markup').load("mdb-addons/preloader.html", function () {
        $('#mdb-preloader').fadeOut('slow');
    });
});