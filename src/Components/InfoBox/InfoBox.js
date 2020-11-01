import React, { Component } from 'react';

class InfoBox extends Component {
  constructor(props) {
    super(props);
    // TODO GTB-4: - 现在场景下不需要state，直接使用pros即可，甚至可以修改成函数组件
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
        <p>{`${this.state.id} ${this.state.name}`}.</p>
      </div>
    );
  }
}

export default InfoBox;
