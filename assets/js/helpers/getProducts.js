//https://ecommercebackend.fundamentos-29.repl.co/
async function getProducts() {
    /* hay dos formas :*/
    //#1
    /*return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => { console.log(err) })*/

    //#2
    try {
        const respuesta = await window.fetch('https://services-academlo-shopping.onrender.com/')//Las expresiones 'await' solo se permiten en las funciones asincronicas y en los niveles superiores de los modulos. Entonces como esto está dentro de una funcion y no en un nivel superior, hay que escribir 'async' antes de la funcion
    const data = await respuesta.json()
    return data

    } catch(error) {
        console.log(error)
    }
}

export default getProducts