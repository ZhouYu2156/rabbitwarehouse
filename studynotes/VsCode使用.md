#### 1、常用快捷键

**Alt + Shift + F	格式化文档**
**Alt + ↑ / ↓		上下移动光标所在行位置**
**Alt + Shift + ↑ / ↓	上 / 下复制行**
**Alt + 左键点击	控制多行同时操作**
**Alt + Shift + 拉动鼠标		控制多行同时操作**
**Ctrl + F		搜索并定位**
**Ctrl + Z		返回上一步操作**
**Ctrl + ~		打开 / 关闭 VScode中的终端**
**Alt + F4		关闭VScode**
**Ctrl + /		注释 / 解开注释**
**选中要注释的块内容 然后按 Alt + Shift + A		多行注释**
**Ctrl + - / +	放大字体/窗口**

**选中块内容 + Tab	块内容缩进**

**选中块内容 + Shift + Tab	块内容反缩进**

**Alt + ← / →	切换编辑窗口**
**Ctrl + B		切换侧边栏可见性**
**F11		切换全屏Ctrl + Shift + ← / →	选中片段**

**Ctrl + Shift + P	打开设置选项搜索**

#### 2、提高代码编辑效率的扩展库

**JavaScript (ES6) code snippets	代码快捷键和规范**

**Bootstrap 3 Snippets		根据类名快速生成bootstrap基本UI结构骨架**

**Chinese(Simplified) Language Pack for Visual Stidio Code 中文汉化包**

**Vscode-icons VSCode 文件图标**

**Best Dark Themes Pack 颜色主题（设置主题颜色让眼睛不疲劳）**

**Live Server 浏览器实时预览修改后的代码效果**

**open-in-browser 在浏览器中查看**

**Highlight Matching Tag 高亮显示匹配标签**

**Bracket Pair Colorizer 用不同颜色高亮显示匹配的括号**

**Auto Close Tag 自动闭合标签**

**Auto Rename Tag 尾部闭合标签同步修改**

**Code Spell Checker 单词拼写检查**

**Code Runner 运行选中代码段（万能语言运行器）**

**Vetur VUE语言包**

**Beautify	格式化代码**

**Prettier - Code formatter	格式化代码**

**Easy Less	自动编译less文件，在同级生成同名的css文件**

**file-icons		自动标记不同文件的文件图标**

**Indent-Rainbow		带颜色的缩进 **



#### **官方扩展库链接：https://marketplace.visualstudio.com/VSCode**



#### **settings.json配置**

```json
{
  "editor.cursorStyle": "line",
  "editor.cursorSurroundingLines": 0,
  "editor.cursorWidth": 3,
  "editor.cursorSurroundingLinesStyle": "default",
  "editor.fontWeight": "bold",
  // 代码规范配置ESLint 开始 => 在保存时自动格式化为ESLint代码规范
  "prettier.configPath": "C:\\Users\\ZhouYu123\\.prettierrc",
  "eslint.alwaysShowStatus": true,
  "prettier.trailingComma": "none",
  "prettier.semi": false,
  // 每行文字个数超出此限制将会被迫换行
  "prettier.printWidth": 300,
  // 使用单引号替换双引号
  "prettier.singleQuote": true,
  "prettier.arrowParens": "avoid",
  // 设置 .vue 文件中，HTML代码的格式化插件
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.ignoreProjectWarning": true,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": false
    },
    "prettier": {
      "printWidth": 300,
      "trailingComma": "none",
      "semi": false,
      "singleQuote": true,
      "arrowParens": "avoid"
    }
  },
  // ESlint插件配置
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  // 代码规范配置ESLint 结束  => 在保存时自动格式化为ESLint代码规范
  // 导入文件时是否携带文件的扩展名
  "path-autocomplete.extensionOnImport": true,
  // 配置 @ 的路径提示
  "path-autocomplete.pathMappings": {
    "@": "${folder}/src"
  },
  "editor.fontSize": 26,
  "files.autoSave": "onWindowChange",
  "liveServer.settings.donotShowInfoMsg": true,
  "extensions.ignoreRecommendations": true,
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.shell.windows": "C:/Windows/System32/cmd.exe",
  "terminal.enableAppInsights": true,
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "explorer.confirmDelete": false,
  "workbench.iconTheme": "vscode-icons",
  "terminal.integrated.fontSize": 16,
  "editor.formatOnSave": true,
  "editor.hover.delay": 1000,
  "editor.wordWrap": "on",
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  //这里是React代码风格的配置
  /* "files.associations": {
    "*.js": "javascriptreact",
    "*.wxs": "javascript",
    "*.wxss": "css"
  }, */
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.startupEditor": "none",
  "security.workspace.trust.untrustedFiles": "open",
  "liveServer.settings.donotVerifyTags": true,
  "workbench.trustedDomains.promptInTrustedWorkspace": true,
  "open-in-browser.default": "Chrome",
  "liveServer.settings.CustomBrowser": "chrome",
  "workbench.colorTheme": "Andromeda Bordered",
  "workbench.preferredDarkColorTheme": "Visual Studio Light",
  "workbench.preferredLightColorTheme": "Andromeda",
  "workbench.preferredHighContrastColorTheme": "Red",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "vsicons.dontShowNewVersionMessage": true,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "editor.minimap.enabled": false,
  "editor.guides.indentation": false,
  "cSpell.userWords": [],
  "window.zoomLevel": -1,
  "workbench.preferredHighContrastLightColorTheme": "Solarized Dark",
  "workbench.statusBar.visible": true,
  "auto-close-tag.activationOnLanguage": [
    "xml",
    "php",
    "blade",
    "ejs",
    "jinja",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "plaintext",
    "markdown",
    "vue",
    "liquid",
    "erb",
    "lang-cfml",
    "cfml",
    "HTML (EEx)",
    "HTML (Eex)",
    "HTML",
    "plist"
  ],
  "html.format.contentUnformatted": "pre,code,textarea",
  "html.format.endWithNewline": true,
  "html.format.indentInnerHtml": false,
  "html.format.wrapAttributes": "auto",
  "html.format.wrapAttributesIndentSize": null,
  "html.format.wrapLineLength": 120,
  "indentRainbow.colorOnWhiteSpaceOnly": false,
  "html.format.indentHandlebars": false,
  "editor.formatOnPaste": true,
  "diffEditor.wordWrap": "inherit",
  "editor.minimap.scale": 1,
  "editor.minimap.showSlider": "mouseover",
}
```

