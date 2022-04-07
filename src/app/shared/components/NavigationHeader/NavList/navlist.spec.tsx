import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import {NavList} from './index'

describe('NavList Page Test', () => {
    let componentWrapper: ShallowWrapper;
    afterEach(() => {
            componentWrapper.unmount();
        });

    it('should match snapshot', () => {

        componentWrapper = shallow(
            <NavList items={[
                { label: 'Home', url: '/home' },
                { label: 'Pasaportes', url: '/pasaportes' },
              ]}/>
        );
        expect(componentWrapper).toMatchSnapshot();
      });


})