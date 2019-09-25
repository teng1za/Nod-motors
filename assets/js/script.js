let burger = document.getElementById('book');
console.log(burger);
let menu = document.getElementById('bigmenu')
console.log(menu);
burger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('open')
})