# **Node内置模块学习**

## fs模块

### 1 => **读取文件方法**

```javascript
// 导入fs文件模块
const fs = require('fs');
// 读取文件方法格式: params => 读取路径path，读取的编码方式unicode,读取后的回调函数callbackFunction
fs.readFile(path, 'utf8', function(err, dataStr) {
	if (err) return console.log("读取文件失败: " + err.message);
    console.log("内容读取成功！");
})
```

### 2 => **写入文件方法**

```javascript
// 导入fs文件模块
const fs = require('fs');
// 写入文件方法格式: params => 写入的文件路径path，写入的数据字符串，写入方法执行后的回调函数callbackFunction
fs.writeFile(path, dataStr, function (err) {
    if (err) return console.log("写入失败: " + err.message);
    console.log("内容写入成功!")
})

```

## path模块

### 1 => join方法

```javascript
// 导入path模块
const path = require('path');
// 调用path模块的join方法,其中__dirname表示当前js文件所在路径
const currentPath = path.join(__dirname, '/index.html');
// join方法将返回一个当前js文件所在的路径，如果后面跟了其他路径，join方法将进行拼接操作，并返回拼接结果
console.log(currentPath);
```

### 2 => basename方法

```javascript
// 导入path模块
const path = require('path');
// 调用path模块的basename方法
// 情况一：获取带后缀的文件名 => 不带第二个参数
var fullName = path.basename("/a/b/c/index.html");
console.log(fullName);  // >>>输出index.html

// 情况二：获取不带后缀的文件名 => 带第二个参数
var fileName = path.basename("/a/b/c/index.html", ".html");
console.log(filename);  // >>>输出index
```

### 3 => extname方法

```javascript
// 导入path模块
const path = require("path");
// 路径字符串
const fpath = '/a/b/c/index.html';
// 调用path模块的extname方法获取文件名后缀
const fext = path.extname(fpath);
console.log(fext);  // >>>输出 .html
```

## http模块

### 1 => createServer方法

```javascript
// 1.导入http模块
const http = require('http');
// 2.实例化web服务器实例
const server = http.createServer();
// 3.为服务器实例绑定request事件，监听客户端的请求
server.on('request', function (req, res) {
    console.log("Someone visit our web server.")
})
// 4.启动服务器
server.listen(80, function () {
    console.log("server running at http://127.0.0.1")
})
```

### 2 => req请求对象

```javascript
// req是请求对象,它包含了与客户端相关的数据和属性
server.on('request', (req) => {
    // req.url是客户端请求的URL地址
    const url = req.url;
    // req.method是客户端的method请求类型
    const method = req.method;
    const str = `Your request url is ${req.url}, and request method is ${req.method}`;
    console.log(str)
})
```

### 3 => res响应对象

```javascript
server.on('request', (req, res) => {
    // res是响应对象，它包含了与服务器相关的数据和属性，例如:
    // 要发送到客户端的字符串
    const str = `Your request url is ${req.url}, and request method is ${req.method}`;
    // res.end()方法的作用:
    // 向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str)
})
```

### 4 => 防止中文乱码问题

```javascript
server.on('request', (req, res) => {
    // 发送的内容包含中文
    const str = `您请求的url地址是${req.url},请求的method类型是${req.method}`;
    // 为了防止中文显示乱码的问题，需要设置响应头Content-Type的值为text/html;charset=utf-8
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // 把包含中文的内容，响应给客户端
    res.end(str)
})
```

### 5 => 根据请求url返回响应内容

```javascript
server.on('request', function (req, res) {
    const url = req.url;
    let content = "<h1 style='text-align: center;'>404 Not Found!</h1>";
    if (url === '/' || url === '/index.html') {
        content = "<h1 style='text-align: center;'>首页</h1>";
    }else if (url === '/about.html') {
        content = "<h1 style='text-align: center;'>关于页面</h1>";
    }
    // 防止中文乱码问题
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // 发送响应并结束请求
    res.end(content)
})
```

### 6 => 将磁盘文件资源放在服务器上对外共享

```javascript
// 1.导入http模块
const http = require('http')
// 2.导入fs模块
const fs = require('fs')
// 3.导入path模块
const path = require('path')

// 4.创建服务器
// 4.1创建web服务器实例
const server = http.createServer()
// 4.2监听request请求并处理
server.on('request', (req, res) => {
    // 获取客户端请求地址
    const url = req.url;
    let fpath = path.join(__dirname, url);
    // 将url映射为磁盘上文件的存放路径并读取文件内容
    fs.readFile(fpath, 'utf8', function (err, dataStr) {
        // 读取失败后返回的结果
        if (err) return res.end("404 Not Found");
        // 读取成功后的返回结果
        res.end(dataStr)
    })
})
// 4.3启动服务器
server.listen(80, () => {
    console.log("server running at http://127.0.0.1")
})
```



## 关于npm的基本使用

1、在安装Node.js时会自动配套安装了npm的命令库，只需要在Node.js安装完成后配置一下npm所在目录的环境变量即可。

2.1、解决下载速度

因为我们npm下载默认是连接国外的服务器，所以网速不是特别好的时候，可能下不了包，安装nrm使用npm i nrm -g 我们的一般工具包都是下载到全局

