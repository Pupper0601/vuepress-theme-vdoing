(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{583:function(s,t,a){"use strict";a.r(t);var e=a(30),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-技术"}},[s._v("#")]),s._v(" Git 技术")]),s._v(" "),a("h2",{attrs:{id:"一、-git-工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-git-工作流程"}},[s._v("#")]),s._v(" 一、 git 工作流程")]),s._v(" "),a("ol",[a("li",[s._v("克隆远程仓库到本地 （"),a("code",[s._v("clone")]),s._v("）")]),s._v(" "),a("li",[s._v("在本地仓库中 checkout 代码 --- 进行编程 或者拉取 远程仓库代码（"),a("code",[s._v("pull")]),s._v("）")]),s._v(" "),a("li",[s._v("在提交到本地仓库前 --- 需要到暂存区")]),s._v(" "),a("li",[s._v("提交到本地仓库 （"),a("code",[s._v("commit")]),s._v("）")]),s._v(" "),a("li",[s._v("推送到远程仓库（"),a("code",[s._v("push")]),s._v("）")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210731153241.png",alt:"image-20210731153241039"}})]),s._v(" "),a("h2",{attrs:{id:"二、-gitlab-搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、-gitlab-搭建"}},[s._v("#")]),s._v(" 二、 gitlab 搭建")]),s._v(" "),a("h3",{attrs:{id:"_1-创建-gitlab-挂载目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-gitlab-挂载目录"}},[s._v("#")]),s._v(" 1. 创建 gitlab 挂载目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/github\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/github\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" config logs data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-拉取-gtilab-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-拉取-gtilab-镜像"}},[s._v("#")]),s._v(" 2. 拉取 gtilab 镜像")]),s._v(" "),a("h4",{attrs:{id:"_1-搜索镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-搜索镜像"}},[s._v("#")]),s._v(" 1. 搜索镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker search gitlab\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210731154603.png",alt:"image-20210731154602775"}})]),s._v(" "),a("h4",{attrs:{id:"_2-拉取-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-拉取-镜像"}},[s._v("#")]),s._v(" 2. 拉取 镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker pull gitlab/gitlab-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210731155052.png",alt:"image-20210731155052757"}})]),s._v(" "),a("h4",{attrs:{id:"_3-检查-拉取的镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-检查-拉取的镜像"}},[s._v("#")]),s._v(" 3. 检查 拉取的镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210731155129.png",alt:"image-20210731155129247"}})]),s._v(" "),a("h3",{attrs:{id:"_3-创建-gitlab-容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-gitlab-容器"}},[s._v("#")]),s._v(" 3. 创建 gitlab 容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker run -id -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(":443 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9001")]),s._v(":80 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8022")]),s._v(":22 --hostname 服务器IP --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gitlab --restart always -v /var/gitlab/config:/etc/gitlab -v /var/gitlab/logs:/var/log/gitlab -v /var/gitlab/data:/var/opt/gitlab -v /etc/localtime:/etc/localtime:ro --privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true gitlab/gitlab-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-gitlab-验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-gitlab-验证"}},[s._v("#")]),s._v(" 4.  gitlab 验证")]),s._v(" "),a("p",[s._v("网页打开："),a("code",[s._v("服务器ip:9001")])]),s._v(" "),a("blockquote",[a("p",[s._v("默认用户名为："),a("code",[s._v("root")])]),s._v(" "),a("p",[s._v("初始登录需要修改密码，8位以上")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210731172239.png",alt:"image-20210731172238747"}})]),s._v(" "),a("h3",{attrs:{id:"_5-报-502-错误解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-报-502-错误解决办法"}},[s._v("#")]),s._v(" 5. 报 502 错误解决办法")]),s._v(" "),a("h4",{attrs:{id:"_1-进入容器-重启服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-进入容器-重启服务"}},[s._v("#")]),s._v(" 1. 进入容器 重启服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器名或id /bin/bash\n\ngitlab-ctl reconfigure\ngitlab-ctl restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_2-端口占用-修改端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-端口占用-修改端口"}},[s._v("#")]),s._v(" 2. 端口占用 --- 修改端口")]),s._v(" "),a("p",[s._v("使用工具打开文件 "),a("code",[s._v("hostconfig.json")]),s._v("，修改 大括号内的 端口号（宿主机端口）")]),s._v(" "),a("p",[s._v("文件目录："),a("code",[s._v("/var/lib/docker/containers/容器id")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"PortBindings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"22/tcp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"HostIp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"HostPort"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8022"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"443/tcp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"HostIp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"HostPort"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"443"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"80/tcp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"HostIp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"HostPort"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9002"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210731174432.png",alt:"image-20210731174432443"}})]),s._v(" "),a("h4",{attrs:{id:"_3-内存占用过多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-内存占用过多"}},[s._v("#")]),s._v(" 3. 内存占用过多")]),s._v(" "),a("h2",{attrs:{id:"三、-git客户端安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、-git客户端安装"}},[s._v("#")]),s._v(" 三、 git客户端安装")]),s._v(" "),a("h3",{attrs:{id:"_1-下载-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-客户端"}},[s._v("#")]),s._v(" 1. 下载 客户端")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("git官网地址"),a("OutboundLink")],1),s._v(" https://git-scm.com/downloads")]),s._v(" "),a("p",[a("strong",[s._v("点击 downloads 中的 windows 下载")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803111538.png",alt:"image-20210803111538328"}})]),s._v(" "),a("h3",{attrs:{id:"_2-安装-git-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-git-客户端"}},[s._v("#")]),s._v(" 2. 安装 git 客户端")]),s._v(" "),a("p",[s._v("无脑安装")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803112456.png",alt:"image-20210803112456438"}})]),s._v(" "),a("h3",{attrs:{id:"_3-git-可视化工具-gitkraken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-git-可视化工具-gitkraken"}},[s._v("#")]),s._v(" 3. git 可视化工具 --- GitKraken")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.gitkraken.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitKraken 下载地址"),a("OutboundLink")],1),s._v(" ： https://www.gitkraken.com/")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/k-skye/gitkraken-chinese",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitKraken 汉化地址"),a("OutboundLink")],1),s._v(" ： https://github.com/k-skye/gitkraken-chinese")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803151413.png",alt:"image-20210803151412883"}})]),s._v(" "),a("h3",{attrs:{id:"_4-本地仓库创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-本地仓库创建"}},[s._v("#")]),s._v(" 4. 本地仓库创建")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("新建文件夹")])]),s._v(" "),a("li",[a("p",[s._v("查看 git 版本")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在文件夹上 右键 --- git bash Here")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803151914.png",alt:"image-20210803151914456"}})])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" --version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("环境 配置（全局配置） --- 选配")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Pupper"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name.email"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gdmuye@qq.com"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("初始化本地仓库 --- 文件夹内 --- git bash here")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("克隆远程仓库 --- 如果端口不是 80，则需要添加")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone 远程仓库的url 端口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"四、git-分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、git-分支操作"}},[s._v("#")]),s._v(" 四、git 分支操作")]),s._v(" "),a("h3",{attrs:{id:"_1-查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看分支"}},[s._v("#")]),s._v(" 1. 查看分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" brach -a    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看远程分支")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地分支")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803162219.png",alt:"image-20210803162219415"}})]),s._v(" "),a("h3",{attrs:{id:"_2-新建分支-并-切换到-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-新建分支-并-切换到-分支"}},[s._v("#")]),s._v(" 2. 新建分支 并 切换到 分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b  dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803162330.png",alt:"image-20210803162330095"}})]),s._v(" "),a("h3",{attrs:{id:"_3-切换-分支目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-切换-分支目录"}},[s._v("#")]),s._v(" 3. 切换 分支目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803163245.png",alt:"image-20210803163244958"}})]),s._v(" "),a("h3",{attrs:{id:"_4-合并分支-dev分支-合并到-master上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-合并分支-dev分支-合并到-master上"}},[s._v("#")]),s._v(" 4. 合并分支 --- dev分支 合并到 master上")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注意：一定要在master分支上合并")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803163508.png",alt:"image-20210803163508504"}})]),s._v(" "),a("h3",{attrs:{id:"_5-远程仓库没有分支时推送分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-远程仓库没有分支时推送分支"}},[s._v("#")]),s._v(" 5. 远程仓库没有分支时推送分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_6-删除远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-删除远程分支"}},[s._v("#")]),s._v(" 6. 删除远程分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin:dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"五、-pycharm-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、-pycharm-设置"}},[s._v("#")]),s._v(" 五、 pycharm 设置")]),s._v(" "),a("h3",{attrs:{id:"_1-克隆-远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-克隆-远程仓库"}},[s._v("#")]),s._v(" 1. 克隆 远程仓库")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803165347.png",alt:"image-20210803165346983"}})]),s._v(" "),a("h3",{attrs:{id:"_2-新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-新建分支"}},[s._v("#")]),s._v(" 2. 新建分支")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803165706.png",alt:"image-20210803165705864"}})]),s._v(" "),a("h3",{attrs:{id:"_3-切换分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-切换分支"}},[s._v("#")]),s._v(" 3. 切换分支")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pupperc.com/img/20210803165810.png",alt:"image-20210803165810245"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);