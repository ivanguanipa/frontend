import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { ListaPasaportes } from 'app/feature/Pasaporte/components/ListarPasaportes';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';


describe('ListarPasaportes Test', () => {
  let componentWrapper: ShallowWrapper;

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('should match snapshot', () => {
    const pasaportes: Pasaporte[] = [{
      fullname: 'lorem',
      address: 'ipsun',
      birthdate: '2021-01-01',
      document_id: 12345,
      application_date: '2021-01-01',
    }];
    
    componentWrapper = shallow(
      <ListaPasaportes
        pasaportes={pasaportes}
        onClickEliminarPasaporte={() => {}}
      />
    );
    expect(componentWrapper).toMatchSnapshot();
  });

  it('debe accionar boton eliminar',()=>{
    const pasaportes: Pasaporte[] = [{
      fullname: 'lorem',
      address: 'ipsun',
      birthdate: '2021-01-01',
      document_id: 12345,
      application_date: '2021-01-01',
    }];
    const mockEliminar = jest.fn();
    componentWrapper = shallow(
      <ListaPasaportes
      pasaportes={pasaportes}
      onClickEliminarPasaporte={mockEliminar}
      />
    );
    
    const buttons = componentWrapper.find('BtnEliminarPasaporte');
    console.log(buttons)
    buttons.at(0).simulate('click');
    expect(mockEliminar.mock.calls.length).toEqual(1);
  })

});

export {};
