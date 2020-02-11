import React from 'react';
import withVariantStyle, {mergeStyles} from "../withVariantStyle";

import {shallow} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import TestButton from "./TestButton";

describe('mergeStyles', () => {
    test('injects variant styles into the component', () => {
        const generalStyles = {}
        const variantStyles = {button: {color: 'blue'}}

        const combinedStyles = mergeStyles(generalStyles, variantStyles)

        expect(combinedStyles).toEqual({button: {color: 'blue'}})
    })

    test('merges general styles and variant styles', () => {
        const generalStyles = {button: {backgroundColor: 'white'}}
        const variantStyles = {button: {color: 'blue'}}

        const combinedStyles = mergeStyles(generalStyles, variantStyles)

        expect(combinedStyles).toEqual(
            {button: {color: 'blue', backgroundColor: 'white'}})
    })
});

describe('withVariantStyle', () => {
    //TODO
    test('it returns the component with the injected styles', () => {
        // const generalStyles = {}
        // const variantStyles = {button: {color: 'blue'}}
        //
        // const TestButtonWithStyles =
        //     shallow(withVariantStyle(
        //         <TestButton />,
        //         generalStyles,
        //         variantStyles
        //     ))
        //
        // expect(TestButtonWithStyles.props.style
        //     .toEqual({button: {color: 'blue'}}))
    })
});