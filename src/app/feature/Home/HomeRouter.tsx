import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from '../../shared/components/LazyFallback';

export const HomeMainPage = React.lazy(() => import('./pages/Main'));

export const homeRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    {/* Layout compartido entre las rutas va aquí */}
    <Switch>
      <Route path="/" component={HomeMainPage}></Route>
    </Switch>
  </React.Suspense>
);
