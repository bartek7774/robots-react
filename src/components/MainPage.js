import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

import './MainPage.scss';


export class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }
  filterRobots = ()=>{
    return this.props.robots.filter(robot => (
        robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
      )
    );
  }
  render() {
    const { robots, isPending, error, onSearchChanged } = this.props;
  
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
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>

  }
}

export default MainPage;
