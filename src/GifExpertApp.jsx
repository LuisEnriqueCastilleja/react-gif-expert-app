import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // const onAddCategory = () => {
    //     //Para actualizar el estado y crearme un nuevo arreglo
    //     //Saco copia a categorias y añado el nuevo elemento
    //     setCategories((c) => [...categories, 'Demon Slayer']);
    // }

    const onAddCategory = (newCategory) => {
        //Validar que no ponga 2 nombres iguales
        //Validar lower case
        if (categories.includes(newCategory)) return;
        setCategories((c) => [, newCategory]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            { /*
            Una forma de hacerlo
            <AddCategory setCategories={setCategories} /> */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {categories.map(category =>
                // <div key={category}>
                //     (<li >{category}</li>)
                // </div>
                <GifGrid key={category}
                    category={category} />
            )
            }
        </>
    )
}
