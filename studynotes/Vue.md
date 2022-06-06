# Vue学习

### 一关于webpack前端工程化的解决方案

#### 1>初学Vue

1、新建项目文件夹

2、初始化项目：npm init -y

3、在项目文件夹下新建src目录，与项目初始化的package.json平级。

4、安装包:npm install jquery --save  <=>  npm -i  jquery -S  <=>  npm i jquery 

#### 2>webpack的基本使用（没有安装webpack之前的高级语法无法在项目中运行起来）

1、终端运行npm isntall webpack@5.42.1 webpack-cli@4.7.2 -D

#### 2、在项目中配置webpack

①在项目根目录中，创建名为webpack.config.js的webpack配置文件，并初始化如下的基本配置：

```javascript
module.exports = {
    // mode用来指定构建模式，可选值有development和production
    // development会打包成没有压缩的文件内容，production是项目上线时推荐使用的，会打包成压缩的文件内容
    // development打包速度快，体积较大，适合在开发阶段使用
    // production打包速度慢，体积小，适合在上线时使用
	mode: 'development'
}
```

②在package.json的scripts节点下，新增dev脚本如下：

```json
"scripts": {
    "dev": "webpack" // script节点下的脚本，可以通过npm run执行，例如npm run dev
}
```

③在终端运行npm run dev命令，启动webpack进行项目的打包构建

④打包构建完成后，在index.html文件中将index.js换成dist目录下的main.js，项目就可以运行起来了

3、自定义打包的入口与出口

在webpack.config.js配置文件中，通过entry节点指定打包的入口。通过output节点指定打包的出口。示例代码如下：

```json
const path = require('path') // 导入node.js中专门操作路径的模块
module.exports = {
    entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
    output: {
        path: path.join(__dirname,'./dist'), // 输出文件的存放路径
        filename: 'bundle.js'	// 输出文件的名称
    }
}
```

#### 4、webpack中的插件

**1>webpack插件的作用**

通过安装和配置第三方的插件，可以拓展webpack的能力，从而让webpack用起来更方便。最常用的webpack插件有如下两个：

**①webpack-dev-server**   (npm i webpack-dev-server@3.11.2 -D)

类似于node.js阶段用到的nodemon工具

每当修改了源代码，webpack会自动进行项目的打包和构建

**②html-webpack-plugin**

webpack中的HTML插件（类似于一个模板引擎插件）

可以通过此插件自定制index.html页面的内容

**2>配置webpack-dev-server**

①修改package.json -> scripts中的dev命令如下：

```json
"scripts": {
    "dev": "webpack server", // scripts节点下的脚本，可以通过npm run执行
}
```

②再次运行npm run dev命令，重新进行项目的打包

③在浏览器中访问http://localhost:8080地址，查看自动打包效果

**注意：webpack-dev-server会启动一个实时打包的http服务器**

**④如果项目启动不了报错，直接复制命令行的报错去浏览器查找解决方案**

**⑤项目启动成功后，浏览器输入http://localhost:8080，然后会进入到项目根目录**

**⑥src目录下的index.js文件会在项目根目录中有个在内存里的副本，这个副本会实时更新。**

**3>安装htm-webpack-plugin （npm i html-webpack-plugin@5.3.2 -D）**

**利用这个插件将index.html首页在内存中复制一份在项目根目录中**

```javascript
// 1.导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin');
// 2.创建HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定源文件的存放路径
    filename: './index.html', // 指定生成的文件的存放路径
})

module.exports = {
    mode: 'development',
    plugins: [htmlPlugin],	// 3.通过plugins节点，使htmlPlugin插件生效
}
```

**4>devServer节点**

在webpack.config.js配置文件中，可以通过devServer节点对webpack-dev-server插件进行更多的配置，示例代码如下：

```json
devServer: {
    open: true, // 初次打包完成后，自动打开浏览器
    host: '127.0.0.1', // 实时打包所使用的主机地址
    port: 80,	// 实时打包所使用的端口号
}
```

**注意：凡事修改了webpack.config.js配置文件，或修改了package.json配置文件，必须重启实时打包的服务器，否则最新的配置文件无法生效！**

#### 5>webpack中的loader加载器

1>打包处理css文件

①运行npm i style-loader@3.0.0 css-loader@5.2.6 -D命令，安装处理css文件的loader

②在webpack.config.js的module -> rules数组中，添加loader规则如下：

```javascript
module: {
    // 所有第三方文件模块的匹配规则
    rules: [
        // 文件后缀名的匹配规则
        {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
}
```

**其中，test表示匹配的文件类型，use表示对应要调用的loader**

**注意：**

- use数组中指定的loader顺序是固定的
- 多个loader的调用顺序是：从后往前调用
- 所有源代码要放在src目录下



































