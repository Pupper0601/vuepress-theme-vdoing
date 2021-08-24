(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{587:function(a,t,s){"use strict";s.r(t);var r=s(30),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"appium-环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appium-环境搭建"}},[a._v("#")]),a._v(" Appium 环境搭建")]),a._v(" "),s("h2",{attrs:{id:"一、-appium"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、-appium"}},[a._v("#")]),a._v(" 一、 appium")]),a._v(" "),s("h3",{attrs:{id:"_1-appium-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-appium-介绍"}},[a._v("#")]),a._v(" 1. appium 介绍")]),a._v(" "),s("p",[s("code",[a._v("appium")]),a._v(" 是一个自动化测试开源工具，支持 iOS 平台和 Android 平台上的原生应用，web 应用和混合应用。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("原生应用")]),a._v(" ： 指那些用 iOS 或者 Android SDK 写的应用（ Application 简称app）。")]),a._v(" "),s("li",[s("strong",[a._v("web应用")]),a._v(" ： 指使用移动浏览器访问的应用（ appium 支持 iOS 上的 Safari 和Android 上的 Chrome）。")]),a._v(" "),s("li",[s("strong",[a._v("混合应用")]),a._v(" ： 指原生代码封装网页视图——原生代码和 web 内容交互。")])]),a._v(" "),s("blockquote",[s("p",[a._v("appium 是一个跨平台的工具：它允许测试人员在不同的平台（ iOS，Android）使用同一套 API 来写自动化测试脚本，这样大大增加了 iOS 和 Android 测试套件间代码的复用性。")])]),a._v(" "),s("h5",{attrs:{id:"客户端、服务器架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端、服务器架构"}},[a._v("#")]),a._v(" 客户端、服务器架构")]),a._v(" "),s("ul",[s("li",[a._v("appium 的核心是一个 web 服务器")]),a._v(" "),s("li",[a._v("他接受来自客户端的连接，监听命令并在移动应用上执行，答复http响应来描述执行结果")])]),a._v(" "),s("h5",{attrs:{id:"session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[a._v("#")]),a._v(" session")]),a._v(" "),s("ul",[s("li",[a._v("自动化始终在一个会话中执行，客户端会给服务器发送请求")]),a._v(" "),s("li",[a._v("请求中包含一个被称作预期能力的json对象，这时候服务器会开启这个自动化会话")]),a._v(" "),s("li",[a._v("并返回一个用于后续发送命令的id")])]),a._v(" "),s("h5",{attrs:{id:"预期能力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预期能力"}},[a._v("#")]),a._v(" 预期能力")]),a._v(" "),s("ul",[s("li",[a._v("是一些发送给appium服务的键值对组合，")]),a._v(" "),s("li",[a._v("他告诉服务器，我们想要启动什么类型的自动化会话")]),a._v(" "),s("li",[a._v("可以修改服务器在自动化过程中的行为。比如：将 platforName 设置为 Android")])]),a._v(" "),s("h5",{attrs:{id:"appium-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appium-服务器"}},[a._v("#")]),a._v(" appium 服务器：")]),a._v(" "),s("ul",[s("li",[a._v("是一个 node.js 编写的")])]),a._v(" "),s("h5",{attrs:{id:"appium-客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appium-客户端"}},[a._v("#")]),a._v(" appium 客户端")]),a._v(" "),s("ul",[s("li",[a._v("我们写的代码")])]),a._v(" "),s("h5",{attrs:{id:"appium-desktop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appium-desktop"}},[a._v("#")]),a._v(" appium Desktop")]),a._v(" "),s("ul",[s("li",[a._v("他打包了appium服务器运行需要的所有东西，还可以查看应用程序的结构树--元素定位")])]),a._v(" "),s("h3",{attrs:{id:"_2-appium-工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-appium-工作原理"}},[a._v("#")]),a._v(" 2. appium 工作原理")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819144424.png",alt:"image-20210819144423752"}})]),a._v(" "),s("p",[a._v("Appium 支持 Android 及 iOS 平台的 App 测试，两者的运行原理大体相同。")]),a._v(" "),s("h4",{attrs:{id:"_1-android-平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-android-平台"}},[a._v("#")]),a._v(" 1. Android 平台")]),a._v(" "),s("ul",[s("li",[a._v("由 Client 发起请求，经过中间服务套件，驱动 App 执行相关的操作。\n"),s("ul",[s("li",[a._v("Client 是测试人员开发的 WebDriver 测试脚本，也就是你我写的代码。")])])]),a._v(" "),s("li",[a._v("中间服务套件则是 Appium 解析服务，\n"),s("ul",[s("li",[a._v("Appium 在服务端启用 4723 端口，通过该端口实现 Client 与 Appium Server 通信。")]),a._v(" "),s("li",[a._v("Appium Server 把请求转发给中间件Bootstrap.jar")]),a._v(" "),s("li",[a._v("Bootstrap.jar 安装在手机上，监听 4724 端口并接收 Appium 命令，")]),a._v(" "),s("li",[a._v("通过调用 UIAutomator 命令来实现测试过程。")])])]),a._v(" "),s("li",[a._v("Bootstrap 将执行的结果返回给 Appium Server。\n"),s("ul",[s("li",[a._v("Appium Server 再将结果返回给 Client。")])])])]),a._v(" "),s("h4",{attrs:{id:"_2-ios-平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-ios-平台"}},[a._v("#")]),a._v(" 2. ios 平台")]),a._v(" "),s("ul",[s("li",[a._v("由 Client 发起请求，经过中间服务套件，驱动 App 执行相关的操作\n"),s("ul",[s("li",[a._v("Client 是测试人员开发的 Webdriver 测试脚本。")])])]),a._v(" "),s("li",[a._v("中间服务套件则是 Appium 解析服务\n"),s("ul",[s("li",[a._v("Appium 在服务端启用 4723 端口，通过该端口实现 Client 与 Appium Server 通信。")]),a._v(" "),s("li",[a._v("Appium Server 调用 instruments.js 启动一个 Socket Server，同时分出一个⼦进程运⾏instruments.app")]),a._v(" "),s("li",[a._v("将 bootstrap.js（一个UIAutomation 脚本）注入到设备从而与外界进行交互。")])])]),a._v(" "),s("li",[a._v("Bootstrap.js 将执行的结果返回给 Appium Server\n"),s("ul",[s("li",[a._v("Appium Server 再将结果返回给 Client。")])])])]),a._v(" "),s("blockquote",[s("p",[a._v("Android 与 iOS 区别在于 Appium 将请求转发到 "),s("code",[a._v("bootstrap.js")]),a._v(" 或者 "),s("code",[a._v("bootstrap.jar.")])]),a._v(" "),s("p",[a._v("然后由 bootstrap 驱动 UIAutomation 或 UIAutomator 去设备上完成具体的动作。")])]),a._v(" "),s("h2",{attrs:{id:"二、-appium-环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、-appium-环境搭建"}},[a._v("#")]),a._v(" 二、 Appium 环境搭建")]),a._v(" "),s("h3",{attrs:{id:"_1-安装-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-node-js"}},[a._v("#")]),a._v(" 1. 安装 Node.js")]),a._v(" "),s("p",[a._v("Appium服务端运行时依赖node.js环境，因此需要优先安装node环境。")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Node.js 下载地址"),s("OutboundLink")],1),a._v(" ： https://nodejs.org/zh-cn/")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819152603.png",alt:"image-20210819152603141"}})]),a._v(" "),s("p",[s("em",[s("strong",[a._v("安装路径不要有中文")])])]),a._v(" "),s("p",[a._v("安装好后，使用 "),s("code",[a._v("node -v")]),a._v(" 检查")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819152856.png",alt:"image-20210819152855857"}})]),a._v(" "),s("h3",{attrs:{id:"_2-安装-jdk-及-配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-jdk-及-配置环境变量"}},[a._v("#")]),a._v(" 2. 安装 JDK 及 配置环境变量")]),a._v(" "),s("h4",{attrs:{id:"_1-安装-jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-jdk"}},[a._v("#")]),a._v(" 1. 安装 JDK")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JDK 官网下载"),s("OutboundLink")],1),a._v(" : https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/8/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JDK下载 --- 清华大学开源软件镜像站"),s("OutboundLink")],1),a._v(" : https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/8/")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819155401.png",alt:"image-20210819155400901"}})]),a._v(" "),s("p",[s("strong",[a._v("默认地址安装 --- 安装路径不要有中文")])]),a._v(" "),s("p",[a._v("安装完成后使用 "),s("code",[a._v("java")]),a._v(" 和 "),s("code",[a._v("javac")]),a._v(" 进行验证")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819155559.png",alt:"image-20210819155559175"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819155626.png",alt:"image-20210819155626411"}})]),a._v(" "),s("h4",{attrs:{id:"_2-配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置环境变量"}},[a._v("#")]),a._v(" 2. 配置环境变量")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("JAVA_HOME\n\nC:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Program Files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("jdk1.8.0_191\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819160950.png",alt:"image-20210819160950557"}})]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CLASSPATH\n\nC:\\Program Files\\Java\\jdk1.8.0_191\\lib\\tools.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819161256.png",alt:"image-20210819161255901"}})]),a._v(" "),s("p",[a._v("在 path 中配置 "),s("code",[a._v("jdk")]),a._v(" 和 "),s("code",[a._v("jre")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Program Files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("jdk1.8.0_191"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("bin\n\nC:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Program Files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("jdk1.8.0_191"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("jre"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("bin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819162051.png",alt:"image-20210819162051736"}})]),a._v(" "),s("h4",{attrs:{id:"_3-mac-环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-mac-环境配置"}},[a._v("#")]),a._v(" 3. mac 环境配置")]),a._v(" "),s("p",[a._v("打开终端，打开 profile 文件（需要输入密码）")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819172911.png",alt:"image-20210819172910926"}})]),a._v(" "),s("p",[a._v("在文件末尾添加在文件末尾添加JAVA_HOME路径（切换英文输入法，键入“i”，进入插入模式）：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Library/Java/JavaVirtualMachines/jdk9.0.1.jdk/Contents/Home/"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASS_PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v('/lib"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v('".:'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("里面jdk-9.0.1.jdk，是一个文件夹，根据你安装的 JDK 版本，具体查看方式：打开Finder，快捷键 “Command +shift + G”，输入/Library/Java/JavaVirtualMachines/，单击回车，就可以看到。")]),a._v(" "),s("h3",{attrs:{id:"_3-安装-sdk-及-配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-sdk-及-配置环境变量"}},[a._v("#")]),a._v(" 3. 安装 SDK 及 配置环境变量")]),a._v(" "),s("h4",{attrs:{id:"_1-安装-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-sdk"}},[a._v("#")]),a._v(" 1. 安装 SDK")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.androiddevtools.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("SDK 下载地址"),s("OutboundLink")],1),a._v(" : https://www.androiddevtools.cn/")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819164752.png",alt:"image-20210819164752259"}})]),a._v(" "),s("p",[a._v("安装路径不能有中文")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819165714.png",alt:"image-20210819165713929"}})]),a._v(" "),s("h4",{attrs:{id:"_2-配置环境变量-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置环境变量-2"}},[a._v("#")]),a._v(" 2. 配置环境变量")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ANDROID_HOME\n\nC:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Program Files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x86"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("andorid-sdk\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819170031.png",alt:"image-20210819170031335"}})]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("path")]),a._v(" 中配置")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("%ANDROID_HOME%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("tools\n%ANDROID_HOME%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("platform-tools\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819170427.png",alt:"image-20210819170427547"}})]),a._v(" "),s("p",[a._v("安装后，使用 "),s("code",[a._v("adb version")]),a._v(" 进行验证")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819170938.png",alt:"image-20210819170938640"}})]),a._v(" "),s("h4",{attrs:{id:"_3-mac-环境变量配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-mac-环境变量配置"}},[a._v("#")]),a._v(" 3. MAC 环境变量配置")]),a._v(" "),s("p",[a._v("在终端中输入 vim .bash_profile，打开配置文件后，在文件末尾添加以下2行")]),a._v(" "),s("p",[a._v("问号部分要改成你自己电脑的家目录名称")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":/Users/???/Library/Android/sdk/tools\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":/Users/???/Library/Android/sdk/platform-tools\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("保存后，在终端执行 source .bash_profile")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("adb version")]),a._v(" 检查环境")]),a._v(" "),s("h3",{attrs:{id:"_4-安装-appium-图形应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装-appium-图形应用"}},[a._v("#")]),a._v(" 4. 安装 appium 图形应用")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/appium/appium-desktop/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("appium 下载地址"),s("OutboundLink")],1),a._v(" : http://appium.io/")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://pupperc.com/img/20210819172036.png",alt:"image-20210819172036291"}})]),a._v(" "),s("h3",{attrs:{id:"_5-安装-appium-python-client-库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装-appium-python-client-库"}},[a._v("#")]),a._v(" 5. 安装 Appium-Python-Client 库")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" Appium-Python-Client\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);