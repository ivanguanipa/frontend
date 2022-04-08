import * as React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import ShowPage from './Show'
import { Route } from 'react-router-dom';

import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';

const history = createMemoryHistory();
const path = `/route/:id`;
const thematch: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: "1" }
};
const location = createLocation(thematch.url);

describe('Show Page Test', () => {
    let componentWrapper: ShallowWrapper;
    afterEach(() => {
            componentWrapper.unmount();
        });
     
     
      it('shallow render', () => {
         componentWrapper = shallow(
            <ShowPage history={history}
                         location={location}
                         match={thematch} />
        );
    
        expect(componentWrapper).toMatchSnapshot();
    });

})