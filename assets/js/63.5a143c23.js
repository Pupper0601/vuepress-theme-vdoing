(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{593:function(_,t,v){"use strict";v.r(t);var e=v(30),s=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"scoket-网络编程技术-实战"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#scoket-网络编程技术-实战"}},[_._v("#")]),_._v(" Scoket 网络编程技术---实战")]),_._v(" "),v("h2",{attrs:{id:"一、端口扫描的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、端口扫描的原理"}},[_._v("#")]),_._v(" 一、端口扫描的原理")]),_._v(" "),v("p",[_._v("端口扫描原理 ： 尝试与目标主机建立连接，如果目标主机有回复则说明端口开放。")]),_._v(" "),v("p",[_._v("TCP 连接 ： 通过使用三次握手 与目标主机建立标准的 tcp 连接。这种方法更容易被发现，被目标主机记录。")]),_._v(" "),v("p",[_._v("实现简单，对操者权限没有严格要求")]),_._v(" "),v("h2",{attrs:{id:"二、设计方案规划"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、设计方案规划"}},[_._v("#")]),_._v(" 二、设计方案规划")]),_._v(" "),v("ol",[v("li",[_._v("建立 TCP 连接")]),_._v(" "),v("li",[_._v("查看连接返回")]),_._v(" "),v("li",[_._v("判断连接返回值")]),_._v(" "),v("li",[_._v("循环扫描剩余端口")])]),_._v(" "),v("h2",{attrs:{id:"三、代码实现功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、代码实现功能"}},[_._v("#")]),_._v(" 三、代码实现功能")]),_._v(" "),v("h3",{attrs:{id:"socket-family-tupe"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#socket-family-tupe"}},[_._v("#")]),_._v(" "),v("strong",[v("code",[_._v("socket（family，tupe）")])])]),_._v(" "),v("ul",[v("li",[v("p",[v("code",[_._v("family")]),_._v(" ： 代表家族地址。可为 "),v("code",[_._v("AF_INET")]),_._v(" 或者 "),v("code",[_._v("AF_UNIX")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("AF_INET")]),_._v(" ： 包含 "),v("strong",[_._v("Internet")]),_._v(" 地址")]),_._v(" "),v("li",[v("code",[_._v("AF_UNIX")]),_._v(" ： 用于同一台机器上的进程间的通信。")])])]),_._v(" "),v("li",[v("p",[v("code",[_._v("type")]),_._v(" ： 代表 套接字 类型。 可为 "),v("code",[_._v("SOCK_STREAM")]),_._v(" 或者 "),v("code",[_._v("SOCK_DGRAM")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("SOCK_STREAM")]),_._v(" ： 流套接字， 也叫 "),v("strong",[_._v("TCP 套接字")])]),_._v(" "),v("li",[v("code",[_._v("SOCK_DGRAM")]),_._v(" ： 数据报套接字， 也叫 "),v("strong",[_._v("UDP 套接字")])])])]),_._v(" "),v("li",[v("p",[_._v("默认为 "),v("code",[_._v("family = AF_INET")]),_._v(" "),v("code",[_._v("type = SOCK_STREAM")])])])]),_._v(" "),v("h3",{attrs:{id:"客户端-套接字"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#客户端-套接字"}},[_._v("#")]),_._v(" 客户端 套接字")]),_._v(" "),v("ul",[v("li",[v("p",[v("code",[_._v("s.connect（）")]),_._v(" ： 主动初始化 TCP 服务器连接。")]),_._v(" "),v("ul",[v("li",[_._v("一般 "),v("strong",[_._v("address")]),_._v(" 的格式 "),v("strong",[_._v("元组（hostname，port）")]),_._v("，如果连接出错，返回 "),v("strong",[_._v("socket.error 错误")])])])]),_._v(" "),v("li",[v("p",[v("code",[_._v("s.connect_ex（）")]),_._v(" ： connect（） 函数的扩展版本，出错时返回出错码，而不是抛出异常。")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);