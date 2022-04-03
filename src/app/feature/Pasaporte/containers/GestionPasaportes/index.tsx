import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { FormCrearPasaporte } from '../../components/FormCrearPasaporte';
import { ListaPasaportes } from '../../components/ListarPasaportes';
import { PaginadorPasaportes } from '../../components/PaginadorPasaportes';
import { Pasaporte } from '../../models/Pasaporte';
import { useEffect } from 'react';

interface GestionPasaportesProps {
  pasaportes: Array<Pasaporte>;
  listarPasaportes: (numeroPagina: number) => void;
  agregarNuevoPasaporte: (pasaportes: Pasaporte) => void;
  eliminarPasaporte: (pasaportes: Pasaporte) => void;
  cantidadTotalPasaporte: number;
}

export const GestionPasaportes: React.FC<GestionPasaportesProps> = ({
  agregarNuevoPasaporte,
  pasaportes,
  listarPasaportes,
  eliminarPasaporte,
  cantidadTotalPasaporte,
}) => {
  useEffect(() => {
    console.log('pasando useeffect');
    listarPasaportes(0);
  }, [listarPasaportes]);
  return (
    <DivContainer>
      <DivRow>
        <FormCrearPasaporte
          onSubmit={agregarNuevoPasaporte}
          formTitle="Crear pasaporte"
        />
      </DivRow>
      <DivRow>
        <ListaPasaportes
          pasaportes={pasaportes}
          onClickEliminarPasaporte={eliminarPasaporte}
        />
        <PaginadorPasaportes
          cantidadTotalPasaportes={cantidadTotalPasaporte}
          onClickCambiarPagina={listarPasaportes}
        />
      </DivRow>
    </DivContainer>
  );
};

GestionPasaportes.propTypes = {
  pasaportes: PropTypes.array.isRequired,
  listarPasaportes: PropTypes.func.isRequired,
  agregarNuevoPasaporte: PropTypes.func.isRequired,
  eliminarPasaporte: PropTypes.func.isRequired,
  cantidadTotalPasaporte: PropTypes.number.isRequired,
};
