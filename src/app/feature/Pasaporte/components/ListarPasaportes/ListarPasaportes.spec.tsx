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
    documentId: 12345,
    applicationDate: '2021-01-01',
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
        documentId:1,
        applicationDate: "string",
        appointmentDate: "string",
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
