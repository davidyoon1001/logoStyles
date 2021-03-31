$(document).ready(function(){
    $('.searchField').focus(function(){
        $('.search-div').css('border-color','gray');
    });
    $('.size-category').click(function(){
        $('.size-types').addClass('show-size');  
    });
    $('.color-category').click(function(){
        $('.color-types').addClass('show-color');  
    });
    $('.brand-category').click(function(){
        $('.brand-types').addClass('show-brand');  
    });
    $('.price-category').click(function(){
        $('.price-types').addClass('show-price');  
    });
    $('.price-category').click(function(){
        $('.price-types').addClass('show-price');  
    });
    
});

