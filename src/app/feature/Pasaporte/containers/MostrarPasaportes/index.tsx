import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow3 } from './styles';
import { Pasaporte } from '../../models/Pasaporte';
import { useEffect } from 'react';
import { Button } from 'app/shared/components/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {dateFormat} from "app/utils/index";

interface MostrarPasaportesProps {
  mostrarPasaporte: (id: string, callback:any) => void;
  pasaporte?: Pasaporte;
}
export const MostrarPasaportes: React.FC<MostrarPasaportesProps> = ({
  mostrarPasaporte,
  pasaporte,
}) => {
  const { id } = useParams<{ id: string }>();

  const pleaseWait = 'Por favor espere...';
  let history = useHistory();
  useEffect(() => {
    const recordNotFound = ()=>{
      alert('no encontrado');
      history.push("/pasaportes");
    }
    mostrarPasaporte(id, recordNotFound);
  }, [id,mostrarPasaporte,history]);

  const muestraPasaporte = (data:Pasaporte)=>{
      return  <div>
      <div>Nombre y Apellido: {data.fullname}</div>
      <div>Cédula: {data.documentId}</div>
      <div>Dirección: {data.address}</div>
      <div>Fecha de Nacimiento: {dateFormat(data.birthdate,"DD-MM-YYYY")} </div>
      <div>Fecha de la solicitud: {dateFormat(data.applicationDate,"DD-MM-YYYY")}</div>
      <div>Fecha de la cita: {dateFormat(String(data.appointmentDate),"DD-MM-YYYY")}</div>
      <div>Monto a cancelar: {data.amount}</div>
      </div>
  }
  return (
    <DivContainer>
      <DivRow3>
        <Button onClick={() => { history.push('/pasaportes') }}>
          <span role="img" aria-labelledby="trash">
            Regresar
          </span>
        </Button>
        {
          !pasaporte ? pleaseWait : muestraPasaporte(pasaporte)
        }
      </DivRow3>
    </DivContainer>
  );
};

MostrarPasaportes.propTypes = {
  pasaporte: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    documentId: PropTypes.number.isRequired,
    applicationDate: PropTypes.string.isRequired,
  }).isRequired,
  mostrarPasaporte: PropTypes.func.isRequired,
};
