// 核心组件
import React from "react";
import ReactDOM from "react-dom/client";
// 导入bootstrap样式
import "bootstrap/dist/css/bootstrap.min.css";
// 星空组件
import Canvas from "./components/Canvas";
// 内容主体组件
import Content from "./components/Content";
// bootstrap的JS
import "bootstrap/dist/js/bootstrap";
// 自定义的全局CSS样式
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "baidu-icon":
        "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
    };
  }
  render() {
    return (
      <div id="app">
        {/* 绘制星空组件 */}
        <Canvas />
        {/* 主体内容组件*/}
        <Content />
      </div>
    );
  }
}
// 创建组件挂载的根节点 并 渲染组件
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
