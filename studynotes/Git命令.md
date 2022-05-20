## 安装

**全过程点击下一步，按默认配置来就行。**

**安装完成之后需要配置本地客户端的用户名和邮箱（邮箱可以是假的），主要用于提交代码时，确认是谁提交的，不配置的话无法提交代码！**

配置命令如下:

```bash
$ git config --global user.name 昵称
$ git config --global user.email 邮箱地址
```

## 初始化本地库

**进入项目目录下，执行下面的命令初始化Git本地仓库**

```bash
$ git init
```

**查看本地仓库状态**

```bash
$ git status
```

**添加文件到暂存区**

```bash
$ git add <file>	# 添加文件到暂存区
```

**删除暂存区的文件**

```bash
$ git rm --cached <file>
```

**将暂存区提交本地库**

```bash
$ git commit -m "日志信息" <file>
```

> 暂存区提交完成后，再次查看本地仓库状态，会提示没有可提交的东西，因为我们暂存区的东西已经提交完了，就会被自动清空掉。



**历史版本**

```bash
$ git reflog	# 简单显示历史提交信息，将版本历史列举出来
$ git log	# 查看版本详细信息
```

**回溯历史纪录的某个版本**

```bash
# Git Bash 中的 Linux 复制粘贴命令   鼠标右击也可以复制粘贴等操作
Ctrl + INS		# => 需要将数字灯关闭掉，才能启用 0 的功能作用
# Git Bash 中的 Linux 粘贴命令
Shift + INS		# => 需要将数字灯关闭掉，才能启用 0 的功能作用
```

```bash
$ git reset --hard <版本号>	# 回溯到历史纪录中的某个版本
$ cat <file>	# 这样就可以回到该版本并看到该版本的文件内容了
```

**分支的操作**

```bash
$ git branch 分支名	# 作用:创建分支
$ git branch -v		   # 作用:查看分支
$ git checkout 分支名	 # 作用:切换分支
$ git merge 分支名		 # 作用:把指定的分支合并到当前分支上
```

**合并分支产生代码冲突问题**

就是将其他分支的内容合并到当前分支上，不会影响其他分支，只是对当前分支的内容进行更新。

```bash
$ git merge 分支名		# 合并分支
$ cat <file>	# 可以查看下产生冲突的文件内容
$ vim <file>	# 对该合并的文件内容进行修改、调整，解决代码的冲突问题，选择自己需要的分支上的代码
$ git add <file>	# 解决文件内容合并的冲突问题之后，还需要添加到暂存区
$ git commit -m "分支内容的合并"	# 内容合并之后再提交本地库时，不能带文件名，否则git不知你是要提交哪一个<file>，此时默认提交的是你合并之后的那个文件，所以不用再去带文件名参数了
```

## 创建远程仓库别名

基本语法

```bash
$ git remote rename [现在的仓库名] [新的仓库名]	# 重命名远程仓库名
$ git remote rm [远程仓库名]		# 删除远程仓库名
$ git remote -v		# 查看当前所有远程地址别名
$ git remote add 别名 远程地址	# 给远程仓库起别名
```

**推送分支到远程库 git push**

```bash
$ git push 别名(或者original Address) 分支		# 推送分支到远程仓库
```

**拉取分支到本地库 git pull**

```bash
$ git pull 别名(或者original Address) 分支		# 拉取分支到本地库
```

**克隆远程仓库到本地 git clone**

小结：clone 会做如下操作：

1、拉取代码。2、初始化本地仓库。3、创建别名。

```bash
$ git clone 远程地址	# 公开访问权限  不需要登录账号也可以克隆
```

**SSH 免密登录**

GitHub 上运行命令生成 .ssh 秘钥目录 [ 注意 ：这里 -C 这个参数是大写的C ]

```bash
$ ssh-keygen -t rsa -C (邮箱)xxx@xx.com	# 连续敲三次回车即可完成创建 .ssh 文件目录
```

Gitee 码云上生成 ssh 秘钥的方法

```bash
$ ssh-keygen -t ed25519 -C (邮箱)xxx@xxx.com		# 点击进入设置中的配置SSH公钥界面会有介绍如何生成公钥的方式
```





## Linux 常用命令

**长格式显示所有文件**

```bash
$ ll -a	# 显示所有文件，包括隐藏文件
$ ll	# 长格式显示所有文件
```



### vim使用

```bash
# 没有文件将会进行创建并自动打开，已存在则会打开
$ vim xxx.txt
$ i # 进入编辑模式
$ esc # 退出编辑模式，进入命令模式
$ :	# shift + ; 转冒号进入命令模式，比如保存、退出等命令的使用
$ yy # 复制光标所在行
$ p # paste 粘贴
$ cat xxx.txt # 查看文件内容
$ tail -n number(1) xxx.txt # 查看文件后面多少行的内容
```















