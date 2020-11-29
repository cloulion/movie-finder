const segundo = () => {
    setTimeout(() => {
        console.log('Llamada a segundo')
    }, 1500)
}

const primero = () => {
    console.log('Inicio de primero');
    segundo();
    console.log('Fin de primero')
}

primero();