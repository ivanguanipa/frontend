import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'app/shared/components/Button';
import { Pasaporte } from '../../models/Pasaporte';
import { Route } from 'react-router-dom';

interface BtnMostrarPasaporteProps {
  pasaporte: Pasaporte;
}

export const BtnMostrarPasaporte: React.FC<BtnMostrarPasaporteProps> = ({
  pasaporte,
}) => {
  return (
    <Route render={({ history}) => (
    <Button onClick={() => { history.push('/pasaportes/show/'+pasaporte.id) }}>
      <span role="img" aria-labelledby="trash">
        Ver
      </span>
    </Button>)}
    />
  );
};

BtnMostrarPasaporte.propTypes = {
  pasaporte: PropTypes.shape({
    id: PropTypes.number.isRequired,
    fullname: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    document_id: PropTypes.number.isRequired,
    application_date: PropTypes.string.isRequired,
    appointment_date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
