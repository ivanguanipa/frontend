import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { BtnEliminarPasaporte } from 'app/feature/Pasaporte/components/EliminarPasaporte';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { Button } from 'app/shared/components/Button';

describe('Btn Eliminar Pasaportes Test', () => {
  let componentWrapper: ShallowWrapper;

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('should match snapshot', () => {
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

    componentWrapper = shallow(
      <BtnEliminarPasaporte
      pasaporte={data}
        onEliminar={() => {}}
      />
    );
    expect(componentWrapper).toMatchSnapshot();
  });

  it('test eliminar pasaporte',()=>{
    const mockEliminar = jest.fn();
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

    componentWrapper = shallow(
        <BtnEliminarPasaporte
      pasaporte={data}
        onEliminar={()=>mockEliminar(1)}
      />     
      );

    const buttons = componentWrapper.find('.deletePassport');

   // spyOn(componentWrapper.props(),'mockEliminar').and.returnValue(true);

    buttons.simulate('click');
    console.log('cantidad botones',buttons.length);
    expect(mockEliminar).toHaveBeenCalled();
  })
  it('test negar eliminar pasaporte',()=>{
    const mockEliminar = jest.fn();
    spyOn(window,'confirm').and.returnValue(false);
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

    componentWrapper = shallow(
        <BtnEliminarPasaporte
      pasaporte={data}
        onEliminar={()=>mockEliminar(1)}
      />     
      );

    const buttons = componentWrapper.find('.deletePassport');

   // spyOn(componentWrapper.props(),'mockEliminar').and.returnValue(true);

    buttons.simulate('click');
    console.log('cantidad botones',buttons.length);
    expect(mockEliminar).not.toHaveBeenCalled();
  })
 
});

export {};