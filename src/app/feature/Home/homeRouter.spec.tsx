import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import {homeRouter as HomeRouter} from './HomeRouter';

describe('Router Page Test', () => {
    let componentWrapper: ShallowWrapper;
    afterEach(() => {
            componentWrapper.unmount();
        });

    it('should match snapshot', () => {

        componentWrapper = shallow(
          <HomeRouter/>
        );
        expect(componentWrapper).toMatchSnapshot();
      });

})