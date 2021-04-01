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
function pagination(){
    var currPage = document.getElementById('curr-page');
    var totalPage = document.getElementById('total-page');
    if(currPage.innerHTML == "1"){
        alert('fuck');
    };
};


$(document).ready(function(){
    $('.search-div').click(function(){
        $('.searchField').focus();
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
    $('.filter-types').click(function(){
        $(this).toggleClass('selected-type');
    });
    $('.filter').click(function(){
        if($('.selected-type').length){
            $('.reset-filters').addClass('reset-filters-active');
        }else{
            $('.reset-filters').removeClass('reset-filters-active');
        };
    });
    $('.reset-filters').click(function(){
        $('.filter-types').removeClass('selected-type');
    });
    
});

