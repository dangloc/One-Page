var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var mobileHeight = header.clientHeight;
// console.log(mobileMenu);

mobileMenu.onclick = function() {
    var isClose = header.clientHeight === mobileHeight
    if (isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;

    }
}

var isCloseMenus = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < isCloseMenus.length; i++) {
    var isCloseMenu = isCloseMenus[i];
    
    isCloseMenu.onclick = function (event) {
        var menuCheckSub = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        
        if(!menuCheckSub)
        {
            header.style.height = null;
        }
        else{
            event.preventDefault();
        }

    }
}