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
    ).then((respuesta: any) =>{
      dispacth(
        listarPasaportes(respuesta.data, respuesta.data.length)
      )
    }
    );
  };
}
export function eliminarPasaportesAsync(pasaporte: Pasaporte) {
  return function (dispacth: any) {
    console.log("eliminarPasaportesAsync", pasaporte, pasaporte.id);
    PasaporteRepositorio.eliminarPasaporte(
      pasaporte.id
    ).then((respuesta: any) =>{
      dispacth(
        eliminarPasaporte(pasaporte)
      )
    }
    ).catch(e=>{
      alert('El registro que intenta eliminar no existe');
    });
  };
}
export function agregarPasaportesAsync(pasaporte: Pasaporte) {
  return function (dispacth: any) {
    console.log("agregarPasaportesAsync", pasaporte, pasaporte.id);
    PasaporteRepositorio.agregarPasaporte(
      pasaporte
    ).then((respuesta: any) =>{
      console.log('respuesta',respuesta);
      dispacth(
        agregarNuevoPasaporte(respuesta.data)
      )
    }
    ).catch(({error,request})=>{
      alert(`El hubo un problema al intentar agregar: ${JSON.parse(request.response).message}`);
    });
  };
}
