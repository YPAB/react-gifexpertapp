import React from "react";
import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    // const [images,setImages] = useState ([]);

    // es para que se renderice una sola vez (Solo se ejecuta cuando el componente es iniciado por primera vez)
   /*  useEffect(() => {
        getGifs(category)
        .then(setImages);
    }, [category])
*/
    //getGifs();

    const {data:images,loading} = useFetchGifs(category);

    return (
        <>

            <h3>{category}</h3>

            <div className='card-grid'>
                {loading && <p>Cargando ...</p>}

                
                    {
                        images.map (img => (

                            <GifGridItem 
                            key={img.id}
                            {...img}/>

                            
                        ))
                    }
                
            </div>
        </>
    )

}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}