function loader () {
    window.addEventListener('load', function () {
        const loader = document.querySelector('.loader')
        loader.classList.add('loader--hidden')
    }) //load es un evento que le dice "ejecutate cuando todo finalice de cargar", entonces ahi le agrega esa clase al elemento html, haciendo que desaparezca porque eso hace esa clase en style.css 
}

export default loader