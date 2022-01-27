import React from "react";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGrid } from "../component/GifGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";

//uso de mock para falsear data
jest.mock('../hooks/useFetchGifs')

describe ('Prueba con el componente <GifGrid/>>', () => {

    const category = 'Los Simpson';
    
    

    test('Debe crear una copia', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true

        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagens useFectGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa',

        },
        {
            id: '123',
            url: 'https://localhost/cualquier/foto.jpg',
            title: 'Foto',

        }
    
    ];

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false

        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect( wrapper ).toMatchSnapshot();

        // cuando el loading es FALSE se oculta el parrafo de Cargando...
        expect( wrapper.find('p').exists() ).toBe(false);

        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );


    });


})

