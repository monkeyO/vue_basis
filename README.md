# 说明

1.修改config/index.js中proxyTable的target地址可解决本地跨域问题；

2.开发环境API可根据上一条进行修改，或修改config/dev.env.js中的API_ROOT

3.正式或测试服API需修改config/prod.env.js中的API_ROOT；

4.src/api用来配置管理接口；

5.src/view用来存放页面；

6.src/util用来放置通用的工具类js，如日期格式化等；

7.需设置某一页的title，已配置好全局指令，可在需要的页面最外层div上添加指令：v-title；

8.需要缓存某个页面，可配置meta:keepAlive;


