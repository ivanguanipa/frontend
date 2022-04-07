import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { BtnMostrarPasaporte } from 'app/feature/Pasaporte/components/BtnMostrarPasaporte';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Btn Mostrar Pasaportes Test', () => {
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
      <BtnMostrarPasaporte
      pasaporte={data}
      />
    );
    expect(componentWrapper).toMatchSnapshot();
  });

  it('test click mostrar pasaporte',()=>{


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
        <BtnMostrarPasaporte
        pasaporte={data}
        />     
        );

        const button = componentWrapper.find('.showPassport');
        button.simulate('click',{onclick:mockHistoryPush});
        expect(mockHistoryPush).toHaveBeenCalled();

  })
});

export {};
