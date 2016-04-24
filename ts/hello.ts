// Boolean
var isDone: boolean = false;
var isDone1: boolean = false;
var isDone1: boolean = false;

// number
var height: number = 6;

// string
var name: string = "bob";
name = 'smith';

// Array
var list: number[] = [1, 2, 3];
var list1: Array<number> = [1, 2, 3];

// Enum
enum Color { Red, Green, Blue };
var c: Color = Color.Green;
var colorName: string = Color[2];

// 默认Enum类的数值是从0开始的。可以手动设置某一成员的数值
enum Color1 {Red = 1, Green, Blue};
var c1: Color1 = Color1.Green;

// 也可以手动设置全部枚举成员的数值
enum Color2 {Red = 1, Green = 2, Blue = 4};
var c2: Color2 = Color2.Green;

// Any
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// 混合了多种类型的数组
var list2: any[] = [1, true, "free"];
list2[1] = 100;

// void Void 有点像 Any 的反义词，它代表没有任何数据类型。常用来说明没有返回值的函数的返回类型。
function warnUser(): void {
    alert("This is my warning message");
}
