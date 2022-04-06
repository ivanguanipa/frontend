import { EstadoPasaporte } from 'app/core/redux/modelo/pasaporte/EstadoPasaporte';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { agregarNuevoPasaporte, eliminarPasaporte, mostrarPasaporte, listarPasaportes } from 'app/core/redux/acciones/pasaporte/PasaporteAcciones';
import reductorPasaportes from './pasaporteReductor';

describe('Reductor pasaportes', () => {
  it('debería agregar pasaportes', () => {
    // Arrange
    //definicion estado inicial
    const estadoInicial: EstadoPasaporte = {
      cantidadTotalPasaporte: 2,
      pasaportes: [],
    };
    //definicion modelo
    const nuevoPasaporte: Pasaporte = {
      fullname: 'lorem',
      address: 'ipsun',
      birthdate: '2021-01-01',
      document_id: 12345,
      application_date: '2021-01-01',
    };

    //definicion estado inicial
    const estadoEsperado: EstadoPasaporte = {
      ...estadoInicial,
      pasaportes: [nuevoPasaporte],
    };

    // Act
    const nuevoEstado = reductorPasaportes(
      estadoInicial,
      agregarNuevoPasaporte(nuevoPasaporte)
    );
    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería eliminar pasaportes', () => {
    // Arrange
    //definicion estado inicial
    //definicion modelo
    const pasaporte: Pasaporte = {
      fullname: 'lorem',
      address: 'ipsun',
      birthdate: '2021-01-01',
      document_id: 12345,
      application_date: '2021-01-01',
    };
    const estadoInicial: EstadoPasaporte = {
      cantidadTotalPasaporte: 2,
      pasaportes: [pasaporte],
    };

    //definicion estado inicial
    const estadoEsperado: EstadoPasaporte = {
      ...estadoInicial,
      pasaportes: [],
    };

    // Act
    const nuevoEstado = reductorPasaportes(
      estadoInicial,
      eliminarPasaporte(pasaporte)
    );
    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
  it('debería mostrar pasaportes', () => {
    // Arrange
    //definicion estado inicial
    //definicion modelo
    const pasaporte: Pasaporte = {
      fullname: 'lorem',
      address: 'ipsun',
      birthdate: '2021-01-01',
      document_id: 12345,
      application_date: '2021-01-01',
    };
    const estadoInicial: EstadoPasaporte = {
      cantidadTotalPasaporte: 2,
      pasaportes: [],
      pasaporte: pasaporte,
    };

    //definicion estado inicial
    const estadoEsperado: EstadoPasaporte = {
      ...estadoInicial,
      pasaportes: [],
      pasaporte: pasaporte,
    };

    // Act
    const nuevoEstado = reductorPasaportes(
      estadoInicial,
      mostrarPasaporte(pasaporte)
    );
    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
  it('debería listar pasaportes', () => {
    // Arrange
    //definicion estado inicial
    //definicion modelo
    const pasaportes: Pasaporte[] = [{
      fullname: 'lorem',
      address: 'ipsun',
      birthdate: '2021-01-01',
      document_id: 12345,
      application_date: '2021-01-01',
    }];
    const estadoInicial: EstadoPasaporte = {
      cantidadTotalPasaporte: 1,
      pasaportes:pasaportes,
    };

    //definicion estado inicial
    const estadoEsperado: EstadoPasaporte = {
      ...estadoInicial,
      pasaportes: pasaportes,
      cantidadTotalPasaporte: 1,
    };

    // Act
    const nuevoEstado = reductorPasaportes(
      estadoInicial,
      listarPasaportes(pasaportes,1)
    );
    // Assert
    expect(nuevoEstado).toStrictEqual(estadoInicial);
  });  
});
