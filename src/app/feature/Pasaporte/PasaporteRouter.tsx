import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from 'app/shared/components/LazyFallback';

const MainPage = React.lazy(() => import('./pages/Main'));
const ShowPage = React.lazy(() => import('./pages/Show'));

export const PasaporteRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/pasaportes" exact component={MainPage}></Route>
      <Route path="/pasaportes/show/:id" component={ShowPage}></Route>

    </Switch>
  </React.Suspense>
);
