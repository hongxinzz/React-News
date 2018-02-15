# React-News

基于React开发的响应式新闻网站


## 具体新闻API接口
* [获取新闻列表](http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10)
* [获取新闻详情](http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=161022191707874)
* [获取文章评论](http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=123)
* [新闻添加评论](http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=1&uniquekey=123&commnet=content)
* [收藏新闻](http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=1&uniquekey=123)
* [获取注册登入接口](http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=r_userName&r_password=r_password&r_confirmPassword=r_confirmPassword)
* [获取用户收藏](http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=1)
* [获取用户发出的评论](http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=1)

### 项目运行
    npm config set registry https://registry.npm.taobao.org 设置淘宝镜像 在执行npm时默认为cnpm
    npm init 初始化
    npm install 安装需要的环境
    npm webpack-dev-server 加载
    http://localhost:8080/
    
    
### 项目
          基于React+Reat Router开发
          实现了多组件之间的跳转，多模块重复使用，也体现React的核心理念
          组件化，每一个模块的组合。

          前端：页头，页尾，多图模块，列表新闻，新闻详情，评论模块和收藏模块 开发
          后端：简易的个人中心模块，包括 个人评论，收藏，以及头像更改

