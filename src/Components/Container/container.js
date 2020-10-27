import React, { Component } from 'react';
import axios from 'axios';
import InfoBox from '../InfoBox/InfoBox';

class container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MemberList: [],
      // MemberDistribution: [],
      loading: true,
    };
  }

  // distributeMember(MemberList) {
  //     const round = 6;
  //     // console.log(typeof(MemberList));
  //     for (let i = 0; i < MemberList.size; i++) {
  //         console.log('2');
  //     }
  // }

  componentDidMount() {
    axios
      .get('http://localhost:8080/allMembers', {
        method: 'GET',
        mode: 'cors',
        headers: {
          Accept: 'application/json,text/plain,*/*',
        },
      })
      .then((res) => {
        const { data } = res;
        const members = [];
        Object.keys(data).map((key) => members.push(data[key]));
        this.setState({ MemberList: members });
        console.log(this.state.MemberList);
      })
      .then(() => {
        // let data = this.state.MemberList;
        // let members = [];
        // for (let i = 1; i <= Object.keys(data).length; i++) {
        //     members[i].push(data[i]);
        //     if (i == 6) {
        //         i = i - 6;
        //     }
        // }
        // console.log(members);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>加载中。。。</div>
        ) : (
          <InfoBox data={this.state.MemberList} id="1" name="2" />
        )}
      </div>
    );
  }
}

export default container;
