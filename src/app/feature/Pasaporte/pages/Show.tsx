import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorMostrarPasaportes } from '../hoc/ProveedorMostrarPasaportes';
import { RouteComponentProps } from 'react-router-dom';

const ShowPage: React.FC<RouteComponentProps> = () => {

  return (
    <Layout title="Pasaportes" description="Ver de pasaporte">
      <ProveedorMostrarPasaportes/>
    </Layout>
  );
};

ShowPage.displayName = 'HomeShowPage';

export default ShowPage;
