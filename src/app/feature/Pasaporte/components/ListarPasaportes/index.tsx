import * as PropTypes from 'prop-types';
import * as React from 'react';
import { BtnEliminarPasaporte } from '../EliminarPasaporte';
import { BtnMostrarPasaporte } from '../BtnMostrarPasaporte';
import { Pasaporte } from '../../models/Pasaporte';
import { Table } from './styles';
import {dateFormat} from 'app/utils/index';

export interface ListaPasaportesProps {
  pasaportes: Array<Pasaporte>;
  onClickEliminarPasaporte: (pasaporte: Pasaporte) => void;
}

export const ListaPasaportes: React.FC<ListaPasaportesProps> = ({
  pasaportes,
  onClickEliminarPasaporte,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>
            <b>Nombre y Apellido</b>
          </td>
          <td>
            <b>Cedula</b>
          </td>
          <td>
            <b>Dirección</b>
          </td>
          <td>
            <b>Fecha de Solicitud</b>
          </td>
          <td>
            <b>Fecha de la Cita</b>
          </td>
          <td>
            <b>Monto</b>
          </td>
          <td>
            <b>Acción</b>
          </td>
        </tr>
      </thead>
      <tbody>
        {pasaportes.map((pasaporte: Pasaporte) => {
          return (
            <tr key={pasaporte.documentId}>
              <td>{pasaporte.fullname}</td>
              <td>{pasaporte.documentId}</td>
              <td>{pasaporte.address}</td>
              <td>{dateFormat(pasaporte.applicationDate,'DD-MM-YYYY')}</td>
              <td>{dateFormat(String(pasaporte.appointmentDate),'DD-MM-YYYY')}</td>
              <td>{pasaporte.amount}</td>
              
              <td>
                <BtnMostrarPasaporte
                  pasaporte={pasaporte}
                ></BtnMostrarPasaporte>
                <BtnEliminarPasaporte
                  pasaporte={pasaporte}
                  onEliminar={()=>onClickEliminarPasaporte(pasaporte)}
                ></BtnEliminarPasaporte>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ListaPasaportes.propTypes = {
  pasaportes: PropTypes.array.isRequired,
  onClickEliminarPasaporte: PropTypes.func.isRequired,
};
