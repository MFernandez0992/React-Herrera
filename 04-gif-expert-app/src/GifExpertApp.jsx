import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ ])
    
    // const onAddCategory = onNewCategory => setCategories( [ NewCategory, ...categories ] )
    
    const API_KEY = 'qytZzhOLQrBx3dOtzK4WDYAf4IXH0lIp';
  
    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories = { setCategories } />

            {/* Listado de Gifs */}
            <button onClick={ `` }>Agregar</button>
            <ol>
                { categories.map( categorie => <li key={ categorie }>{ categorie }</li>) }
            </ol>
                {/* Gif Item */}

            
        </>
    )
}

export default GifExpertApp