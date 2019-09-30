// ------------burger menu----------
let burger = document.getElementById('bbactive');
let menu = document.getElementById('bigmenu')

burger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('open')
})

let burg = document.getElementById('bmenu1');
console.log(burg);
burg.addEventListener('click', function () {
    if (burger.classList.contains('active')) {
        menu.classList.add('open')
        burger.classList.remove('active')
    }
});

let bmenu = document.getElementById('bmenu2');
console.log(bmenu);
bmenu.addEventListener('click', function () {
    if (burger.classList.contains('active')) {
        menu.classList.add('open')
        burger.classList.remove('active')
    }
});

let burgmenu = document.getElementById('bmenu3');
console.log(burgmenu);
burgmenu.addEventListener('click', function () {
    if (burger.classList.contains('active')) {
        menu.classList.add('open')
        burger.classList.remove('active')
    }
});
let booker = document.getElementById('book1');

booker.addEventListener('click', function () {
    if (burger.classList.contains('active')) {
        menu.classList.add('open')
        burger.classList.remove('active')
    }
});
