import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'app/shared/components/Button';
import { Pasaporte } from '../../models/Pasaporte';

interface BtnEliminarPasaporteProps {
  onEliminar: (pasaporte: Pasaporte) => void;
  pasaporte: Pasaporte;
}

export const BtnEliminarPasaporte: React.FC<BtnEliminarPasaporteProps> = ({
  onEliminar,
  pasaporte,
}) => {

  const handleEliminar = () => {
    if(window.confirm('Esta seguro de eliminar el registro seleccionado?')){
      onEliminar(pasaporte);
    }
    
  };
  return (
    <Button onClick={handleEliminar} className={'deletePassport'}>
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
    documentId: PropTypes.number.isRequired,
    applicationDate: PropTypes.string.isRequired,
    appointmentDate: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  onEliminar: PropTypes.func.isRequired,
};
