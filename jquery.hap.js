/*!
 * jquery.hap.js v1.0.1 (http://hap.themedron.com/)
 * @copyright 2015 ThemeDron, Inc (www.themedron.com).
 * @license GNU GPL V.3 (http://www.gnu.org/licenses/gpl-3.0.html)
 */

;(function($, window, document, undefined) {
  'use strict';
  (function() {
    function Set() {
      $(window).bind('load resize', function() {
        var width = $(window).width(),
            caclc = ((width / 100) * (10));
        $("body").css('font-size', caclc + "px");
      })
    };
    Set();
  }());
}(jQuery, window, document));
