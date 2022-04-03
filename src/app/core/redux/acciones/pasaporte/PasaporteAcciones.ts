import {
  AGREGAR_PASAPORTE,
  ELIMINAR_PASAPORTE,
  LISTAR_PASAPORTES,
  TiposAccionesPasaporte,
} from './PasaporteTiposAcciones';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { PasaporteRepositorio } from 'app/core/api/pasaportes.repositorio';

export function listarPasaportes(
  pasaportes: Array<Pasaporte>,
  cantidadTotalPasaporte: number
): TiposAccionesPasaporte {
  return {
    type: LISTAR_PASAPORTES,
    payload: pasaportes,
    cantidadTotalPasaporte,
  };
}

export function agregarNuevoPasaporte(
  pasaporte: Pasaporte
): TiposAccionesPasaporte {
  return {
    type: AGREGAR_PASAPORTE,
    payload: pasaporte,
  };
}

export function eliminarPasaporte(pasaporte: Pasaporte): TiposAccionesPasaporte {
  return {
    type: ELIMINAR_PASAPORTE,
    payload: pasaporte,
  };
}

export function listarPasaportesAsync(numeroPagina: number) {
  return function (dispacth: any) {
    PasaporteRepositorio.consultarPorPagina(
      numeroPagina
    ).then((respuesta: any) =>
      dispacth(
        listarPasaportes(respuesta.data.articles, respuesta.data.articlesCount)
      )
    );
  };
}
