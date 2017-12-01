$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.main-nav ul').toggleClass('toggle-menu');
        console.log('clicked');
    });
});