import {
  agregarNuevoPasaporte,
  eliminarPasaporte,
  listarPasaportesAsync,
} from 'app/core/redux/acciones/pasaporte/PasaporteAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/pasaporte/EstadoGeneral';
import { GestionPasaportes } from '../containers/GestionPasaportes';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.pasaportes;
}; 

export const ProveedorGestionPasaportes = connect(mapStateToProps, {
  listarPasaportes: listarPasaportesAsync,
  agregarNuevoPasaporte,
  eliminarPasaporte,
})(GestionPasaportes);
