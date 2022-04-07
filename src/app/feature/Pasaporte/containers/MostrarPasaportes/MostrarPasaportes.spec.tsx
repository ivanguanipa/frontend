import * as React from 'react';
import { ShallowWrapper, shallow, render, mount } from 'enzyme';
import { MostrarPasaportes } from './index';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import Router from "react-router-dom";
import { createMemoryHistory } from 'history';
import {PasaporteRepositorio} from 'app/core/api/pasaportes.repositorio';
import { axiosIntance } from 'app/core/config/AxiosConfig';
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn().mockReturnValue({ id: 1}),
  })) 
  

describe('Mostrar Pasaporte Test', () => {
  let componentWrapper: ShallowWrapper;
  const pasaportes: Pasaporte = {
    fullname: 'lorem',
    address: 'ipsun',
    birthdate: '2021-01-01',
    document_id: 12345,
    application_date: '2021-01-01',
  };

   it('should match snapshot', done => {
    const mockCallback = jest.fn();
    const useEffectaa = jest.spyOn(React, "useEffect").mockImplementation(f => {
        f()
    });

    spyOn(axiosIntance, 'get').and.throwError('dsff')

    componentWrapper = shallow(
        <MostrarPasaportes 
        pasaporte={pasaportes} 
        mostrarPasaporte={mockCallback}
      />
      
    );
    expect(useEffectaa).toHaveBeenCalled();
    done()
  });
  
 
});

export {};
