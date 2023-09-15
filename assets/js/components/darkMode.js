//const darkDOM = document.querySelector("darkMode")

function darkMode () {
    const btnDark = document.querySelector(".btn__dark")
    const btnProductAdd = document.querySelectorAll(".product__image")
    const body = document.querySelector('body')
    const productContentDOM = document.querySelectorAll(".product__content")
    const productPriceDOM = document.querySelectorAll(".product__price")
    const btnCartDOM = document.querySelectorAll('.product__btn')
    const productTitleDOM = document.querySelectorAll('.product__title')
    const productsTitleDOM = document.querySelectorAll('.products__title')
    const navConteinerDOM = document.querySelector('.nav')
    const articleDOM = document.querySelectorAll('article')
    const navLinkDOM = document.querySelectorAll('.nav__link')
    const footerDOM = document.querySelector('.footer')
    const showMenuDOM = document.querySelector('.nav__menu')
    const cartDOM = document.querySelector('.cart')
    const articleContentCartDOM = document.querySelectorAll(".article__title")
    const cartFooterDOM = document.querySelector(".cart__footer")
    




    btnDark.addEventListener('click', function() {

        cartFooterDOM.classList.toggle("footer__dark__mode")

        body.classList.toggle('dark__mode__body')

        cartDOM.classList.toggle('footer__dark__mode')

        navConteinerDOM.classList.toggle('dark__mode__nav')

        footerDOM.classList.toggle('footer__dark__mode')

        showMenuDOM.classList.toggle('footer__dark__mode')

        articleContentCartDOM.forEach(e => {
            e.classList.toggle('article__content__dark')
        })

        navLinkDOM.forEach(e => {
            e.classList.toggle("dark__mode__nav--link")
        })


        articleDOM.forEach(e => {
            e.classList.toggle('dark__mode')
        })

        productPriceDOM.forEach(e =>  { 
            e.classList.toggle('dark__mode__letras')
        })

        btnCartDOM.forEach( e => {
            e.classList.toggle('btn--dark')
        }
            )
        
        btnProductAdd.forEach(e => {
            e.classList.toggle('dark__mode__cart')
        })
 
        productContentDOM.forEach(e => {
            e.classList.toggle('dark__mode__cart')

        })
        productTitleDOM.forEach(e => {
            e.classList.toggle('dark__mode__letras')
        })    

        productsTitleDOM.forEach(e => {
            e.classList.toggle('dark__mode__letras')
        })

        
    })

    

 }

 export default darkMode