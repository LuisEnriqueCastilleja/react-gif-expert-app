import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Un hook no es mas que una funcion que regresa algo
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    //Nunca poner metodos en el functional component
    //El useEffect es un hook para disparar  efectos secundarios
    //Procesos cuando algo suceda, cuando la categoria cambie, lanzo un efect
    //Lista de dependencias que son las condiciones por las cuales
    //Voler a ejecutar el callback
    useEffect(() => {
        getImages();
        //Si dejo las dependencias vacias quiere decir que el hook
        //Solo se disparara la primera vez que se dibuje el functional component
    }, []
    );

    return {
        // images: images,
        // isLoading: true
        images,
        isLoading
    }
}
