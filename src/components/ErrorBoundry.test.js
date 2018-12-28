import {shallow} from 'enzyme';
import ErrorBoundry from './ErrorBoundry';
import React from 'react';

it('expect to render ErrorBoundry component',()=>{
  expect(shallow(<ErrorBoundry/>)).toMatchSnapshot();
})