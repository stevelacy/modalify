/**
 * Modalify v0.1.0
 * http://github.com/stevelacy/modalify.git
 * Fully responsive, Sleak minimalism Flat design, Modal. 
 * Copyright 2014 - Steve Lacy me@slacy.me (http://slacy.me) 
 * License: MIT
**/
(function() {
  (function(plugin) {
    if (typeof define === "function" && define.amd) {
      define(["jquery"], plugin);
    } else {
      plugin(jQuery);
    }
  })(function($) {
    return $.fn.modalify = function(type, opts) {
      return this.each((function(_this) {
        return function() {
          var close, open, options;
          options = function(opts) {
            if (opts == null) {
              opts = {};
            }
            if (opts["in"] == null) {
              opts["in"] = 'fadeIn';
            }
            if (opts.out == null) {
              opts.out = 'fadeOut';
            }
            if (opts.speed == null) {
              opts.speed = 500;
            }
            _this.addClass("modalify");
            if (opts.height) {
              $(_this).css({
                height: opts.height
              });
            }
            return opts;
          };
          open = function(target, opts) {
            opts = options(opts);
            return $(target).stop()[opts["in"]](opts.speed);
          };
          close = function(target, opts) {
            opts = options(opts);
            return $(target).stop()[opts.out](opts.speed);
          };
          if (typeof type === "string") {
            if (type === "open") {
              open(_this, opts);
            }
            if (type === "close") {
              close(_this, opts);
            }
          } else {
            opts = type;
            open(_this, opts);
          }
          $(document).keyup(function(e) {
            if (e.keyCode !== 27) {
              return;
            }
            if (!$(_this).is(":visible")) {
              return;
            }
            return close(_this, opts);
          });
          return $(_this).find(".closeModalify").click(function() {
            return close(_this, opts);
          });
        };
      })(this));
    };
  });

}).call(this);
