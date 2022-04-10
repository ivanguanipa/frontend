import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { homeRouter as HomeRouter } from 'app/feature/Home/homeRouter';
import MainPage from 'app/main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { PasaporteRouter } from 'app/feature/Pasaporte/PasaporteRouter';

export const appRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/home" component={HomeRouter} />
        <Route path="/pasaportes" component={PasaporteRouter} />
      </Switch>
    </BrowserRouter>
  );
};
