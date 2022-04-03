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
      title: 'nuevo',
      slug: 'Juan Pablo Botero',
      body: 'posting the article accessing using constant',
      createdAt: '2020-03-03T03:20:27.795Z',
      updatedAt: '2020-03-03T03:20:27.795Z',
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
