import {
    mostrarPasaporteAsync,
} from 'app/core/redux/acciones/pasaporte/PasaporteAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/pasaporte/EstadoGeneral';
import { MostrarPasaportes } from '../containers/MostrarPasaportes';
import { connect } from 'react-redux';
const mapStateToProps = (state: EstadoGeneral) => {
  return state.pasaportes;
}; 

export const ProveedorMostrarPasaportes = connect(mapStateToProps, {
  mostrarPasaporte: mostrarPasaporteAsync})(MostrarPasaportes);
