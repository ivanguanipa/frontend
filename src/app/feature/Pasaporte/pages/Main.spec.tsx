import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import MainPage  from './Main';
import { Route, Switch } from 'react-router-dom';

describe('Main Test', () => {
  let componentWrapper: ShallowWrapper;

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('should match snapshot', () => {
    componentWrapper = shallow(
        <Route path="/pasaportes" exact component={MainPage}></Route>
    );
    expect(componentWrapper).toMatchSnapshot();
  });
});

export {};
