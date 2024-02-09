const menuNav = document.querySelector(".nav-menu");
const buttonNav = document.querySelector('.nav-button');
const referenceOne = document.querySelector('#inicio');
const referenceTwo = document.querySelector('#sobre-mi');
const referenceTree = document.querySelector('#proyectos');
const referenceFour = document.querySelector('#contacto');
const elemntListOne = document.querySelector(".listelemetOne");
const elemntListTwoo = document.querySelector('.listelemetTwo')
const elemntListTree = document.querySelector('.listelemetTree')
const elemntListFour = document.querySelector('.listelemetFour')

let toogle = document.getElementById('toggle');
let body = document.querySelector('body')
let label = document.getElementById('label-toggle');
toogle.addEventListener('change', (event)=> {
    let checked = event.target.checked;
    body.classList.toggle('clear');
    if (checked == true) {
        label.innerHTML = '<i class="fa-solid fa-moon"></i>';        
    }else {
        label.innerHTML = '<i class="fa-solid fa-sun" style="color: #FFD43B; opacity: .8;"></i>'
    }

})



elemntListOne.addEventListener('click', ()=> {
    menuNav.classList.remove('menu-active')
});

elemntListTwoo.addEventListener('click', ()=> {
    menuNav.classList.remove('menu-active')
});
elemntListTree.addEventListener('click', ()=> {
    menuNav.classList.remove('menu-active')
});
elemntListFour.addEventListener('click', ()=> {
    menuNav.classList.remove('menu-active')
});

buttonNav.addEventListener('click', ()=> {
    menuNav.classList.toggle('menu-active')
});
