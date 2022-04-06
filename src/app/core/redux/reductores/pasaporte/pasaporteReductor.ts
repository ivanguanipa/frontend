import {
  AGREGAR_PASAPORTE,
  ELIMINAR_PASAPORTE,
  LISTAR_PASAPORTES,
  MOSTRAR_PASAPORTE,
  TiposAccionesPasaporte,
} from '../../acciones/pasaporte/PasaporteTiposAcciones';
import { EstadoPasaporte } from '../../modelo/pasaporte/EstadoPasaporte';
import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';

const initialState: EstadoPasaporte = {
  pasaportes: Array<Pasaporte>(),
  pasaporte: undefined,
  cantidadTotalPasaporte: 0,
};

export default function (
  state = initialState,
  action: TiposAccionesPasaporte
): EstadoPasaporte {
  switch (action.type) {
    case MOSTRAR_PASAPORTE: {
      const pasaporte = action.payload;
      return {
        ...state,
        pasaporte,
      };
    }
    case LISTAR_PASAPORTES: {
      const pasaportes = action.payload;
      return {
        ...state,
        pasaportes,
        cantidadTotalPasaporte: action.cantidadTotalPasaporte,
      };
    }
    case AGREGAR_PASAPORTE: {
      const pasaporte = action.payload;
      return {
        ...state,
        pasaportes: [...state.pasaportes, pasaporte],
      };
    }

    case ELIMINAR_PASAPORTE: {
      const pasaporte = action.payload;
      return {
        ...state,
        pasaportes: [
          ...state.pasaportes.filter((p) => p.id !== pasaporte.id),
        ],
      };
    }

    default:
      return state;
  }
}
