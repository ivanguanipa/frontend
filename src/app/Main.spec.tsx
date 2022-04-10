import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import MainPage from './Main'

describe('Main Page Test', () => {
    let componentWrapper: ShallowWrapper;
    afterEach(() => {
            componentWrapper.unmount();
        });

    it('should match snapshot', () => {

        componentWrapper = shallow(
          <MainPage/>
        );
        expect(componentWrapper).toMatchSnapshot();
      });
})