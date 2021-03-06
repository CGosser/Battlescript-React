import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnCounter: 0,
      score: 10000
    }
  }

  componentDidMount() {
    let score= this.state.score;
    let turnCounter = this.state.turnCounter;

    setInterval( () => {
      this.setState({score: score--}); this.setState({turnCounter: turnCounter++})}, 3000)
    };


    render() {
      return(
        <div className="Stats">
          <ul>
            <li>Turn Counter: {this.state.turnCounter}</li>
            <li>Score: {this.state.score}</li>
          </ul>
        </div>
      );
    }
  }

  export default Stats;
