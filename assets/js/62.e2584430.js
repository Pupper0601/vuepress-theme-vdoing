(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{592:function(s,t,a){"use strict";a.r(t);var n=a(30),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"socket-网络编程技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socket-网络编程技术"}},[s._v("#")]),s._v(" Socket 网络编程技术")]),s._v(" "),a("h2",{attrs:{id:"一、网络编程技术概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、网络编程技术概述"}},[s._v("#")]),s._v(" 一、网络编程技术概述")]),s._v(" "),a("h3",{attrs:{id:"_1-软件开发架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-软件开发架构"}},[s._v("#")]),s._v(" 1.软件开发架构")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("应用类 -- C/S架构")])]),s._v(" "),a("p",[a("code",[s._v("C/S")]),s._v(" ：客户端与服务器端架构，客户端 泛指 "),a("strong",[s._v("应用程序EXE")]),s._v(" ，程序需要先安装才能运行，对系统环境依赖较大。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("Web类 -- B/S 架构")])]),s._v(" "),a("p",[a("code",[s._v("B/S")]),s._v(" ：浏览器端与服务器端架构，用户通过 "),a("strong",[s._v("HTTP")]),s._v(" 请求服务器端相关的资源。")])])]),s._v(" "),a("h3",{attrs:{id:"_2-网络通信要素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-网络通信要素"}},[s._v("#")]),s._v(" 2.网络通信要素")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("IP地址")]),s._v(" ：互联网协议地址")]),s._v(" "),a("li",[a("strong",[s._v("端口")]),s._v(" ：设备与外界通讯交流的出口")]),s._v(" "),a("li",[a("strong",[s._v("传输协议")])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[a("strong",[s._v("IP 地址")]),s._v(" 精确到 "),a("strong",[s._v("具体的一台电脑")]),s._v("，而 "),a("strong",[s._v("端口")]),s._v(" 精确到 "),a("strong",[s._v("具体的程序")])])]),s._v(" "),a("h3",{attrs:{id:"_3-通信协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通信协议"}},[s._v("#")]),s._v(" 3.通信协议")]),s._v(" "),a("p",[s._v("通信协议：互联网的核心就是由一堆协议组成，协议就是标准。")]),s._v(" "),a("p",[a("strong",[s._v("七层网络协议模型")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/04/12/19Ou6yYI4PWfR8t.png",alt:"image-20210412113420283"}})]),s._v(" "),a("h2",{attrs:{id:"二、socket-通信流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、socket-通信流程"}},[s._v("#")]),s._v(" 二、Socket 通信流程")]),s._v(" "),a("h3",{attrs:{id:"_1-socket-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-socket-概念"}},[s._v("#")]),s._v(" 1.Socket 概念")]),s._v(" "),a("p",[a("code",[s._v("Socket")]),s._v(" ：是应用层与 TCP/IP 协议族通信的中间软件抽象层，它是一组接口。")]),s._v(" "),a("p",[s._v("​\t在设计模式中，"),a("strong",[s._v("Sorcket")]),s._v(" 其实就是一个门面模式，它把复杂的 "),a("strong",[s._v("TPC/IP")]),s._v(" 协议族隐藏在 "),a("strong",[s._v("Socket")]),s._v(" 接口后面，对用户来说，一组简单的接口就是全部，让 "),a("strong",[s._v("Socket")]),s._v(" 去组织数据，以符合指定的协议。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("1."),a("code",[s._v("websocket")]),s._v(" （应用层） ：通过 "),a("strong",[s._v("HTTP")]),s._v(" 协议进行传输，")]),s._v(" "),a("p",[s._v("2."),a("code",[s._v("socket")]),s._v(" （传输层） ：通过 "),a("strong",[s._v("TCP")]),s._v(" 协议进行传输")])]),s._v(" "),a("h3",{attrs:{id:"_2-socket实现方式-tcp-协议与-udp-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-socket实现方式-tcp-协议与-udp-协议"}},[s._v("#")]),s._v(" 2.Socket实现方式：TCP 协议与 UDP 协议")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("TCP")]),s._v(" 协议 ：可靠的、面向连接的协议（eg：打电话）、传输效率低全双工通信（发送缓存&接收缓存）、面向字节流。")]),s._v(" "),a("p",[a("strong",[s._v("主要用途")]),s._v("：Web浏览器、电子邮件、文件传输程序")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("UDP")]),s._v(" 协议 ： 不可靠的、无连接的服务，传输效率高，一对一、多对多、一对多、多对一、面向报文，尽最大的努力服务，无拥塞控制。")]),s._v(" "),a("p",[a("strong",[s._v("主要用途")]),s._v("：域名系统、视频流、IP 语音。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("TCP")]),s._v(" 和 "),a("code",[s._v("UDP")]),s._v(" 都是 "),a("strong",[s._v("传输层")]),s._v(" 的。")])])]),s._v(" "),a("p",[a("strong",[s._v("TCP")]),s._v(" 协议流程图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/04/12/3VMabl1NkPApzHQ.png",alt:"image-20210412130415047"}})]),s._v(" "),a("h3",{attrs:{id:"_3-socket-通信流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-socket-通信流程"}},[s._v("#")]),s._v(" 3. Socket 通信流程")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("服务器根据地址类型、Socket 类型、协议 "),a("strong",[s._v("创建 Scoket")]),s._v(" ；")])]),s._v(" "),a("li",[a("p",[s._v("服务器为 socket "),a("strong",[s._v("绑定IP地址和端口号")]),s._v(" ；")])]),s._v(" "),a("li",[a("p",[s._v("服务器 "),a("strong",[s._v("socket 监听端口号请求")]),s._v(" ，随时准备 接收客户端发送来的连接，这个时候服务器端的 Socket 并没有打开；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("客户端创建 Socket")]),s._v(" ；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("客户端打开 socket")]),s._v(" ，根据服务器 "),a("strong",[s._v("IP 地址")]),s._v("和 "),a("strong",[s._v("端口号")]),s._v(" 试图"),a("strong",[s._v("连接服务器 socket")]),s._v(" ；")])]),s._v(" "),a("li",[a("p",[s._v("服务器 Scoket 接收到客户端的 socket 请求，被动打开，"),a("strong",[s._v("开始接收客户端请求")]),s._v("，直到客户端返回连接信息。这个时候 socket 进入阻塞状态。")]),s._v(" "),a("p",[a("code",[s._v("阻塞状态")]),s._v("：即 "),a("code",[s._v("accept（）")]),s._v(" 方法一直等到客户端返回连接信息后才返回，开始接收下一个客户端连接请求。")])]),s._v(" "),a("li",[a("p",[s._v("**客户端连接成功，**"),a("strong",[s._v("向服务器发送连接状态信息")]),s._v("。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("服务器 accept 方法返回")]),s._v("，连接成功；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("客户端向 socket 写入信息")]),s._v("（或服务端向 socket 写入信息）；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("服务器读取信息")]),s._v("（客户端读取信息）；")])]),s._v(" "),a("li",[a("p",[s._v("客户端关闭；")])]),s._v(" "),a("li",[a("p",[s._v("服务器关闭。")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210628100531.png",alt:"image-20210412130714795"}})]),s._v(" "),a("h2",{attrs:{id:"socket-常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socket-常用方法"}},[s._v("#")]),s._v(" Socket 常用方法")]),s._v(" "),a("h3",{attrs:{id:"_1-python-的-socket-编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-python-的-socket-编程"}},[s._v("#")]),s._v(" 1.Python 的 Socket 编程")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("低级别的网络服务")]),s._v(" 支持基本的 "),a("code",[s._v("Socket")]),s._v(" ，它提供了标准的 BSD Socket API ，可以访问底层操作系统 Socket 接口的全部方法。")]),s._v(" "),a("li",[s._v("**高级别的网络服务 **模块 "),a("code",[s._v("SocketServer")]),s._v(" ， 它提供了服务器中心类，可以简化网络服务器的开发。")])]),s._v(" "),a("h3",{attrs:{id:"_2-什么是-socket-编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是-socket-编程"}},[s._v("#")]),s._v(" 2.什么是 Socket 编程")]),s._v(" "),a("p",[a("code",[s._v("socket")]),s._v(" ：又称 ”套接字“ ，应用程序通常通过 ”套接字“ 向网络发出请求或者应答网络请求，使主机间或者一台计算机上的进程间可以通讯。")]),s._v(" "),a("p",[s._v("使用 "),a("strong",[a("code",[s._v("socket（）")])]),s._v(" 函数来 "),a("strong",[s._v("创建 套接字")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("family"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("proto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("family")]),s._v(" ：套接字家族可以使 "),a("strong",[s._v("AF_UNIX")]),s._v(" 或者 "),a("strong",[s._v("AF_INET")]),s._v(" .")]),s._v(" "),a("li",[a("code",[s._v("type")]),s._v(" ：套接字类型可以根据是面向 "),a("strong",[s._v("连接")]),s._v(" 的还是 "),a("strong",[s._v("非连接")]),s._v(" 分为 "),a("strong",[s._v("SOCK_STREAM")]),s._v(" 或 "),a("strong",[s._v("SOCK_DGRAM")]),s._v(" .")]),s._v(" "),a("li",[a("code",[s._v("protocol")]),s._v(" ：一般不填默认为 "),a("strong",[s._v("0")]),s._v(" 。")])]),s._v(" "),a("h3",{attrs:{id:"_3-socket-服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-socket-服务端"}},[s._v("#")]),s._v(" 3. Socket 服务端")]),s._v(" "),a("ul",[a("li",[s._v("使用 "),a("strong",[s._v("socket 模块")]),s._v(" 的 "),a("strong",[s._v("socket 函数")]),s._v(" 来创建一个 "),a("code",[s._v("socket 对象")]),s._v("。socket 对象可以通过调用其他函数来设置一个 socket服务。")]),s._v(" "),a("li",[s._v("可以通过调用 "),a("code",[s._v("bind（hostname，port）")]),s._v("函数来指定服务的 port （端口）。")]),s._v(" "),a("li",[s._v("调用 "),a("strong",[s._v("socket 对象")]),s._v(" 的 "),a("code",[s._v("accept 方法")]),s._v("。该方法等待客户端的连接，并返回 "),a("strong",[s._v("connection 对象")]),s._v("，表示已连接到客户端。")])]),s._v(" "),a("h3",{attrs:{id:"_4-socket-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-socket-客户端"}},[s._v("#")]),s._v(" 4. Socket 客户端")]),s._v(" "),a("ul",[a("li",[a("strong",[a("code",[s._v("socket.connect(hosname, port)")])]),s._v(" 方法 打开一个 TCP 连接到主机为 hostname 端口为 port 的服务商。")]),s._v(" "),a("li",[s._v("连接后就可以从服务端获取数据，记住，操作完成 后需要 "),a("strong",[s._v("关闭连接")])])]),s._v(" "),a("h3",{attrs:{id:"_5-案例一-单个连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-案例一-单个连接"}},[s._v("#")]),s._v(" 5.案例一（单个连接）")]),s._v(" "),a("p",[a("strong",[s._v("服务端：")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket\n\nip_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.创建 socket 对象")]),s._v("\nsk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.绑定 ip port")]),s._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ip_port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.开启监听")]),s._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("listen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"---服务已经启动---"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.阻塞 等待连接  返回：socket连接对象（套接字）和 客户端IP")]),s._v("\nconn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("accept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"客户端的地址 >>> :"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.接收数据---客户端数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# recv() 需要文件宽度作为参数，一般为 1024")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 decode() 进行解码")]),s._v("\nreceive_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"接收客户端的数据 >>> ："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" receive_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.发送数据")]),s._v("\nsend_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入 >>> :"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sendall() 要求是 byte 类型，使用encode() 进行字符转换")]),s._v("\nconn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("send_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7.关闭 socket")]),s._v("\nconn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("客户端：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.创建 socket")]),s._v("\nsk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.连接到服务器")]),s._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"服务端连接成功"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.发送数据")]),s._v("\nsend_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入 >>> :"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sendall() 要求是 byte 类型，使用encode() 进行转码")]),s._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("send_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.接收服务端数据")]),s._v("\nserver_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"接收服务端的数据 >>> ："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" server_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.关闭 socket")]),s._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"案例二-多个连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例二-多个连接"}},[s._v("#")]),s._v(" 案例二（多个连接）：")]),s._v(" "),a("p",[s._v("服务端：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socketserver\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.需要继承一个类")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("sqServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("socketserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BaseRequestHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"聊天服务器上线了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接收客户端数据")]),s._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发送数据")]),s._v("\n                send_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入 >>> :"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("send_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" ConnectionResetError "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"一个客户端关闭了连接"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.创建服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ThreadingTCPServer 是使用多线程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ForkingTCPServer 是使用多进程处理并发")]),s._v("\nserver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socketserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ThreadingTCPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9998")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sqServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.一直在线")]),s._v("\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serve_forever"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("客户端：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.创建 socket")]),s._v("\nsk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.连接到服务器")]),s._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9998")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"服务端连接成功"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.发送数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    send_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"老王："')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入 >>> :"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" send_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'老王：'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sendall() 要求是 byte 类型，使用encode() 进行转码")]),s._v("\n        sk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("send_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.接收服务端数据")]),s._v("\n        server_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"接收服务端的数据 >>> ："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" server_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.关闭 socket")]),s._v("\nsk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);