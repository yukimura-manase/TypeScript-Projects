"use strict";
console.log('ロボ玉');
// 型付けの方法
//変数、関数の引数、戻り値に対して : 型『コロン+型』の形式 で明示的に型を指定することができます。( | 区切りで複数可能)
var robo = 'ロボ玉';
var age = 2;
var RoboNum = function () {
    return robo + "\u306E\u5E74\u9F62\u306F\u3001\u4EBA\u9593\u63DB\u7B97\u3060\u3068" + age * 100;
};
console.log(RoboNum());
//# sourceMappingURL=index.js.map