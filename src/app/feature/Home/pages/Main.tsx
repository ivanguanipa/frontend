import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { RouteComponentProps } from 'react-router-dom';

const HomeMainPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Home" description="Home de la aplicación">
    <div>hola mundo</div>
  </Layout>
);

HomeMainPage.displayName = 'HomeMainPage';

export default HomeMainPage;
