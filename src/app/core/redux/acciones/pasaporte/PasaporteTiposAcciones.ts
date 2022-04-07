import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';

export const LISTAR_PASAPORTES = 'LISTAR_PASAPORTES';
export const AGREGAR_PASAPORTE = 'AGREGAR_PASAPORTE';
export const ELIMINAR_PASAPORTE = 'ELIMINAR_PASAPORTE';
export const MOSTRAR_PASAPORTE = 'MOSTRAR_PASAPORTE';
export const ESTADO_INICIAL = 'ESTADO_INICIAL';

interface AccionListarPasaportes {
  type: typeof LISTAR_PASAPORTES;
  payload: Pasaporte[];
  cantidadTotalPasaporte: number;
}

interface AccionEstadoIncial {
  type: typeof ESTADO_INICIAL;
}

interface AccionMostrarPasaportes {
  type: typeof MOSTRAR_PASAPORTE;
  payload: Pasaporte;
}

interface AccionAgregarPasaporte {
  type: typeof AGREGAR_PASAPORTE;
  payload: Pasaporte;
}

interface AccionEliminarPasaporte {
  type: typeof ELIMINAR_PASAPORTE;
  payload: Pasaporte;
}

export type TiposAccionesPasaporte =
  | AccionListarPasaportes
  | AccionMostrarPasaportes
  | AccionAgregarPasaporte
  | AccionEliminarPasaporte
  | AccionEstadoIncial;
