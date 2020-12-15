import {loadFeature, defineFeature} from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';




const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");


defineFeature(feature, test =>{

    
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('user has not selected to show the details', () => {
            AppWrapper = mount(<App />);

        });

        when('the user is able to see a listed event', () => {

    AppWrapper.update();
        });

        then('the details are all hidden.', () => {
            
            expect(AppWrapper.find('.eventDetails')).toHaveLength(0);


        });
    });

   // Feature file has a scenario titled "User can expand an event to see its details", but no match found in step definitions. Try adding the following code:

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('the user wants to see the details of an event', () => {
            AppWrapper = mount(<App />);
        });

        when('the user clicks on the event details', () => {
            AppWrapper.update();
            AppWrapper.find('.event .detailsButton').at(0).simulate('click');

        });

        then('the user will see the details of the event', () => {
            expect(AppWrapper.find('.event .eventDetails')).toHaveLength(1);
        });
    });

   // Feature file has a scenario titled "User can collapse an event to hide its details", but no match found in step definitions. Try adding the following code:

    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the user can see the events', () => {
            AppWrapper = mount(<App />);
        });

        and('the user can read the event details', () => {
            AppWrapper.update();
            AppWrapper.find('.event .detailsButton').at(0).simulate('click');
            expect(AppWrapper.find('.event .eventDetails')).toHaveLength(1);

        });

        when('the user clicks event', () => {
            AppWrapper.find('.event .detailsButton').at(0).simulate('click');

        });

        then('the details are hidden from the user', () => {
            expect(AppWrapper.find('.event .eventDetails')).toHaveLength(0);
        });
    });

    
})