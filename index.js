$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    if(window.innerWidth<380){
        $('h1').addClass('pt-5')
        $('.btn').addClass('btn-sm m-1');
        $('.btn').removeClass('btn-block');
    }
})