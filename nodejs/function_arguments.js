// 基本类型的变量复制，可以看出基本类型变量存储的就是变量的值
var num1 = 1;
var num2 = num1;
console.log(num2); //1

// 引用类型的变量复制，可以看出引用变量中存储的是指向对象的引用
// Object对象存储于堆中，而obj1和obj2分别存储了指向此Object对象的引用
var obj1 = new Object();
obj1.name = "Jeremy";
var obj2 = obj1;
obj2.name = "James";
console.log(obj1.name); //James

function setName(obj) {
    obj.name = "James";
}

var person = new Object();
person.name = "Jeremy";
setName(person);
console.log(person.name);//James 影响到了外部引用变量

function setName(obj) {
    obj.name = "James";
    obj = new Object();
    obj.name = "Leon"
}

var person = new Object();
person.name = "Jeremy";
setName(person);
console.log(person.name);//James