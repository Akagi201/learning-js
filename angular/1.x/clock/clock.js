//监听DOM就绪事件
angular.element(document).ready(function() {
  //启动定时器
  setInterval(function() {
    //取当前时间
    var d = new Date();

    //使用text()方法更新DOM对象的文本内容
    var tpl = document.querySelector("#clock");
    angular.element(tpl).text(d.toString());

  }, 1000 /*1000毫秒触发1次*/ );
});
