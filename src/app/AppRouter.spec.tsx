import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import {appRouter as AppRouter} from './AppRouter'

describe('App router Test', () => {
    let componentWrapper: ShallowWrapper;
    afterEach(() => {
            componentWrapper.unmount();
        });

    it('should match snapshot', () => {

        componentWrapper = shallow(
          <AppRouter/>
        );
        expect(componentWrapper).toMatchSnapshot();
      });
})