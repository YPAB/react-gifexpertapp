import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GitExpertApp from '../GifExpertApp';

describe('Pruebas en el componente <GitExpertApp/>',() => {

    

    test('Debe crear una copia de GitExpertApp', () => {

        const wrapper = shallow (<GitExpertApp/>);

        expect(wrapper).toMatchSnapshot();


    });


    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['Homero','Los Simpson'];
        const wrapper = shallow (<GitExpertApp defaultCategories={categories }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);


    });

})