import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { ProveedorGestionPasaportes } from '../hoc/ProveedorGestionPasaportes';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  console.log('pasando main')
  return (
    <Layout title="Pasaportes" description="Gestión de pasaportes">
      <ProveedorGestionPasaportes/>
    </Layout>
  );
};

MainPage.displayName = 'HomeMainPage';

export default MainPage;
