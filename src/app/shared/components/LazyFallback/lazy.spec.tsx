import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import {LazyFallback} from './index'

describe('Lazy Page Test', () => {
    let componentWrapper: ShallowWrapper;
    afterEach(() => {
            componentWrapper.unmount();
        });

    it('should match snapshot', () => {

        componentWrapper = shallow(
            <LazyFallback />
        );
        expect(componentWrapper).toMatchSnapshot();
      });

})