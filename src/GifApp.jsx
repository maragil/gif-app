import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {

    const [ categories, setCategories ] = useState([ 'Dragon Ball' ]);

    const handleAddCategory = ( newCategory ) => {

        //Pasar a minúscula para comprobar si existe la categoría

        const cleanCategory = newCategory.toLowerCase();

        if( categories.includes(cleanCategory)) return;

        // categories.push(newCategory);
        // setCategories( eachCategory => [ ...eachCategory, 'One Piece']);
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
        <header className="header-gif">
            {/* Título */}
            <h1 className="hero">GifApp</h1>

            {/* Input */}
            <AddCategory

            onNewCategory={ handleAddCategory }
            />
        </header>

        <main >

            {/* Listado de Gifs */}
            {
                categories.map(( eachCategory ) => (
                    <GifGrid
                        key={ eachCategory }
                        eachCategory={ eachCategory }/>
                ))
            }

                {/* Gif Item */}
        </main>
        </>
    )
}