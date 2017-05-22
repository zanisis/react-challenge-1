import React, { Component } from 'react';

class HeroesList extends Component {
  constructor(props) {
    super(props)
  }

  renderTBody(){
    return(
      <tbody>
        {this.props.heroList != '' ? this.props.heroList.map(item=>(
          <tr key={item.id}>
            <td>{item.ID}</td>
            <td>{item.Name}</td>
            <td>{item.HP}</td>
          </tr>
        )): 'Wait'}
        <tr>
          <td></td>
        </tr>
      </tbody>
    )
  }

  render(){
    console.log(this.props.heroList[0]);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Heroes</th>
              <th>HP</th>
            </tr>
          </thead>
          {this.renderTBody()}
      </table>
      </div>
    )
  }
}


export default HeroesList