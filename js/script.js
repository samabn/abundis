//ICON MENU
let menu_icon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu_icon.onclick = () => {
    menu_icon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// SECCIONES SCROLL
let sections = document.querySelectorAll('section');
let nav_links = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let header = document.querySelector('header');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            nav_links.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);

    // REMOVER EL ICONO Y NAVBAR CUANDO SE DE CLICK EN NAVBAR LINKS
    menu_icon.classList.remove('bx-x');
    navbar.classList.remove('active');
}