安装完毕之后，可以运行命令 nrm ls	（ls 表示 list）查看所有的服务器列表

利用命令 nrm use 服务器名 => 切换下载的服务器地址

2.2、解决 无法将“nrm”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确， 然后再试一次
问题解决方法
1>首先我们看看自己的有没有安装cnpm(查看命令： npm list --depath=0 -g)
2>如果没有我们就安装cnpm(查看命令：npm i cnpm -g)
3>如果安装成功还是报错请看自己的安装路径 （查看命令：npm config get prefix）
4>我们再打开我的电脑(右键)->属性->高级系统->再找到高级这一列->打开环境配置->找到path
->添加自己的npm安装路径 就是(npm config get prefix)这个路径添加到path保存->都保存确定
->然后我们再打开 cmd 使用 nrm ls 就可以看到了执行 命令 nrm ls 前面显示*号的就是你当前用的服务器下载地址

---------------------------------------------------------------------------

**原文链接：https://blog.csdn.net/weixin_45819980/article/details/104782669**

**3、常用命令**

下面列出所有命令的中文示意：

1.  nrm -V ：查看当前nvm版本。
2.  nrm -h ：显示所有命令。
3.  nrm current ：显示当前源名称。
4.  nrm use <registry> ：切换源。
5.  nrm add <registry> <url> [home] ：添加一个源。比如公司自己的私有源等。
6.  nrm set-auth <registry> <value> [always] ：设置自定义源的授权信息。
7.  nrm set-email <registry> <value> ：给自定义源设置路径。
8.  nrm set-hosted-repo <registry> <value> ：设置发布到自定义源的npm托管仓储。
9.  nrm del <registry> ：删除自定义源。
10.  nrm home <registry> [browser] ：浏览器中打开源首页。
11.  nrm publish [options] [<tarball>|<folder>] ：发布包到自定义源，如果没有使用自定义源，则直接发布到npm。
12.  nrm test [registry] ：测试源的访问速度。不加registry时，测试所有的。

**原文链接：https://www.cnblogs.com/gaozejie/p/10694834.html**



## MySQL的基本使用

**说明：**

- SQL指令对大小写不明感
- 查询结果是以一个表的形式返回的结果集
- -- 表示SQL注释

1、select 查询语句

```mysql
-- 从users表中查询username，password列的信息
SELECT username,password from users;
-- *表示查询users表的所有字段
SELECT * FROM users;
```

2、insert into 插入语句

```mysql
-- 给（哪张）表的（什么）字段的插入（什么）值	列和值要一一对应
insert into table_name (username,password) values ('example','admin');
```



3、update 更新语句

```mysql
-- 语法解读：
-- 1、用update指定要更新哪个表中的数据
-- 2、用set指定对应列的新值
-- 3、用where指定更新的条件
update 表名 set 列名称=新值 where 列名称=某值;
```



4、delete 删除语句

```mysql
-- 语法解读：
-- 从指定的表中，根据where条件，删除对应的数据行
delete from 表名 where 列名称=值;
```



5、where 条件限定语句

```mysql
-- 通过where来限定筛选想要的数据
select * from users where username='zs';
```



6、and 和 or 运算符的使用

```mysql
-- 通过and 和 or 可以进一步细致的筛选我们想要的数据
select * from users where id > 3 or username='ls';
```





## JSONP解决跨域问题

**原理：利用<script>标签的src没有跨域访问限制的漏洞进行数据的请求**

优点：解决了浏览器同源策略的跨域访问限制；程序员被迫想出的解决同源策略限制的临时解决方案；兼容较低版本的浏览器。

缺点：只能进行GET请求（本质）

**实现方式：**

**前端**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>document</title>
  <script src="./lib/jQuery/jquery.min.js"></script>
</head>
<body>

    <script>
    	function jsonCallBack() {
          $.ajax({
            type: 'GET',
            data: {
              id: 1,
              name: 'Jack'
            },
            url: 'http://127.0.0.1:3007/api/receive',
            success: function (res) {
              console.log(JSON.parse(res));
            }
          })
    	}
    </script>
  	<script src="http://127.0.0.1:3007/api/jsonp?callback=jsonCallBack"></script>
</body>

</html>
```

**后端**

```js
const express = require("express");
const app = express();

// (1)可以是一个路由处理script的回调函数 将数据在后端写好，以参数的形式传给回调函数进行返回
// (2)也可以是回调函数的调用响应给客户端，在客户端接收到响应并调用了我们写好的函数，此时函数里面再发起ajax就不会是跨域访问了，而被当成了是服务端的源需要请求（调用）这个方法，就不会被当成是其他源发起的访问了
app.get("/api/jsonp", function (req, res, next) {
  const {callback} = req.query;
  res.send(`${callback}()`)
  next()
})

app.get('/api/receive', function (req, res, next) {
  const {callback} = req.query;
  const obj = {id: 1, name: 'Jack', status: 200, description: 'success'}
  res.send(`${JSON.stringify(obj)}`)
})

app.listen(3007, () => {
  console.log("api server running at http://127.0.0.1:3007");
});
```



















































