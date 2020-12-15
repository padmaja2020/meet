import {loadFeature, defineFeature} from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';



const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");


defineFeature(feature, test =>{
   
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        let AppWrapper;
        given('app is loaded', () => {
            AppWrapper = mount(<NumberOfEvents/>);

        });

        when('the user has not specified number of events to be shown', () => {
            AppWrapper.update();

        });

        then(/^the user should see (\d+) events displayed$/, (arg0) => {
            AppWrapper.update();
            expect(AppWrapper.state('numberofevents')).toEqual(32);

        });
    });

//    Feature file has a scenario titled "User can change the number of events they want to see", but no match found in step definitions. Try adding the following code:

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('app is loaded', () => {
            AppWrapper = mount(<App />);

        });

        when('the user can specify the number of events to see', () => {
            AppWrapper.update();
            AppWrapper.find('.events_input').simulate('change', {target:{value:20}});

        });

        then('the user should see the number of events specified', () => {
            const EventWrapper = AppWrapper.find(NumberOfEvents);
            expect(EventWrapper.state('numberofevents')).toEqual(20);

        });
    });

})