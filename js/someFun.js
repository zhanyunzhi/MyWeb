/**
 * Created by zhan on 2016/3/23.
 */
/*
* 返回一个继续自原型对象p的属性的新对象
* 这里使用ECMAScript 5中的Object.create()函数（如果存在的话）
* 如果不存在Object.create()，则退化使用其他方法
* */
function inherit(p) {
    if(p==null){        //p是一个对象，但是不能是null
        throw TypeError();
    }
    if(Object.create){      //如果Object.create()存在
        return Object.create(p);
    }
    var t = typeof p;
    if(t !== "Object" && t !== "function"){
        throw TypeError();
    }
    function f() {};        //定义一个空函数
    f.prototype = p;         //使其原型属性设置为p
    return new f();         //使用f()创建p的继承
}