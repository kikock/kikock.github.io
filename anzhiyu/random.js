var posts=["2024/05/22/CFWorkerTrojan/","2024/05/21/GitHubActions/","2024/05/17/Git命令汇总/","2024/06/03/Linux系统MCSM10面板搭建/","2024/06/06/Nginx配置文件查看方法/","2024/05/21/docker安装教程/","2024/06/05/若依框架docker部署/","2024/05/18/设计模式_单例模式/","2024/05/20/设计模式_工厂模式/","2024/05/04/设计模式概述/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };