# transition

---

Transition.js是针对 transitionEnd事件的一个基本助手工具，也是对CSS过渡效果的模拟。它被其它插件用来检测当前浏览器对CSS过渡效果是否支持。

---

## 关于过渡效果

对于简单的过渡效果，只需将transition.js和其它JS文件一起引入即可。如果你使用的是编译（或压缩）好的js文件，就无需再单独将其引入了。

## 使用说明

```javascript
seajs.use(['$', 'transition'], function($) {
    $.support.transition &&  $element
        .one($.support.transition.end, callback)
        .emulateTransitionEnd(duration);
});
```
