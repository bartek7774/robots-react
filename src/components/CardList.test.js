import {shallow} from 'enzyme';
import CardList from './CardList';
import React from 'react';

it('expect to render CardList component',()=>{
  const mockRobots=[  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }];
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})