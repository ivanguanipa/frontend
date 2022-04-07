import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import ShowPage  from './Show';
import { Route, Switch } from 'react-router-dom';

describe('ShowPage Test', () => {
  let componentWrapper: ShallowWrapper;

  afterEach(() => {
    componentWrapper.unmount();
  });

  it('should match snapshot', () => {
    componentWrapper = shallow(
        <Route path="/pasaportes" exact component={ShowPage}></Route>
    );
    expect(componentWrapper).toMatchSnapshot();
  });
});

export {};
