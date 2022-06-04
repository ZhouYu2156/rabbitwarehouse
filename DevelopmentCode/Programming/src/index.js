// 核心组件
import React from "react";
import ReactDOM from "react-dom/client";
// 导入bootstrap样式
import "bootstrap/dist/css/bootstrap.min.css";
// 星空组件
import Canvas from "./components/Canvas";
// 代码雨组件
import CodeRainCanvas from "./components/CodeRain";
// 内容主体组件
import Content from "./components/Content";
// 联系方式组件
import Relation from "./components/Relation";
// 切换背景按钮组件
import SwitchButton from "./components/SwitchButton";
// 个人联系方式展示组件
import Modals from "./components/Modals";
// bootstrap的JS
import "bootstrap/dist/js/bootstrap";
// 自定义的全局CSS样式
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      sponsor: false,
      imgData: null,
    };
  }
  displayBg = (ps) => {
    this.setState((state, props) => {
      return {
        flag: ps,
      };
    });
  };
  switchSponsor = (like, img) => {
    this.setState((state, props) => {
      return {
        sponsor: like,
        imgData: img,
      };
    });
  };
  render() {
    return (
      <div id="app">
        {/* 绘制星空组件 */}
        {this.state.flag ? <Canvas /> : <CodeRainCanvas />}
        {/* 主体内容组件*/}
        <Content />
        {/* 联系方式组件 */}
        <Relation switchSponsor={this.switchSponsor} />
        {/* 切换背景按钮组件 */}
        <SwitchButton displayBg={this.displayBg} />
        {/* 个人联系方式展示组件 */}
        <Modals sponsor={this.state.sponsor} imgData={this.state.imgData} />
      </div>
    );
  }
}
// 创建组件挂载的根节点 并 渲染组件
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
