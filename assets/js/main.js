import loader from './components/loader.js'
import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import products from './components/products.js'
import getProducts from './helpers/getProducts.js'
import cart from './components/cart.js'
import darkMode from './components/darkMode.js'
/* oculatar loader*/
loader() // lo ejecutamos

// ejecutar show menu
showMenu()

// mostar carrito
showCart()
/* end elements UI */

/* productos */
const { db, printProducts } = products(await getProducts())// await le dice 'espera' esto va a hacer que espere a que esto regese la informacion, haciendo que javasCript siga trabajando normal si es que hay mas tareas para realizar. Poara desiasincronizar javascript digamos

/* Cart/carrito */
cart(db, printProducts)

//darkmode
darkMode()
