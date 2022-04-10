import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import App from './App';

describe('App Page Test', () => {
    let componentWrapper: ShallowWrapper;
    afterEach(() => {
            componentWrapper.unmount();
        });

    it('should match snapshot', () => {

        componentWrapper = shallow(
          <App/>
        );
        expect(componentWrapper).toMatchSnapshot();
      });
})