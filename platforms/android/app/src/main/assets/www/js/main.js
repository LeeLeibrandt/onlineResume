$(document).ready(function() 
{
    $('.menu-toggler').on('click', function() 
    {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() 
    {
        $('menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1000,
        once: true
    });

});

(function (){
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady(){
        document.getElementById("getlocation").addEventListener('click', getpostioninfo);
    };
    function getpostioninfo(){
        var options = {
            maximumAge: 3600000,
            timeout: 300,
            enableHighAccuracy: true
        };
        navigator.geolocation.watchPosition(onSuccess, onError, option);
        function onSuccess(position){
            alert('latitude :' + position.coords.lastitude+"\n"+
            "longitude :" + position.coords.longitude);
        }
        function onError(error){
            alert("Error "+error);
        }
    }
})
