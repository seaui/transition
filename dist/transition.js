/*!
 * SeaUI: transition.js v1.0.0
 * Copyright 2013-2014 chanh
 * Licensed under MIT(https://github.com/seaui/transition/blob/master/LICENSE)
 */
define("seaui/transition/1.0.0/transition",["jquery/jquery/1.10.1/jquery"],function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}var c=a("jquery/jquery/1.10.1/jquery");c.fn.emulateTransitionEnd=function(a){var b=!1,d=this;c(this).one(c.support.transition.end,function(){b=!0});var e=function(){b||c(d).trigger(c.support.transition.end)};return setTimeout(e,a),this},c(function(){c.support.transition=b()})});
