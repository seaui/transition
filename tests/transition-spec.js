define(function(require) {

	require('../src/transition');
	var expect = require('expect');
	var $ = require('$');

  describe('transition', function() {

    it('normal usage', function() {
    	var $ele = $('<div></div>');
	    $.support.transition &&  $ele
	        .one($.support.transition.end, callback)
	        .emulateTransitionEnd(200);
	    function callback(){
		    expect(true).to.be.ok();
		}
    });
  });

});
