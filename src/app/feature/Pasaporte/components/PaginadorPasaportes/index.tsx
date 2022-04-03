import * as PropTypes from 'prop-types';
import * as React from 'react';

interface PaginadorPasaportesProps {
  cantidadTotalPasaportes: number;
  onClickCambiarPagina: (numeroPagina: number) => void;
}

const PASAPORTES_VISIBLES_POR_PAGINA = 10;

export const PaginadorPasaportes: React.FC<PaginadorPasaportesProps> = ({
  onClickCambiarPagina,
  cantidadTotalPasaportes,
}) => {
  if (cantidadTotalPasaportes <= PASAPORTES_VISIBLES_POR_PAGINA) {
    return null;
  }

  const rango = Array.from(
    Array(
      Math.ceil(cantidadTotalPasaportes / PASAPORTES_VISIBLES_POR_PAGINA)
    ).keys()
  );

  return (
    <nav>
      {rango.map((index) => {
        return (
          <button
            onClick={() => onClickCambiarPagina(index)}
            key={index.toString()}
          >
            {index + 1}
          </button>
        );
      })}
    </nav>
  );
};

PaginadorPasaportes.propTypes = {
  cantidadTotalPasaportes: PropTypes.number.isRequired,
  onClickCambiarPagina: PropTypes.func.isRequired,
};
