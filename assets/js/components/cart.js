function cart (db, printProducts) {
     let cart = JSON.parse(localStorage.getItem('carrito')) || []
    // Elementos del DOM
    const productsDOM = document.querySelector('.products__container')
    const notifyDOM = document.querySelector('.notify')
    const cartDOM = document.querySelector('.cart__body')
    const countDOM = document.querySelector('.cart__count--item')
    const totalDOM = document.querySelector('.cart__count--price')
    const checkoutDOM = document.querySelector('#chekout')

    // usar el localStorage
    /*Metodos de localStorage (
        setItem: agrega valor al localStorage por medio de un nombre/llave y el valor es la data/informacion
        getItem: solicitar esos datos que se almacenaron con setItem y volver a obtenerlos.
        removeItem: para eliminarlo del localStorage
        )*/
    //const ls = window.localStorage 
   // ls.setItem('carrito', JSON.stringify(cart))
    //cart = JSON.parse(ls.getItem('carrito')) || [] */
    // fUNCIONES




     function printCart() {
        
        let htmlCart = ''
         
        if (cart.length === 0) {
            htmlCart += ` 
                <div class="cat__empty">
                    <i class='bx bx-cart'></i>
                    <p class="cart__empry--text">No hay productos en el carrito</p>
                </div>
            ` 
            
            
            notifyDOM.classList.remove('show--notify')
        } else {
            for (const item of cart) {
                //quiero buscar el producto en la base de datos
                const product = db.find(p => p.id === item.id)
                htmlCart += `
                <article class="article">
                <div class="article__image">
                        <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="article__content">
                        <h3 class="article__title">${product.name}</h3>
                        <span class="article__price">$${product.price}</span>
                        <span class="product__stock">Disponibles: ${product.quantity}</span>
                        <div class="article__quantity">
                            <button type="button" class="article__quantity--btn article--minus" data-id="${item.id}"><i class='bx bx-minus' ></i>
                            </button>
                            <span class="article__quantity-text">${item.qty}</span>
                            <button type="button" class="article__quantity--btn article--plus" data-id="${item.id}"><i class='bx bx-plus'></i>
                            </button>
                         </div>
                        <button type="button" class="article__btn remove--from--cart" data-id="${item.id}">
                            <i class='bx bx-trash' ></i>
                        </button>
                </div>
             </article>
                `
            }
            notifyDOM.classList.add('show--notify')
        }
    
        cartDOM.innerHTML = htmlCart
        notifyDOM.innerHTML = ShowItemsCount()
        countDOM.innerHTML = ShowItemsCount()
        totalDOM.innerHTML = showTotal()

        //ls.setItem('carrito', JSON.stringify(carrito))//JSON.stringify convierte el carrito en algo que el BOM pueda entender y mostrarlo como string
       // JSON.parse(ls.getItem('carrito'))
        
        localStorage.setItem('carrito', JSON.stringify(cart))
     }

     //para agregar los productos al carrito
     function addToCart (id, qty = 1) {
             const itemFinded = cart.find(cartItem => cartItem.id === id);
            
                if (itemFinded) {
                    const totalQty = itemFinded.qty + qty;
                    if (checkStock(id, totalQty)) {
                        itemFinded.qty = totalQty;
                    } else {
                        window.alert('No hay suficiente stock');
                    }
                } else {
                    if (checkStock(id, qty)) {
                        cart.push({ id, qty });
                    } else {
                        window.alert('No hay suficiente stock');
                    }
                }
 
     printCart();
 }

     function checkStock (id, qty) {
        const stock = db.find(item => item.id == id)

            return (+stock.quantity >= qty && +stock.quantity >= 0)
        
     }

     

     function removeFromCart (id, qty = 1) {
        const itemFinded = cart.find(cart => cart.id == id)

        const result = itemFinded.qty - qty
        if (result > 0) {
            itemFinded.qty -= 1
        } else {
            cart = cart.filter(cart => cart.id !== id)// recontra ver: el profe dijo: filtro el cart, donde le digo si el cart.id es igual al id que te estoy pasando, agregalo al carrito. Para que agrega a todos menos este que estoy eliminando. 
        }
        printCart() 
     }
     


     function deleteFromCart (id) {
        cart = cart.filter(cart => cart.id !== id)
        printCart()
     }
     

     function ShowItemsCount () {
        let suma = 0
        for (const item of cart) {
            suma += item.qty
        }
        return suma
     }


     function showTotal () {
        let total = 0
        for (const item of cart) {
             const productFinded = db.find(db => db.id === item.id)
            total += item.qty * productFinded.price 
        }
        return total
     }
     
     //descontar el stock a medida que se compra
     function checkout() {
            for (const items of cart) {
                const productFinded = db.find(db => db.id === items.id)
                // se le descuenta a quantity del objeto,   cantidad de qty.


//intentar hacer que llegue a 0
               
                productFinded.quantity -= items.qty
  

        }     
        cart = []
        printCart()
        printProducts()
        window.alert('Gracias por su compra')
     }


    printCart() //para que se ejecute al iniciar la pagina, entonces arranca en 0




     // EVENTOS, que el DOM pueda escuchar
     productsDOM.addEventListener('click', function(e) {
        if (e.target.closest('.add--to--cart')) {
            const id = +e.target.closest('.add--to--cart').dataset.id // dataset: hay un atributo personalizado id y quiero que me lo traigas
            addToCart(id)
        }
     })


     // el + y el - del carrito
     cartDOM.addEventListener('click', function (e) {
        if (e.target.closest('.article--minus')) {
            const id = +e.target.closest('.article--minus').dataset.id
            removeFromCart(id)
        }

        if (e.target.closest('.article--plus')) {
            const id = +e.target.closest('.article--plus').dataset.id
           addToCart(id)
        }

        if (e.target.closest('.remove--from--cart')) {
            const id = +e.target.closest('.remove--from--cart').dataset.id
            deleteFromCart(id)
        }
     })


     checkoutDOM.addEventListener('click', function() {
        checkout()
     })




   
    
}

export default cart