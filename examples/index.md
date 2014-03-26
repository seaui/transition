# Demo

---

## Normal usage

````javascript
seajs.use(['$', 'transition'], function($) {
	var $ele = $('<div></div>');
    $.support.transition &&  $ele
        .one($.support.transition.end, callback)
        .emulateTransitionEnd(200);
    function callback(){
	    alert("您的浏览器支持 CSS3 transition");
	}
});
````
