#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist


# deploy to github
echo 'pupper.cn' > CNAME
if [ -z "$ACCESS_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:Pupper0601/vuepress-theme-vdoing.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://Pupper0601:${ACCESS_TOKEN}@github.com/Pupper0601/vuepress-theme-vdoing.git
  git config --global user.name "Pupper0601"
  git config --global user.email "gdmuye@qq.com"
fi
git config --global user.name "Pupper0601"
git config --global user.email "gdmuye@qq.com"
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl main:gh-pages # 推送到github




# # deploy to coding
# echo 'pupper.cn' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:j8014lx/vuepress/vuepress-theme-vdoing.git
# else
#   codingUrl=https://j8014lx:${CODING_TOKEN}@e.coding.net/vuepress-theme-vdoing/vuepress-theme-vdoing.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
