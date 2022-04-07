import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import {GlobalErrorBoundary} from './index'

describe('GlobalErrorBoundary Test', () => {

    it('should create object', () => {

        const obj = new GlobalErrorBoundary({ hasError: false });
        expect(typeof obj).toBe('object');
      });

    it('should crreturn undefinded', () => {

        const obj = new GlobalErrorBoundary({ hasError: false });
        expect(obj.render()).toBe(undefined);
      });
    it('should crreturn undefinded', () => {

        const obj = new GlobalErrorBoundary({ hasError: true });
        expect(obj.render()).toBe(undefined);
      });
})