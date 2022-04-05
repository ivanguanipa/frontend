import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow3, DivRow7 } from './styles';
import { Pasaporte } from '../../models/Pasaporte';
import { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Button } from 'app/shared/components/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

interface MostrarPasaportesProps {
  mostrarPasaporte: (id: string, callback:any) => void;
  pasaporte?: Pasaporte;
}

export const MostrarPasaportes: React.FC<MostrarPasaportesProps> = ({
  mostrarPasaporte,
  pasaporte,
}) => {
  const { id } = useParams<{ id: string }>();
  let history = useHistory();
  useEffect(() => {
    mostrarPasaporte(id, recordNotFound);
  }, [mostrarPasaporte]);

  const recordNotFound = ()=>{
    alert('no encontrado');
    history.push("/pasaportes");
    //return window.location.href="/pasaportes"
  }

  const muestraPasaporte = (data:Pasaporte)=>{
      return  <div>
      <div>Nombre y Apellido: {data.fullname}</div>
      </div>
  }
  return (
    <DivContainer>
      <DivRow3>
      <Route render={({ history}) => (
        <Button onClick={() => { history.push('/pasaportes') }}>
          <span role="img" aria-labelledby="trash">
            Regresar
          </span>
        </Button>)}
        />
        {
          !pasaporte ? 'Por favor espere...' : muestraPasaporte(pasaporte)
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
    document_id: PropTypes.number.isRequired,
    application_date: PropTypes.string.isRequired,
  }).isRequired,
  mostrarPasaporte: PropTypes.func.isRequired,
};