//用ES6语法定义一个类
export class Logger {
  constructor(selector) {
    this.host = document.querySelector(selector);
    this.host.innerHTML = "";
    this.el = document.createElement("pre");
    this.host.appendChild(this.el);
    this.lines = [];
  }
  log(str) {
    this.lines.push(str);
    this.el.textContent = this.lines.join("\n");
  }
  jay() {
    var el = document.createElement("img");
    el.setAttribute("src", "http://www.hubwiz.com/course/567a414e660c92d638a68bf3/img/jay.gif");
    document.body.appendChild(el);
  }
}
//实例化，测试一下
var _ = new Logger("ez-logger");
_.log("哎呦，不错哦！");
_.log("真的是用ES6写的噢！");
_.jay();
