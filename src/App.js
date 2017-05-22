import React, { Component } from 'react';
import axios from 'axios'

import Header from './components/Header.js'
import ListHeroes from './components/HeroesList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      herolist : []
    }
  }

  componentWillMount() {
    axios.get('http://api.herostats.io/heroes/all')
    .then(response=>{
      let newData = this.state.herolist
      Object.keys(response.data).map(function(key, index) {
         newData.push(response.data[key]);
      });
      this.setState({herolist: newData})
    })
    .catch(err=>{
      console.log(err);
    })
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <div>
        <Header />
        <ListHeroes heroList={this.state.herolist}/>
      </div>
    );
  }
}

export default App;
