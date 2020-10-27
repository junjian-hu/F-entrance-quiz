import React, { Component } from 'react';

class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id || 'default id',
      name: this.props.name || 'default name',
    };
  }

  render() {
    //   console.log(this.props.data);
    // const id = this.state.id;
    // const name = this.state.name;
    return (
      <div>
        <p>{`${this.state.id  } ${  this.state.name}`}.</p>
      </div>
    );
  }
}

export default InfoBox;
