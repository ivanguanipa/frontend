import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import {Layout} from './index'

describe('Router Page Test', () => {
    let componentWrapper: ShallowWrapper;
    afterEach(() => {
            componentWrapper.unmount();
        });

    it('should match snapshot', () => {

        componentWrapper = shallow(
            <Layout title="Inicio" description="Página inicial">
            <h1>Página de inicio</h1>
          </Layout>
        );
        expect(componentWrapper).toMatchSnapshot();
      });

})