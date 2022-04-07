import * as React from 'react';
import { ShallowWrapper, shallow, render } from 'enzyme';
import { ListaPasaportes } from 'app/feature/Pasaporte/components/ListarPasaportes';
import { BtnEliminarPasaporte } from 'app/feature/Pasaporte/components/EliminarPasaporte';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';


describe('PaginadorPasaportes Test', () => {
  let componentWrapper: ShallowWrapper;
  const pasaportes: Pasaporte[] = [{
    fullname: 'lorem',
    address: 'ipsun',
    birthdate: '2021-01-01',
    document_id: 12345,
    application_date: '2021-01-01',
  }];
  const mockEliminarPasaporte = jest.fn();


  it('should match snapshot', () => {
    componentWrapper = shallow(
        <ListaPasaportes 
      pasaportes={pasaportes}
        onClickEliminarPasaporte={mockEliminarPasaporte}
      />
      
    );
    expect(componentWrapper).toMatchSnapshot();
  });

  it('test click eliminar pasaporte',()=>{

    spyOn(window,'confirm').and.returnValue(true);
    const data: Pasaporte = {
        id: 1,
        fullname: "string",
        address: "string",
        birthdate: "string",
        document_id:1,
        application_date: "string",
        appointment_date: "string",
        amount: 1,
      };

      const component = shallow(
        <ListaPasaportes 
        pasaportes={pasaportes}
        onClickEliminarPasaporte={mockEliminarPasaporte}
      />);
      
      const object = component.find('BtnEliminarPasaporte').dive().shallow();
      const btn = object.find('button');
      btn.at(0).simulate('click');
      expect(mockEliminarPasaporte).toHaveBeenCalled();
     
  })

  
});

export {};
