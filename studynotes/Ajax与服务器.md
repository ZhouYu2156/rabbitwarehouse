# 服务器与Ajax

## 一、XMLHttpRequest的基本使用：

1、使用XMLhttpRequest发起GET请求：

```js
// 1、创建XHR对象
let xhr = new XMLHttpRequest();
// 2、调用open函数， 指定请求方式与URL地址
xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks');
// 3、调用send函数，发起Ajax请求
xhr.send()
// 4、监听onreadystatechange事件
xhr.onreadystatechange = function () {
    // 4.1监听xhr对象的请求状态readyState;与服务器响应的状态status
    if (xhr.readyState === 4 && xhr.status === 200) {
        // 4.2打印服务器响应回来的数据
        console.log(xhr.responseText);
    }
}
```

2、使用XMLHttpRequest发起POST请求：

```javascript
// 1、创建 xhr 对象
let xhr = new XMLHttpRequest();
// 2、调用 open()
xhr.open('POST', 'http://www.liulongbin.top:3006/api/addbook');
// 3、设置 Content-Type 属性（固定写法）
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 4、调用 send(), 同时将数据以查询字符串的形式，提交给服务器
xhr.send('bookname=水浒传&author=施耐庵&publisher=天津图书出版社');
// 5、监听 onreadystatechange事件
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}
```

3、XMLHttpRequest Lever2 新特性

```javascript
// 1. 创建 FormData 实例
var fd = new FormData()
// 2. 调用 append 函数，向 fd 中追加数据
fd.append('uname', 'zs')
fd.append('upwd', '123456')

var xhr = new XMLHttpRequest()
xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
xhr.send(fd)

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText))
    }
}
```

4、XMLHttpRequest Lever2 的 FormData()新特性

```javascript
// 1. 通过 DOM 操作，获取到 form 表单元素
var form = document.querySelector('#form1')

form.addEventListener('submit', function (e) {
    // 阻止表单的默认提交行为
    e.preventDefault()

    // 创建 FormData，快速获取到 form 表单中的数据
    var fd = new FormData(form)

    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
    xhr.send(fd)

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
        }
    }
})
```

5、文件上传

```javascript
$(function () {
    // 监听到Ajax请求被发起了
    $(document).ajaxStart(function () {
        $('#loading').show()
    })

    // 监听到 Ajax 完成的事件
    $(document).ajaxStop(function () {
        $('#loading').hide()
    })

    $('#btnUpload').on('click', function () {
        var files = $('#file1')[0].files
        if (files.length <= 0) {
            return alert('请选择文件后再上传！')
        }

        var fd = new FormData()
        fd.append('avatar', files[0])

        // 发起 jQuery 的 Ajax 请求，上传文件
        $.ajax({
            method: 'POST',
            url: 'http://www.liulongbin.top:3006/api/upload/avatar',
            data: fd,
            processData: false,
            contentType: false,
            success: function (res) {
                console.log(res)
            }
        })
    })
})
```

## 二、axios网络请求库的使用

```javascript
// 1、使用axios仅发起get请求的方法
axios.get('url', { params: ''/*需要提交到 服务器的 data 数据*/ }).then(function (res) {console.log(res.data);
// 2、使用axios仅发起post请求的方法
axios.post('url', { /*需要提交到 服务器的 data 数据*/ }).then(function (res) {console.log(res.data);})
```



```javascript
axios({
    method: '请求类型',
    url: 'xxx',
    params: {
        // GET 请求用 params 提交需要发送到服务器的数据
       id: 1
    },
    data: {
// POST 请求用 data 提交需要发送到服务器的数据
        bookName: '红楼梦',
        price: 20
    }
}).then(function (res) {
    // axios 是基于Promiss 开发的网络请求库，then 是成功之后的回调函数 => callback
    // res 是一个 axios 为我们封装的对象, 里面的 res.data 才是服务器响应回来的真实数据
    console.log(res);
})
```





























































