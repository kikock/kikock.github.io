var posts=["2024/05/13/hello-world/","2024/05/17/Git命令汇总/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };