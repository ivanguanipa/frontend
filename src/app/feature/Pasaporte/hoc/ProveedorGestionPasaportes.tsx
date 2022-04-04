import {
  listarPasaportesAsync,
  eliminarPasaportesAsync,
  agregarPasaportesAsync
} from 'app/core/redux/acciones/pasaporte/PasaporteAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/pasaporte/EstadoGeneral';
import { GestionPasaportes } from '../containers/GestionPasaportes';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.pasaportes;
}; 

export const ProveedorGestionPasaportes = connect(mapStateToProps, {
  listarPasaportes: listarPasaportesAsync,
  agregarNuevoPasaporte: agregarPasaportesAsync,
  eliminarPasaporte: eliminarPasaportesAsync,
})(GestionPasaportes);
