import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.scss';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChanged: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    const { searchField, robots, isPending, error, onSearchChanged } = this.props;
    const filteredRobots =
      robots.filter(robot => (
        robot.name.toLowerCase().includes(searchField.toLowerCase())
      )
      );
    return isPending ?
      <div className='app'>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
      : (error) ? <div className='app'>
        <h1 style={{ color: 'crimson' }}>{error.message}</h1>
      </div> :
        <div className='app'>
          <h1>Robo friends</h1>
          <SearchBox searchChange={onSearchChanged} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
