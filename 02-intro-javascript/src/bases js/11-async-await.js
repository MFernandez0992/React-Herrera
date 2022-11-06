/* Async Await */

/* El Await nos ayuda a que podamos trabajar todo el código como si fuera sincrono */

const getImagen = async() => {

    try {
        const APIKey = 'qytZzhOLQrBx3dOtzK4WDYAf4IXH0lIp';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIKey}`);
        const { data } = await respuesta.json();
    
    
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
}

getImagen();