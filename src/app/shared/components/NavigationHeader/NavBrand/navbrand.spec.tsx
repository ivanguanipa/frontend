import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import {NavBrand} from './index'

describe('NavItem Page Test', () => {
    let componentWrapper: ShallowWrapper;
    afterEach(() => {
            componentWrapper.unmount();
        });

    it('should match snapshot', () => {

        componentWrapper = shallow(
            <NavBrand imgSrc='asd'/>
        );
        expect(componentWrapper).toMatchSnapshot();
      });
    it('should match snapshot', () => {

        componentWrapper = shallow(
            <NavBrand text='asd'/>
        );
        expect(componentWrapper).toMatchSnapshot();
      });

})