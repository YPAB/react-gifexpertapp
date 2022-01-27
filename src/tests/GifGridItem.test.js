import React from "react";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGridItem } from "../component/GifGridItem";

describe ('Pruebas en GigGridItem',() => {

    const id = 2;
    const title = 'Homero';
    const url = 'https://media0.giphy.com/media/Zk9mW5OmXTz9e/giphy.gif?cid=3271b137w2s82xs8dgbbvuyi6y9qizhmmp3vs5cx7vpl3jm2&rid=giphy.gif&ct=g'

    const wrapper = shallow(<GifGridItem id= {id} title={title} url={url}/>)

    test ('debe devolver el objeto GifGridItem',()=> {
        

        expect(wrapper).toMatchSnapshot();
    });

    test ('debe de terner un parrafo con el titulo', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );

    });


    test('debe de tener una imagen igual al url y alt de los props',() => {
        
        const img  = wrapper.find('img');

        // img.props => tenemos acceso a un objeto de las propiedades que tiene la imagen
        // img.prop('src') => se puede acceder a un atributo.
        
        expect( img.prop('src') ).toBe(url);
        expect ( img.prop('alt') ).toBe(title);
    });

    test('debe de tener animate__bounce',() => {
        const div = wrapper.find('div');

        expect( div.prop('className') ).toContain('animate__bounce');


    });



});