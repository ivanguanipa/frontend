import { Pasaporte } from 'app/feature/Pasaporte/models/Pasaporte';

export interface EstadoPasaporte {
  pasaportes: Pasaporte[];
  pasaporte?: Pasaporte;
  cantidadTotalPasaporte: number;
}
