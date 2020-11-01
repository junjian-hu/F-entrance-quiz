import React, { Component } from 'react';
import './App.scss';
import Container from '../Components/Container/container';

// TODO GTB-1: * 需求都没有实现
// TODO GTB-1: * 有发送学员列表请求和得到数据
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 功能实现太少，很多知识点无法验证
// TODO GTB-3: * 有划分组件的意识，但命名规范和按功能复用等原则划分的实践差很多
// TODO GTB-3: * 没有使用语义化标签
// TODO GTB-3: * 没有写样式
// TODO GTB-3: * 运用了许多ES6+语法及axios
// TODO GTB-3: * 运用部分React知识点，但完成度很低不能完全验证
// TODO GTB-4: * 没有小步提交
// TODO GTB-4: * 没有抽出Api请求层
// TODO GTB-4: * 注意组件等等命名规范
// TODO GTB-4: * 组件但拆分和复用需要提高
// TODO GTB-4: * 功能实现太少，部分工程实践
class App extends Component {
  render() {
    // const BoxNumber = 6;
    return (
      <div>
        {/* TODO GTB-4: - 示例代码应该删掉 */}
        <div data-testid="app" className="App">
          Hello World
        </div>

        <Container />
      </div>
    );
  }
}

export default App;
