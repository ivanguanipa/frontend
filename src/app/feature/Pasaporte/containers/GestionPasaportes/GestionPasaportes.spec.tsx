import * as React from 'react';
import { ShallowWrapper, shallow, render, mount } from 'enzyme';
import { GestionPasaportes } from 'app/feature/Pasaporte/containers/GestionPasaportes';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { useEffect } from 'react';


describe('Gestion Pasaporte Test', () => {
  let componentWrapper: ShallowWrapper;
  const pasaportes: Pasaporte[] = [{
    fullname: 'lorem',
    address: 'ipsun',
    birthdate: '2021-01-01',
    document_id: 12345,
    application_date: '2021-01-01',
  }];

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('should match snapshot', () => {
    componentWrapper = shallow(
        <GestionPasaportes 
        cantidadTotalPasaporte={1}
        pasaportes={pasaportes} 
        listarPasaportes={()=>{}} 
        agregarNuevoPasaporte={()=>{}} 
        eliminarPasaporte={()=>{}} 
      />
      
    );
    expect(componentWrapper).toMatchSnapshot();
  });
 
  it('deberia testear useeffect', () => {
    const mockListarPasaporte = jest.fn();
    const useEffectaa = jest.spyOn(React, "useEffect").mockImplementation(f => f());
     mount(
        <GestionPasaportes 
        cantidadTotalPasaporte={1}
        pasaportes={pasaportes} 
        listarPasaportes={mockListarPasaporte} 
        agregarNuevoPasaporte={()=>{}} 
        eliminarPasaporte={()=>{}} 
      />
      
    );
    expect(useEffectaa).toHaveBeenCalled();
  });
});

export {};
