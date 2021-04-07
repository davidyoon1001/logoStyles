function toggleTypeText(){
    var text = document.getElementById('expand-type');
    if (text.innerHTML == "+"){
        text.innerHTML = "-";
    }else{
        text.innerHTML = "+";
    }
};
function toggleStyleText(){
    var text = document.getElementById('expand-style');
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
function toggleHelpText(){
    var text = document.getElementById('expand-help');
    if (text.innerHTML == "+"){
        text.innerHTML = "-";
    }else{
        text.innerHTML = "+";
    }
};
function toggleQuickLinksText(){
    var text = document.getElementById('expand-link');
    if (text.innerHTML == "+"){
        text.innerHTML = "-";
    }else{
        text.innerHTML = "+";
    }
};
function toggleExtrasText(){
    var text = document.getElementById('expand-extra');
    if (text.innerHTML == "+"){
        text.innerHTML = "-";
    }else{
        text.innerHTML = "+";
    }
};
$(document).ready(function(){
    $('.search-div').click(function(){
        $('.searchField').focus();
    });
    $('.type-category').click(function(){ 
        $('.type-types').toggleClass('show-types');
    });
    $('.style-category').click(function(){
        $('.style-types').toggleClass('show-types');
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
    $('.help-links-selector').click(function(){
        $('.help-links').toggleClass('show-types');
    });
    $('.quick-links-selector').click(function(){
        $('.quick-links').toggleClass('show-types');
    });
    $('.extra-links-selector').click(function(){
        $('.extra-links').toggleClass('show-types');
    });
});

