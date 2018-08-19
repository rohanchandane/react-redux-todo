import React, { Component } from 'react';
import './App.css';
import { ADD_ITEM } from './constants/action-types';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item:''
    }
  }

  handleChange(event) {
    this.setState({
      item: event.target.value
    });
  }

  handleClick(){
    this.props.dispatch ({
      type : ADD_ITEM,
      payload: this.state.item
    });

    this.setState({
      item: ''
    }) 
  }

  render() {
    return (
      <div>

        <input type="text" id="item" value={this.state.item} onChange={(event) => this.handleChange(event)} />
        <button type="submit" id="add" onClick={() => this.handleClick()}>Add</button>
        <ul id="itemList">
          {
            this.props.list.map( (item, index) => {
              return <li key={index}> {item} </li>
            })
          }
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { list: state.list }
}

export default connect(mapStateToProps)(App);
