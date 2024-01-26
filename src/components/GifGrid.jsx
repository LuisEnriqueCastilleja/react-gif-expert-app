// import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
    // //Nunca poner metodos en el functional component
    // //El useEffect es un hook para disparar  efectos secundarios
    // //Procesos cuando algo suceda, cuando la categoria cambie, lanzo un efect
    // //Lista de dependencias que son las condiciones por las cuales
    // //Voler a ejecutar el callback
    // useEffect(() => {
    //     getImages();
    //     //Si dejo las dependencias vacias quiere decir que el hook
    //     //Solo se disparara la primera vez que se dibuje el functional component
    // }, []
    // );

    //Custom hook
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) =>
                    (<GifItem key={image.id}
                        /*Esparcir las propiedades para no mandar
                        1 por */
                        {...image}
                    />)
                    )
                }
            </div>
        </>
    );
}
