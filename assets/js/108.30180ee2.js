(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{638:function(s,a,t){"use strict";t.r(a);var e=t(30),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos-中-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-中-部署"}},[s._v("#")]),s._v(" CentOS 中 部署")]),s._v(" "),t("blockquote",[t("p",[s._v("说明：我们安装MySQL位置在 /usr/local 下")])]),s._v(" "),t("h2",{attrs:{id:"第一步、下载mysql-安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步、下载mysql-安装包"}},[s._v("#")]),s._v(" 第一步、下载MySQL 安装包：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装mysql 安装源：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum -y localinstall mysql57-community-release-el7-11.noarch.rpm \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"第二步-在线安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步-在线安装mysql"}},[s._v("#")]),s._v(" 第二步，在线安装MySQL")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://pupperc.com/img/20210615140728.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"第三步、启动mysql-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步、启动mysql-服务"}},[s._v("#")]),s._v(" 第三步、启动mysql 服务")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl start mysqld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"第四步-设置开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四步-设置开机启动"}},[s._v("#")]),s._v(" 第四步，设置开机启动")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mysqld\n\nsystemctl daemon-reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"第五步-修改root登录密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第五步-修改root登录密码"}},[s._v("#")]),s._v(" 第五步，修改root登录密码")]),s._v(" "),t("p",[s._v("mysql安装完成之后，会在"),t("code",[s._v("/var/log/mysqld.log")]),s._v("文件中给root生成了一个临时的默认密码。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/log/mysqld.log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://pupperc.com/img/20210615140913.png",alt:"image-20210615140913397"}})]),s._v(" "),t("p",[s._v("记住初始密码，修改root 密码，设置远程登录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首次进入 MySQL")]),s._v("\nmysql -u root -p\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改初始化密码")]),s._v("\nALTER "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程登录")]),s._v("\nGRANT ALL PRIVILEGES ON *.* TO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的密码'")]),s._v(" WITH GRANT OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://pupperc.com/img/20210615141222.png",alt:"image-20210615141222761"}})]),s._v(" "),t("h2",{attrs:{id:"第六步-退出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第六步-退出"}},[s._v("#")]),s._v(" 第六步，退出")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> exit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"第七步-防火墙开放3306端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第七步-防火墙开放3306端口"}},[s._v("#")]),s._v(" 第七步，防火墙开放3306端口")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/sysconfig/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" iptables\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加代码如下")]),s._v("\n-A INPUT -p tcp --dport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(" -j ACCEPT\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"第八步-重启防火墙。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第八步-重启防火墙。"}},[s._v("#")]),s._v(" 第八步，重启防火墙。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables  restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"第九步-配置mysql默认编码为utf-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第九步-配置mysql默认编码为utf-8"}},[s._v("#")]),s._v(" 第九步，配置mysql默认编码为utf-8")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加如下代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("character_set_server")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("init_connect")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SET NAMES utf8'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v(":wq 保存退出")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pupperc.com/img/20210615141726.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"第十步-重启mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第十步-重启mysql"}},[s._v("#")]),s._v(" 第十步，重启MySQL")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl restart mysqld\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"第十一步-root-用户登录查看编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第十一步-root-用户登录查看编码"}},[s._v("#")]),s._v(" 第十一步， root 用户登录查看编码")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost sysconfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  mysql -u root -p")]),s._v("\nEnter password: \nWelcome to the MySQL monitor.  Commands end with "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" or "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("g.\nYour MySQL connection "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" is "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nServer version: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v(".29 MySQL Community Server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nCopyright "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(", Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'help;'")]),s._v(" or "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\h'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" help. Type "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\c'")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" the current input statement.\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show variables like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%character%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+--------------------------+----------------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Value                      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_client     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_connection "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_database   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_filesystem "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" binary                     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_results    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_server     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_system     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_sets_dir       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/share/mysql/charsets/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------------------+\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" rows "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("h2",{attrs:{id:"第十二步-本地连接数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第十二步-本地连接数据库"}},[s._v("#")]),s._v(" 第十二步 本地连接数据库")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pupperc.com/img/20210615142222.png",alt:"image-20210615142222540"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);