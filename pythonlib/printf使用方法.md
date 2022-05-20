# printf终端格式化输出

## 一、安装方法

直接下载放到本地即可

## 二、使用方法

**快速上手：**

### 1、从printf文件中导入类PrintFormat

```python
from pythonlib.printf import PrintFormat

# 实例化对象	并 初始化配置
obj = PrintFormat('highlight', 'blue', 'cyan')

# 调用printf()方法打印
obj.printf("Hello Python")
```

### 2、设置第一个参数：display显示模式的值

调用实例对象的setmode方法，示例如下：

```python
# 更改显示模式display的值
obj.setmode("underline")
obj.printf("Hello underline")
```

### 3、设置第二个参数：文本forecolor前景色的值

调用实例对象的setfore方法，示例如下：

```python
# 更改前景色forecolor的值
obj.setfore("red")
obj.printf("Hello Python")
```

### 4、设置第三个参数：文本backcolor背景色的值

调用实例对象的setback方法，示例如下：

```python
# 更改文本背景色backcolor的值
obj.setback("black")
obj.printf("Hello Python")
```

## 三、进阶教程

#### 三个参数：

**第一个参数：display =>**显示模式（文本装饰）

可选值[options]

 => default（默认）——0

 => highlight（高亮、加粗）——1

 => underline（下划线）——4

 => invert（反片）——7

**第二个参数：forecolor =>** 前景色（文字颜色）

可选值[options]

 => black（黑色）——30

 => red（红色）——31

 => green（绿色）——32

 => yellow（黄色）——33

 => blue（蓝色）——34

 => prunosus（紫色）——35

 => cyan（青色）——36

 => white（白色）——37

**第三个参数：backcolor =>** 背景色（文本背景色）

可选值[options]

 => black（黑色）——40

 => red（红色）——41

 => green（绿色）——42

 => yellow（黄色）——43

 => blue（蓝色）——44

 => prunosus（紫色）——45

 => cyan（青色）——46

 => white（白色）——47

**注意：**

**一、三个参数可传的数据类型可以是字符串 => 英文单词，也可以是整型 => 终端颜色转义序列数字**

**二、每个参数对应的可选参数由以上选项提供，如果用了不在可选参数范围内的选项，会导致出现不可预期的结果**

#### 博客教程：https://www.cnblogs.com/huchong/p/7516712.html