import React, { useState } from 'react';
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';

const GitExpertApp = () => {

    //const categories = ['Deporte','Arte','Musica'];
    const [categories,setCategories] = useState(['Animals'])

    const handleAdd = () => {
        //setCategories([... categories,'Animales' ])

        //Otra forma seria

        //setCategories(cats => [... categories,'Animales' ]);
    }


    return (
        <>
            <h2 className='animate__wobble'>Aplicación Gif - Udemy</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
{/*             <button onClick= {handleAdd}>Agregar</button> */}

            <ol>
            
                {
                    categories.map (category => 
                        
                        <GifGrid 
                        key= {category}
                        category={category}/>
                    )

                }

            </ol>
        </>
    );


};

export default GitExpertApp;