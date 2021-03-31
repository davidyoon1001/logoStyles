function toggleSizeText(){
    var text = document.getElementById('expand-size');
    if (text.innerHTML == "+"){
        text.innerHTML = "-";
    }else{
        text.innerHTML = "+";
    }
};
function toggleColorText(){
    var text = document.getElementById('expand-color');
    if (text.innerHTML == "+"){
        text.innerHTML = "-";
    }else{
        text.innerHTML = "+";
    }
};
function toggleBrandText(){
    var text = document.getElementById('expand-brand');
    if (text.innerHTML == "+"){
        text.innerHTML = "-";
    }else{
        text.innerHTML = "+";
    }
};
function togglePriceText(){
    var text = document.getElementById('expand-price');
    if (text.innerHTML == "+"){
        text.innerHTML = "-";
    }else{
        text.innerHTML = "+";
    }
};
$(document).ready(function(){
    $('.searchField').focus(function(){
        $('.search-div').css('border-color','gray');
    });
    $('.size-category').click(function(){ 
        $('.size-types').toggleClass('show-types');
    });
    $('.color-category').click(function(){
        $('.color-types').toggleClass('show-types');
    });
    $('.brand-category').click(function(){
        $('.brand-types').toggleClass('show-types');
    });
    $('.price-category').click(function(){
        $('.price-types').toggleClass('show-types');
    });
    
});

