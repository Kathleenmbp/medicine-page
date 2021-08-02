$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    if (window.innerWidth < 415) {
        $('h1').addClass('h4 mt-5 pt-3');
        $('.btn').addClass('my-1')
    }
})