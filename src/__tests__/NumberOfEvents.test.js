import React from 'react';
import {shallow} from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', ()=>{
    let NumberOfEventsWrapper;
    beforeAll(() =>{
       
         NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render textbox element', ()=>{
       
        expect(NumberOfEventsWrapper.find('.events_input')).toHaveLength(1);
    })

    test ('change state when text input changes', ()=>{

        const eventObject = {target:{value:32}};
        NumberOfEventsWrapper.find('.events_input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberofevents')).toBe(32);
    });

})