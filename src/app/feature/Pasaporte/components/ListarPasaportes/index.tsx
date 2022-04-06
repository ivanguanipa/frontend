import * as PropTypes from 'prop-types';
import * as React from 'react';
import { BtnEliminarPasaporte } from '../EliminarPasaporte';
import { BtnMostrarPasaporte } from '../BtnMostrarPasaporte';
import { Pasaporte } from '../../models/Pasaporte';
import { Table } from './styles';
import {dateFormat} from "app/utils/index";

export interface ListaPasaportesProps {
  pasaportes: Array<Pasaporte>;
  onClickEliminarPasaporte: (pasaporte: Pasaporte) => any;
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
            <tr key={pasaporte.document_id}>
              <td>{pasaporte.fullname}</td>
              <td>{pasaporte.document_id}</td>
              <td>{pasaporte.address}</td>
              <td>{dateFormat(pasaporte.application_date,"DD-MM-YYYY")}</td>
              <td>{dateFormat(String(pasaporte.appointment_date),"DD-MM-YYYY")}</td>
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
