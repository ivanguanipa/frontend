import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'app/shared/components/Button';
import { Pasaporte } from '../../models/Pasaporte';

interface BtnEliminarPasaporteProps {
  onEliminar: (pasaporte: Pasaporte) => any;
  pasaporte: Pasaporte;
}

export const BtnEliminarPasaporte: React.FC<BtnEliminarPasaporteProps> = ({
  onEliminar,
  pasaporte,
}) => {
  console.log('noton eliminar',pasaporte.id);
  const handleEliminar = () => onEliminar(pasaporte);
  return (
    <Button onClick={handleEliminar}>
      <span role="img" aria-labelledby="trash">
        🗑️
      </span>
    </Button>
  );
};

BtnEliminarPasaporte.propTypes = {
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
  onEliminar: PropTypes.func.isRequired,
};
