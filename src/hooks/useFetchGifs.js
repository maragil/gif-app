import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( eachCategory ) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImgs = async() => {
        const newImgs = await getGifs( eachCategory );
        setImages(newImgs);
        setIsLoading(false);
    }

        useEffect( () => {
            getImgs();
        }, [])


    return {
        images,
        isLoading,

    }
}

