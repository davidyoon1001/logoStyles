add_buttons = document.querySelectorAll(".bag-wrapper");
bags = document.querySelectorAll(".bag-init");
var bag_init = 0;
add_buttons.forEach((elem) => {
    elem.addEventListener("click", function () {
        bag_init += 1;
        console.log(bags);
        for (i = 0; i < bags.length; i++) {
            bags[i].innerHTML = bag_init;
        }
    })
})

function toggleTypeText() {
    var text = document.getElementById('expand-type');
    if (text.innerHTML == "+") {
        text.innerHTML = "-";
    } else {
        text.innerHTML = "+";
    }
};
function toggleStyleText() {
    var text = document.getElementById('expand-style');
    if (text.innerHTML == "+") {
        text.innerHTML = "-";
    } else {
        text.innerHTML = "+";
    }
};
function toggleColorText() {
    var text = document.getElementById('expand-color');
    if (text.innerHTML == "+") {
        text.innerHTML = "-";
    } else {
        text.innerHTML = "+";
    }
};
function toggleBrandText() {
    var text = document.getElementById('expand-brand');
    if (text.innerHTML == "+") {
        text.innerHTML = "-";
    } else {
        text.innerHTML = "+";
    }
};
function togglePriceText() {
    var text = document.getElementById('expand-price');
    if (text.innerHTML == "+") {
        text.innerHTML = "-";
    } else {
        text.innerHTML = "+";
    }
};
function toggleHelpText() {
    var text = document.getElementById('expand-help');
    if (text.innerHTML == "+") {
        text.innerHTML = "-";
    } else {
        text.innerHTML = "+";
    }
};
function toggleQuickLinksText() {
    var text = document.getElementById('expand-link');
    if (text.innerHTML == "+") {
        text.innerHTML = "-";
    } else {
        text.innerHTML = "+";
    }
};
function toggleExtrasText() {
    var text = document.getElementById('expand-extra');
    if (text.innerHTML == "+") {
        text.innerHTML = "-";
    } else {
        text.innerHTML = "+";
    }
};
document.getElementById('side-nav-open').addEventListener('click', openNav);
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    $('#sidenav-overlay').addClass('sidenav-overlay');
};
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('#sidenav-overlay').removeClass('sidenav-overlay');
};
$(document).ready(function () {
    // top nav bar ***************************************************
    $('.search-div').click(function () {
        $('.searchField').focus();
    });
    // responsive top nav search bar
    $('.search-icon').focusin(function () {
        $('.searchField').css("width", "100%").css("padding", "5px").css("border", "1px solid #dddddd");
    });
    $('.search-icon').focusout(function () {
        $('.searchField').css("width", "0").css("padding", "0").css("border", "0px solid white");
    });
    // filter ********************************************************
    $('.type-category').click(function () {
        $('.type-types').toggleClass('show-types');
    });
    $('.style-category').click(function () {
        $('.style-types').toggleClass('show-types');
    });
    $('.color-category').click(function () {
        $('.color-types').toggleClass('show-types');
    });
    $('.brand-category').click(function () {
        $('.brand-types').toggleClass('show-types');
    });
    $('.price-category').click(function () {
        $('.price-types').toggleClass('show-types');
    });
    $('.help-links-selector').click(function () {
        $('.help-links').toggleClass('show-types');
    });
    $('.quick-links-selector').click(function () {
        $('.quick-links').toggleClass('show-types');
    });
    $('.extra-links-selector').click(function () {
        $('.extra-links').toggleClass('show-types');
    });
    //  filter select
    $('.filter-types').click(function () {
        $(this).toggleClass('selected-type');
    });
    $('.filter').click(function () {
        if ($('.selected-type').length) {
            $('.reset-filters').addClass('reset-filters-active');
        } else {
            $('.reset-filters').removeClass('reset-filters-active');
        };
    });
    // filter reset
    $('.reset-filters').click(function () {
        $('.filter-types').removeClass('selected-type');
    });

    // responsive top nav search bar
    $('.search-icon')
});

