# React入门

## **一、开始项目**

**1、初始化项目**

终端运行命令：npx create-react-app reactApp

**2、启动应用**

**注意：需要先进入reactApp目录下**

启动应用命令：npm start

**说明：启动成功之后，过一会儿会自动打开浏览器显示页面**

## **二、创建UI结构**

**3、React原始方法创建UI结构（效率低）**

```javascript
import React from "react";
import ReactDOM from "react-dom";

// 获取挂载点
const root = document.getElementById("root");
// 定义style样式属性
const h1Style = { "text-align": "center" };
// 参数一：元素名
// 参数二：属性
// 参数三：子节点
const h1 = React.createElement("h1", { style: h1Style }, "Hello React");
// 参数一：元素、组件
// 参数二：挂载点
ReactDOM.render(h1, root);
```

**4、JSX语法创建UI结构（结构清晰，效率高——推荐）**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// 获取挂载点
const root = document.getElementById('root');

// JSX语法创建UI结构的方法，style里面的外层{}表示要放入一个变量,内层的{}表示要放入一个对象
// 另外style里面的属性长单词需要以小驼峰命名法书写
const Hello = (<h1 style={{color: 'red', textAlign: 'center'}}>Hello React</h1>)
// 参数一：组件
// 参数二：挂载目标
ReactDOM.render(Hello, root)
```

**5、函数创建组件的方法**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// 获取挂载点
const root = document.getElementById('root');

// 函数创建组件,必须以大驼峰命名法命名组件
// 函数必须要有返回值，并且返回值为空需要写null，否则会报错
function Hello () {
    return null
}
// 直接以组件名为标签名并且以单标签闭合的方式进行渲染
ReactDOM.render(<Hello />, root)
```

**6、类创建组件的方法**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// 获取挂载点
const root = document.getElementById('root');

// 1>类创建组件，需要继承React.Component这个类，这样可以使用父类已经封装好的方法
// 2>大驼峰命名法
// 3>必须要调用render方法，并且和函数创建组建的方法一样，要有返回值
class Hello extends React.Component {
    render () {
        return (
            <h1 style={{color: 'red', textAlign: 'center'}}>
                Hello React
            </h1>
        )
    }
}
// 渲染UI结构
ReactDOM.render(<Hello />, root)
```

**7、基于ES6模块化开发思想**

**抽离样式和结构**

1>在应用reactApp的src目录下创建js文件目录，在js目录下创建Hello.js文件，编写如下代码：

```javascript
import React from 'react'

class Hello extends React.Component {
    render() {
        return (
            <h1 className='startStyle'>这是我第一个抽离出来的组件</h1>
        )
    }
}
// 暴露组件供外界使用
export default Hello
```

2>在应用reactApp的src目录下创建css文件目录，在css目录下创建all.css文件，编写如下代码：

```css
.startStyle {
    color: red;
    list-style: none;
    text-decoration: none;
    text-align: center;
}
```

3>在应用reactApp的src目录下的index.js文件中，编写如下代码：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

//导入组件
import Hello from './js/Hello'
// 导入css样式
import './css/all.css'

// 获取挂载点
const root = document.getElementById('root');
// 使用Hello组件
ReactDOM.render(<Hello />, root)
```

## **三、事件处理**

1>类组件中的事件绑定，有this

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// 获取挂载点
const root = document.getElementById('root');
// 创建组件并绑定事件，事件以on+事件名称={事件处理程序}，事件名称以小驼峰命名法命名
class App extends React.Component {
    handleClick () {
        console.log("点击事件触发了");
    }

    render () {
        return (
            <button onClick={ this.handleClick }>点击事件</button>
        )
    }
}

ReactDOM.render(<App />, root)
```

2>函数组件中的事件绑定，没有this

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// 获取挂载点
const root = document.getElementById('root');

function App() {
    function handleClick () {
        console.log("点击事件触发了");
    }

    return (
        // 函数组件中的事件绑定没有this
        <button onClick={ handleClick }>点击事件</button>
    )
}
ReactDOM.render(<App />, root)
```

3>事件对象e

```javascript
import React from 'react';
import ReactDOM from 'react-dom';


// 获取挂载点
const root = document.getElementById('root');

// 创建组件并绑定事件，事件以on+事件名称={事件处理程序}，事件名称以小驼峰命名法命名
class App extends React.Component {
    handleClick (e) {
        e.preventDefault();
        console.log("点击事件触发了");
    }

    render () {
        return (
            <a href='https://www.baidu.com/' onClick={ this.handleClick }>点击事件触发了</a>
        )
    }
}

ReactDOM.render(<App />, root)
```

4>有状态组件——类组件

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// 获取挂载点
const root = document.getElementById('root');

// 创建组件并绑定事件，事件以on+事件名称={事件处理程序}，事件名称以小驼峰命名法命名
class App extends React.Component {
    // 第一种方式定义状态
    constructor () {
        super()
        this.state = {
            count: 0
        }
    }
    // 第二种方式定义状态
    // 两种效果是一样的，只是方法不一样而已
    
    /* state = {
        count: 0
    } */
    
