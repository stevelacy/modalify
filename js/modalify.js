(function() {
  $.fn.modalify = function(opts) {
    return this.each((function(_this) {
      return function() {
        var element;
        if (opts == null) {
          opts = {};
        }
        if (opts.toggle == null) {
          opts.toggle = 'fadeToggle';
        }
        if (opts.speed == null) {
          opts.speed = 500;
        }
        element = _this.data("modalify");
        $(element).addClass("modalify");
        if (opts.height) {
          $(element).css({
            height: opts.height
          });
        }
        $.fn.toggleModal = function(target, opts) {
          $(target).html("<div id='closeModal' class='closeModal'>&times;</div>" + ($(target).html()));
          $("" + target + " #closeModal").click((function(_this) {
            return function() {
              return $(target).stop()[opts.toggle](opts.speed);
            };
          })(this));
          return $(target).stop()[opts.toggle](opts.speed);
        };
        $(_this.click(function() {
          var target;
          target = _this.data("modalify");
          return $(target).toggleModal(target, opts);
        }));
        return $(document).keyup(function(e) {
          if (e.keyCode !== 27) {
            return;
          }
          if (!$(element).is(":visible")) {
            return;
          }
          return $(element).toggleModal(element, opts);
        });
      };
    })(this));
  };

}).call(this);
