import * as PropTypes from 'prop-types';
import * as React from 'react';
import { BtnEliminarPasaporte } from '../EliminarPasaporte';
import { Pasaporte } from '../../models/Pasaporte';
import { Table } from './styles';

export interface ListaPasaportesProps {
  pasaportes: Array<Pasaporte>;
  onClickEliminarPasaporte: (pasaporte: Pasaporte) => any;
}

export const ListaPasaportes: React.FC<ListaPasaportesProps> = ({
  pasaportes,
  onClickEliminarPasaporte,
}) => {
  console.log('pasaportes',pasaportes);
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
            <tr key={pasaporte.document_id}>
              <td>{pasaporte.fullname}</td>
              <td>{pasaporte.document_id}</td>
              <td>{pasaporte.address}</td>
              <td>{pasaporte.application_date}</td>
              <td>{pasaporte.appointment_date}</td>
              <td>{pasaporte.amount}</td>
              
              <td>
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
