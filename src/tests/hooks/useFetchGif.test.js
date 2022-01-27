import React from "react";
import '@testing-library/jest-dom'
import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async() => {
        const category = 'Futurama';
        //const { data:images,loading } = useFetchGifs(category);
        const { result,waitForNextUpdate } = renderHook( () => useFetchGifs('Futurama'));
        // const { result,  } = renderHook( () => (
        //     useFetchGifs(category)
        //  ) );

        const { data,loading } = result.current;
        
        await waitForNextUpdate({ timeout: 2500 });

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    
        //console.log(data,loading);

    });

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        const { result,waitForNextUpdate } = renderHook( () => useFetchGifs('Futurama'));

        await waitForNextUpdate({ timeout: 2500 });
        const { data,loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe( false );


    });



})