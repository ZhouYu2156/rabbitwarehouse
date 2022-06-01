# npm工具包使用简介

**1、i5ting_toc是一个可以把md文档转换为html页面的小工具，使用步骤如下：**

```md
// 将 i5ting_toc 安装为全局包
npm install -g i5ting_toc
// 调用 i5ting_toc,轻松实现 md 转 html
i5ting_toc -f 要转换的 md 文件路径 -o(该参数表示自动在浏览器打开转换后的html文件)
```

**2、typescript将TS文件转换为JS文件**

```cmd
# （全局）安装typescript工具包
npm i -g typescript
```

①第一种方式：使用工具包来转换TS文件

```cmd
# 每次都要手动调用tsc命令进行转换
tsc index.ts
```

②第二种方式：使用工具包来转换TS文件

```cmd
# 开启监听模式 => 当我们改变TS文件时并保存时，就会自动将TS文件转换为JS文件
tsc --watch index.ts
```

③第三种方式：安装ts-node工具包，将tsc工具与node工具合并的使用的工具包

```cmd
# （全局）安装ts-node工具包 => 也就是在任何目录都可以使用工具包提供的命令执行我们需要的功能
npm i -g ts-node
# 使用方式 => 让你感觉就好像直接运行ts文件一样，其实内部是将代码隐式地进行了转换为js文件并执行
ts-node index.ts
```























## python构建打包发布模块：

1、与包同级目录下，创建setup.py文件，写入以下内容

```python
from distutils.core import setup

setup(
    name="printf",      # 包名
    version="1.0",    # 版本
    description="控制终端文本以不同的颜色输出",     # 描述信息
    long_description="符合人类直接控制终端文本颜色输出的模块",                  # 完整描述信息
    author="周玉",       # 作者
    author_email="1043744584@qq.com",    # 作者邮箱
    url="https://gitee.com/zhouyu2156",  # 主页
    py_modules=["printf.printf", "printf.colors"]         # 对外提供的模块
)

```

2、在cmd黑屏终端中，进入项目包所在的目录下，用以下命令构建包

```cmd
python setup.py build
```



3、再执行以下命令进行压缩打包

```cmd
python setup.py sdist
```

4、在别人拿到我们的包并解压之后，在这个包的setup.py文件所在目录中，用以下命令执行setup.py文件将包安装到python的第三方库模块中，这样我们就可以直接在PyCharm中导入包所提供的模块了。

```cmd
python setup.py install
```



