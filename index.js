$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    if(window.innerWidth<301){
        $('h1').addClass('h5')
        $('.btn').addClass('btn-sm m-1');
        $('.btn').removeClass('btn-block');
    }
})