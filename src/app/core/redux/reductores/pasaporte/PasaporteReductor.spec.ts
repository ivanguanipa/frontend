import { EstadoPasaporte } from 'app/core/redux/modelo/pasaporte/EstadoPasaporte';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { agregarNuevoPasaporte } from 'app/core/redux/acciones/pasaporte/PasaporteAcciones';
import reductorPasaportes from './pasaporteReductor';

describe('Reductor pasaportes', () => {
  it('debería agregar pasaportes', () => {
    // Arrange
    const estadoInicial: EstadoPasaporte = {
      cantidadTotalPasaporte: 2,
      pasaportes: [],
    };
    const nuevoPasaporte: Pasaporte = {
      fullname: 'lorem',
      address: 'ipsun',
      birthdate: '2021-01-01',
      document_id: 12345,
      application_date: '2021-01-01',
    };
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
});
