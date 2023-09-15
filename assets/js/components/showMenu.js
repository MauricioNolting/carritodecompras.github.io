 function showMenu () {
    const nav = document.querySelector('.nav')
    const menu = document.querySelector('.nav__menu')

    nav.addEventListener('click', function (event) {
        if (event.target.closest('.btn--menu')) { //target quiere decir el elemento objetivo, porque se le da click al hijo enrealidad(el icono) entonces pregunta si su padre tambien tiene esa clase, y yo quiero eso, lo del padre que se accede haciendole click al icono hijo.
            menu.classList.toggle('show--menu')
        }

        if (event.target.closest('.btn--close')) {
            menu.classList.remove('show--menu')
    
        }

        if (event.target.closest('.nav__link')) {
            menu.classList.remove('show--menu')
    
        }
    })
 }

 export default showMenu