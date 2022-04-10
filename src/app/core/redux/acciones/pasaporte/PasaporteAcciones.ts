import {
  AGREGAR_PASAPORTE,
  ELIMINAR_PASAPORTE,
  LISTAR_PASAPORTES,
  MOSTRAR_PASAPORTE,
  ESTADO_INICIAL,
  TiposAccionesPasaporte,
} from './PasaporteTiposAcciones';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';
import { PasaporteRepositorio } from 'app/core/api/pasaportes.repositorio';

export function estadoInicial(): TiposAccionesPasaporte {
  return {
    type: ESTADO_INICIAL,
  };
}

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
export function mostrarPasaporte(
  pasaporte: Pasaporte,
): TiposAccionesPasaporte {
  return {
    type: MOSTRAR_PASAPORTE,
    payload: pasaporte,
  };
}

export function eliminarPasaporte(pasaporte: Pasaporte): TiposAccionesPasaporte {
  return {
    type: ELIMINAR_PASAPORTE,
    payload: pasaporte,
  };
}

export function eliminarPasaportesAsync(pasaporte: Pasaporte) {
  return function (dispacth: any) {
    PasaporteRepositorio.eliminarPasaporte(
      Number(pasaporte.id)
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
    PasaporteRepositorio.agregarPasaporte(
      pasaporte
    ).then((respuesta: any) =>{
      dispacth(
        agregarNuevoPasaporte(respuesta.data)
      )
    }
    ).catch(({error,request})=>{
      alert(`El hubo un problema al intentar agregar: ${JSON.parse(request.response).message}`);
    });
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
export function mostrarPasaporteAsync(id: string, callback:any) {
  return function (dispacth: any) {
    PasaporteRepositorio.mostrarPasaporte(
      id
    ).then((respuesta: any) =>{
      dispacth(
        mostrarPasaporte(respuesta.data[0])
      )
    }
    ).catch(({error,request})=>{
      callback();
    });
  };
}