    render () {
        return (
            <div>计数器：{ this.state.count }</div>
        )
    }
}

ReactDOM.render(<App />, root)
```

## **四、解决this指向问题**

1>箭头函数（箭头函数是没有this的，当箭头函数里面的this找不到该函数的的归属时，就会向外寻找，最终this就是指向组件实例）

![react01](C:\Users\ZhouYu123\Desktop\ReactNote\images\react01.png)

2>Function.prototype.bind()

- 利用ES5中的bind方法，将事件处理程序中的this与组件实例绑定到一起

```javascript
// 创建组件并绑定事件，事件以on+事件名称={事件处理程序}，事件名称以小驼峰命名法命名
class App extends React.Component {
    // 第一种方式定义状态
    constructor () {
        super()
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render () {
        return (
            <div>
                <h1>计数器：{ this.state.count }</h1>
                <button onClick={ this.handleClick }>+1</button>
            </div>
            
        )
    }
}
```

3>class的实例方法

- 利用箭头函数形式的class实例方法
- 注意：该语法是实验性语法，但是，由于babel的存在可以直接使用

```javascript
class App extends React.Component {
    // 第一种方式定义状态
    constructor () {
        super()
        this.state = {
            count: 0
        }
    }

    // 这里的箭头函数的this会指向上一级的class实例对象
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render () {
        return (
            <div>
                <h1>计数器：{ this.state.count }</h1>
                <button onClick={ this.handleClick }>+1</button>
            </div>
            
        )
    }
}
```

## **五、受控组件与非受控组件**

1、非受控组件

```javascript
class App extends React.Component {
    // 第一种方式定义状态
    constructor () {
        super()
        
        // 创建ref
        this.txtRef = React.createRef()
    }
    
    // 获取文本框的值
    handle = () => {
        console.log(this.txtRef.current.value);
    }
    render () {
        return (
            <div>
                <input type="text" ref={this.txtRef} />
                <button onClick={this.handle}>获取文本框的值</button>
            </div>
        )
    }
}
```

2、受控组件（推荐）

- 采用数据驱动视图的思想
- 将UI结构和数据与React系统数据进行关联

```javascript
class App extends React.Component {
    constructor () {
        super()
        this.state = {
            isChecked: false
        }
    }

    // 这里的箭头函数的this会指向上一级的class实例对象
    handle = e => {
        this.setState({
            isChecked: e.target.checked
        })
    }
    
    render () {
        return (
            <input type="checkbox" checked={this.isChecked} onChange={this.handle}/>
        )
    }
}
```

## **六、React组建基础**

1. 组件的两种创建方式：函数组件和类组件
2. 无状态（函数）组件，负责静态结构展示
3. 有状态（类）组件，负责更新UI，让页面动起来
4. 绑定事件注意this指向问题
5. 推荐使用受控组件来处理表单
6. 完全利用JS语言的能力创建组件，这是React的思想

## **七、组件进阶**

1、组件之间的通讯

- 组件是封闭的，要接受外部数据应该通过props来实现
- props的作用：接收传递给组件的数据
- 传递数据：给组件标签添加属性
- 接收数据：函数组件通过参数props接收数据，类组件通过this.props接收数据

2、组件的props

1. 可以给组件传递任意类型的数据
2. props是只读的对象，只能读取属性的值，无法修改对象
3. 注意：使用类组件时，如果写了构造函数，应该将props传递给super()，否则，无法在构造函数中获取到props！

#### **总结：**

**React 组件进阶**

1. 组件通讯是构建 React 应用必不可少的一环。

2. props 的灵活性让组件更加强大。

3. 状态提升是React组件的常用模式。

4. 组件生命周期有助于理解组件的运行过程。

5. 钩子函数让开发者可以在特定的时机执行某些功能。

6. render props模式和高阶组件都可以实现组件状态逻辑复用。

7. 组件极简模型： (state, props) => UI

八、React原理揭秘

-  setState() 的说明
-  JSX 语法的转化过程
-  组件更新机制
-  组件性能优化
-  虚拟 DOM 和 Diff 算法

**1、setState() 的说明**

（1）setState() 是异步更新数据的

- setState() 是异步更新数据的
- 注意：使用该语法时，后面的 setState() 不要依赖于前面的 setState()
- 可以多次调用 setState() ，只会触发一次重新渲染

```javascript
this.state = { count: 1 }
this.setState({
count: this.state.count + 1
})
console.log(this.state.count) // 1
```

（2）推荐语法

- 推荐：使用 setState((state, props) => {}) 语法
- 参数state：表示最新的state
- 参数props：表示最新的props

```javascript
this.setState((state, props) => {
return {
count: state.count + 1
}
})
console.log(this.state.count) // 1
```

（3）setState()的第二个参数：

- 场景：在状态更新（页面完成重新渲染）后立即执行某个操作
- 语法： setState(updater[, callback]) 

## **八、路由基础**

1、React路由可以有效的管理多个视图（组件）实现SAP；

2、Router组件包裹整个应用，只需要使用一次；

3、Link组件是入口，Route组件是出口；

4、通过props.history实现编程式导航；

5、默认模糊匹配，添加exact变精确匹配。















