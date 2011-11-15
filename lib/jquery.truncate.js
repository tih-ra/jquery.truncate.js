/*
 * jQuery Truncate
 * (c) Andriy Bazyuta 2011, https://github.com/tih-ra/jquery.truncate.js
 *
 *
 * $('.element').truncate( 50, $('label') );
 *
 * Version 0.0.1
 *
 * https://github.com/tih-ra/jquery.truncate.js
 */
;
jQuery(function ($) {
    $.fn.clearTruncate = function () {
        return this.each(function () {
            this.onkeydown = this.onkeyup = null;
        });
    };
    $.fn.truncate = function (limit, label) {
        return this.each(function () {
            this.limit = limit;
            this.label = label;
            this.span = $(" <span></span>");
            this.label.append(this.span);
            this.onkeydown = this.onkeyup = function () {
                this.value = this.value.substr(0, this.limit);
                this.reached = this.limit - this.value.length;
                this.reached = (this.reached == 0) ? true : false;
                this.span.html(this.limit - this.value.length);
                
            }
        });
    };
});