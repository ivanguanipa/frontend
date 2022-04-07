import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import {setTextEvent} from './test'

describe('GlobalErrorBoundary Test', () => {

    it('should create object', () => {

        const test = setTextEvent('a','s')
        console.log(test.persist())
        expect(test.persist()).toBe(undefined);
      });

    
})