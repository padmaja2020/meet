import React from 'react';
import {shallow} from 'enzyme';
import CitySearch from '../CitySearch';


describe ('<CitySearch /> Component', ()=>{

    test('render text input', () =>{
        const CitySearchWrapper = shallow(<CitySearch />);
        
        expect(CitySearchWrapper.find('.city')).toHaveLength(1);

    })
    test('renders a list of suggestions', () => {
        const CitySearchWrapper = shallow(<CitySearch />);
        expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
      });

})


