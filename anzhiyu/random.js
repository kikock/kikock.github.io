var posts=["2024/05/22/CFWorkerTrojan/","2024/06/12/Docker仓库镜像代理工具/","2024/05/21/GitHubActions/","2024/05/17/Git命令汇总/","2024/06/06/Nginx配置文件查看方法/","2025/01/16/OpenWrt养老旁路由从零开始/","2024/06/16/Telegram：新手指南、使用教程及频道推荐/","2024/10/16/Ubuntu 20.04.6 安装及其网络配置记录/","2024/06/12/docker入门/","2024/05/21/docker安装教程/","2024/03/17/mysql数据备份命令/","2024/10/10/云服务器gfw搭建记录/","2024/07/16/海外服务器常用一键测试脚本/","2024/06/24/群晖Docker部署OpenWRT旁路由/","2024/07/10/java/Lambda表达式和函数式接口/","20225/01/08/java/Optional认识并使用/","2025/02/11/java/SpringAOP简单应用/","2025/02/11/java/SpringBoot常用工具类/","2024/07/10/java/SpringBoot整合Minio文件存储服务/","2024/07/09/java/java新特性Stream流/","2024/11/08/java/使用SpringAOP优雅的实现异步文件上传/","2023/03/12/java/设计模式_单例模式/","2023/04/11/java/设计模式_原型模式/","2023/03/21/java/设计模式_工厂模式/","2023/04/13/java/设计模式_建造者模式/","2023/03/01/java/设计模式概述/","2024/12/06/liunx/Linux常用命令/","2024/06/26/liunx/Linux挂载新硬盘到home目录下/","2024/06/03/liunx/Linux系统MCSM10面板搭建/","2024/10/16/liunx/基于Ubuntu 20.04.06操作系统极速部署K8S集群/","2024/06/05/liunx/若依框架docker部署/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };