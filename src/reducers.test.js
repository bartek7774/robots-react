import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_FAILED} from './constants';

import * as reducers from './reducers';

describe('searchRobots',()=>{
  const initialStateSearch={
    searchField:'abc'
  };
  it('should return the initial state',()=>{
    expect(reducers.searchRobots(undefined,{})).toEqual({
      searchField:''
    });
  });

  it('should return CHANGE_SEARCHFIELD',()=>{
    expect(reducers.searchRobots(initialStateSearch,{
      type: CHANGE_SEARCH_FIELD,
      payload:'abc'
    })).toEqual({
      searchField: 'abc'
    });
  });

});

describe('requestRobots',()=>{

  const initialStateRobots={
    robots: [],
    isPending: false,
    error: ''
  }

  it('should return the initial state',()=>{
    expect(reducers.requestRobots(undefined,{})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action',()=>{
    expect(reducers.requestRobots(initialStateRobots,{
      type: REQUEST_ROBOTS_PENDING,
      payload: { isPending:true }
    })).toEqual({isPending:true,error:'',robots:[]});
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action',()=>{
    expect(reducers.requestRobots(initialStateRobots,{
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
          id:'123',
          name:'bot',
          email:'bot@gmail.com'
        }]
      }
    )).toEqual({
      isPending:false,
      error:'',
      robots:[{
        id:'123',
        name:'bot',
        email:'bot@gmail.com'
      }]
    });
  });

    it('should handle REQUEST_ROBOTS_FAILED action',()=>{
      expect(reducers.requestRobots(initialStateRobots,{
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Oooops!'
        }
      )).toEqual({
        isPending: false,
        error: 'Oooops!',
        robots: []
      });
    });

});