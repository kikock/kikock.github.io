var posts=["2024/05/22/CFWorkerTrojan/","2024/06/12/Docker仓库镜像代理工具/","2024/05/21/GitHubActions/","2024/05/17/Git命令汇总/","2024/07/10/Lambda表达式和函数式接口/","2024/06/03/Linux系统MCSM10面板搭建/","2024/06/06/Nginx配置文件查看方法/","2024/07/26/OpenWrt配置MosDNS+passwall/","2024/07/10/SpringBoot整合Minio文件存储服务/","2024/06/16/Telegram：新手指南、使用教程及频道推荐/","2024/06/12/docker入门/","2024/05/21/docker安装教程/","2024/07/09/java新特性Stream流/","2024/06/26/linux挂载新硬盘到home目录下/","2024/03/17/mysql数据备份命令/","2024/07/16/海外服务器常用一键测试脚本/","2024/06/24/群晖Docker部署OpenWRT旁路由/","2024/06/05/若依框架docker部署/","2023/03/12/设计模式_单例模式/","2023/04/11/设计模式_原型模式/","2023/03/21/设计模式_工厂模式/","2023/04/13/设计模式_建造者模式/","2023/03/01/设计模式概述/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };