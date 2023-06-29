import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ eachCategory }) => {

    const { images, isLoading } = useFetchGifs( eachCategory );

    return (

        <>

            <h3>{ eachCategory }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">

                {
                    images.map(( eachImg ) => (
                        <GifCard
                            key={eachImg.id}
                            { ...eachImg }
                        />
                    ))
                }

            </div>

        </>
    )
}