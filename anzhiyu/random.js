var posts=["2024/05/21/GitHubActions/","2024/05/17/Git命令汇总/","2024/05/21/docker安装教程/","2024/05/18/设计模式_单例模式/","2024/05/20/设计模式_工厂模式/","2024/05/04/设计模式概述/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };