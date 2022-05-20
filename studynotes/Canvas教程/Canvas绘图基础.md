# Canvas绘图基础

## 前言（Canvas绘图思想）：

- Canvas是基于状态描述的绘图。

- JavaScript是函数优先的编程语言。

- ES6的JavaScript设计采用面向对象的编程方式。

## 一、Canvas画布

1、可以这样理解，HTML中的canvas标签就是我们绘图的一张画布。

2、画布有两个主要属性，宽度（width）和高度（height）。

3、设置画布宽高：

```javascript
let canvas = document.getElementById('canvas');
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
// 这里我们获取了window窗口的大小作为画布的大小，整个屏幕就是我们的一张画布
canvas.width = WIDTH;
canvas.height = HEIGHT;
```

## 二、获取上下文环境

1、这样理解，当我们拥有了canvas这张画布时，我们就可以进行指定，我们接下来要绘图的一个类型。即我们需要绘制的是2D的图形还是3D图形的。（目前这里我介绍的2D的，弄明白了2D的canvas绘图之后，再研究3D的）

2、在脚本里我们获取到canvas元素之后，我们再进行绘图环境的获取，绘图环境的术语在官方称为上下文环境。获取canvas画布的上下文环境如下：

```javascript
let context = canvas.getContext('2d');	// 一定要传入参数 指定我们需要的是2D绘图环境
```

3、以上获取画布并得到绘图环境的完整步骤在这里 => 

```javascript
// 获取canvas元素 对其进行操作
let canvas = document.getElementById('canvas');
// 获取窗口宽高
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
// 设置canvas属性宽高 千万别设置他的样式
// canvas的一个特殊的标签，它的样式宽高和属性宽高并不相同
// 样式描述的是视觉效果，而画布实际的大小需要靠属性来设置
// 就比如一个人视觉效果看起来很高，但客观来说他的高度属性并不是那么高
// 这样理解为什么不能用css样式去设置canvas的宽高就行了，只能用它的属性width和height进行设置
canvas.width = WIDTH;
canvas.height = HEIGHT;
// 获取绘图环境 必须传入参数
let context = canvas.getContext('2d');
```

## 三、上下文环境的属性和方法

### 1、属性

- lineCap：表示线条端点的样式 => 支持属性有（buzz、round、square）,其中默认值是buzz。

默认buzz样式：

```javascript
pen.lineWidth = 10
pen.moveTo(100, 100)
pen.lineTo(200, 100)
pen.stroke()
```

![buzz](C:\Users\ZhouYu123\Desktop\Canvas教程\images\buzz.png)

round样式：

```javascript
pen.lineWidth = 10
pen.lineCap = 'round';
pen.moveTo(100, 150)
pen.lineTo(200, 150)
pen.stroke()
```

![round](C:\Users\ZhouYu123\Desktop\Canvas教程\images\round.png)

square样式（看起来和默认样式没什么区别，仔细对比一下，其实是有区别的）：

```javascript
pen.lineWidth = 10
pen.lineCap = 'square';
pen.moveTo(100, 150)
pen.lineTo(200, 150)
pen.stroke()
```

- lineJoin：表示线条转角的样式 => 支持的属性有（miter、round、bevel），其中默认值是miter。

- lineWidth：表示线条的宽度。大于0的数值类型，如果是其他类型则会被忽略。
- lineDashOffset：用来指定虚线起始绘制的偏移距离。
- fillStyle：填充样式。支持的属性值有 => （color、gradient、pattern）
- globalAlpha：设置画布的全局透明度。范围是0-1，0表示完全透明，1表示完全不透明。
- font：设置文本文字大小、字体。字体支持CSS常见的一些字体

```javascript
context.font = '24px 宋体'
```

- shadowBlur：指定阴影的模糊程度。默认值是0，表示不模糊。value为数值类型。
- shadowColor：指定阴影颜色。默认是透明黑。等同于默认值rgba(0,0,0,0)
- shadowOffsetX：表示阴影的水平偏移大小。value值
  表示偏移的大小，数值，默认值是0。忽略Infinity或者NaN值。
- shadowOffsetY：表示阴影的垂直偏移大小。value值
  表示偏移的大小，数值，默认值是0。忽略Infinity或者NaN值。
- strokeStyle：用来设置描边的样式。可以是路径的描边，也可以是形状的描边，也可以是文字的描边。描边的样式也不仅限于颜色。可选值有color：描边设置为颜色、gradient：描边设置为渐变、pattern：描边设置为图案。
- textAlign：用在文本绘制的时候，可以指定文本的水平对齐方式。和CSS的text-align属性值类似，支持left，right，center，start，end这些值。
- textBaseline：用在文本绘制的时候，可以指定文本对齐的基线。支持top，hanging，middle，alphabetic，ideographic，bottom这些关键字值。

### 2、方法

- canvas.arc()：

语法：context.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
x：圆心横坐标；

y：圆心纵坐标；

radius：圆弧半径大小；

startAngle：圆弧开始的角度，单位是弧度；

endAngle：圆弧结束的角度，单位是弧度；

anticlockwise（可选）：是否按逆时针绘制。

该方法默认一个圆的固定弧度和位置是这样的：

右边：0（2π）；

下边：π/2

左边：π

上边：3/2*π

- arcTo()：

语法：context.arcTo(x1, y1, x2, y2, radius);

参数
各个参数含义和作用如下：

x1	Number
第1个控制点的横坐标。
y1	Number
第1个控制点的纵坐标。
x2	Number
第2个控制点的横坐标。
y2	Number
第2个控制点的纵坐标。
radius	Number
圆弧的半径大小。

- context.beginPath()：无参数，无返回值。

只要是非连续路径绘制，都要记得都要执行一句context.beginPath()；

否则最后的stroke()方法会使用最后设置的属性去描绘图形，从而覆盖之前样式。

- context.closePath()：无参数，无返回值。

作用是闭合路径，会把路径最后位置和开始点直线相连，形成闭合区域。

- context.clearRect(x,y,width,height)：清除画布内容，可以把画布中的某一块矩形区域变成透明的。

参数
各个参数含义和作用如下：

x	Number
矩形左上角x坐标。
y	Number
矩形左上角y坐标。
width	Number
被清除的矩形区域的高度。
height	Number
被清除的矩形区域的宽度度。

- context.clip()：路径剪裁。

使用的时候，先描绘路径，再执行context.clip()方法，之后绘制的内容就在这个剪裁路径中呈现了。
































