import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormCrearPasaporte } from '.';
import { setTextEvent } from 'app/shared/utils/test';

describe('FormCrearPasaporte test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormCrearPasaporte> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      formTitle: 'Form test',
      onSubmit: stub(),
    };
    componentWrapper = render(<FormCrearPasaporte {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('should fail on submit all fields missing', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(5);
    expect(spans[0].textContent).toBe('El campo nombre y apellido es requerido.');
    expect(spans[1].textContent).toBe('El campo dirección es requerido.');
    expect(spans[2].textContent).toBe('El campo fecha de nacimiento es requerido.');
    expect(spans[3].textContent).toBe('El campo cédula es requerido.');
    expect(spans[4].textContent).toBe('El campo fecha de solicitud es requerido.');
  });

  it('should fail on submit four fields missing', async () => {
    const elem = componentWrapper.container;
    const fullname = elem.querySelector('input[name="fullname"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      fullname && fireEvent.change(fullname, setTextEvent('fullname', 'Lorem'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(4);
    expect(spans[0].textContent).toBe('El campo dirección es requerido.');
    expect(spans[1].textContent).toBe('El campo fecha de nacimiento es requerido.');
    expect(spans[2].textContent).toBe('El campo cédula es requerido.');
    expect(spans[3].textContent).toBe('El campo fecha de solicitud es requerido.');
  });

  it('should fail on submit three fields missing', async () => {
    const elem = componentWrapper.container;
    const fullname = elem.querySelector('input[name="fullname"]');
    const address = elem.querySelector('input[name="address"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      fullname && fireEvent.change(fullname, setTextEvent('fullname', 'Lorem'));
      address && fireEvent.change(address, setTextEvent('address', 'Ipsun'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(3);
    expect(spans[0].textContent).toBe('El campo fecha de nacimiento es requerido.');
    expect(spans[1].textContent).toBe('El campo cédula es requerido.');
    expect(spans[2].textContent).toBe('El campo fecha de solicitud es requerido.');
  });
  
  it('should fail on submit two fields missing', async () => {
    const elem = componentWrapper.container;
    const fullname = elem.querySelector('input[name="fullname"]');
    const address = elem.querySelector('input[name="address"]');
    const birthdate = elem.querySelector('input[name="birthdate"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      fullname && fireEvent.change(fullname, setTextEvent('fullname', 'Lorem'));
      address && fireEvent.change(address, setTextEvent('address', 'Ipsun'));
      birthdate && fireEvent.change(birthdate, setTextEvent('birthdate', '2021-01-01'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(2);
    expect(spans[0].textContent).toBe('El campo cédula es requerido.');
    expect(spans[1].textContent).toBe('El campo fecha de solicitud es requerido.');
  });
  
  it('should fail on submit one fields missing', async () => {
    const elem = componentWrapper.container;
    const fullname = elem.querySelector('input[name="fullname"]');
    const address = elem.querySelector('input[name="address"]');
    const birthdate = elem.querySelector('input[name="birthdate"]');
    const documentId = elem.querySelector('input[name="documentId"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      fullname && fireEvent.change(fullname, setTextEvent('fullname', 'Lorem'));
      address && fireEvent.change(address, setTextEvent('address', 'Ipsun'));
      birthdate && fireEvent.change(birthdate, setTextEvent('birthdate', '2021-01-01'));
      documentId && fireEvent.change(documentId, setTextEvent('documentId', '12345'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('El campo fecha de solicitud es requerido.');
  });

  it('should submit', async () => {
    const elem = componentWrapper.container;

    const fullname = elem.querySelector('input[name="fullname"]');
    const address = elem.querySelector('input[name="address"]');
    const birthdate = elem.querySelector('input[name="birthdate"]');
    const documentId = elem.querySelector('input[name="documentId"]');
    const applicationDate = elem.querySelector('input[name="applicationDate"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      fullname && fireEvent.change(fullname, setTextEvent('fullname', 'Lorem'));
    });
    await wait(() => {
      address && fireEvent.change(address, setTextEvent('address', 'Ipsum'));
    });
    await wait(() => {
      birthdate && fireEvent.change(birthdate, setTextEvent('birthdate', '2021-01-01'));
    });
    await wait(() => {
      documentId && fireEvent.change(documentId, setTextEvent('documentId', '12345'));
    });
    await wait(() => {
      applicationDate && fireEvent.change(applicationDate, setTextEvent('applicationDate', '2021-01-01'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[0];
    expect(formSubmitted.fullname).toBe('Lorem');
    expect(formSubmitted.address).toBe('Ipsum');
    expect(formSubmitted.birthdate).toBe('2021-01-01');
    expect(formSubmitted.documentId).toBe(12345);
    expect(formSubmitted.applicationDate).toBe('2021-01-01');


  });
});
