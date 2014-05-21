((plugin) ->
  if typeof define is "function" and define.amd
    define ["jquery"], plugin
  else
    plugin jQuery
  return
) ($) ->

  $.fn.modalify = (type, opts) ->
    return @.each =>
      options = (opts) =>
        # set/get opts
        opts ?= {}
        opts.in ?= 'fadeIn'
        opts.out ?= 'fadeOut'
        opts.speed ?= 500

        # set target class
        @.addClass "modalify"

        if opts.height
          $(@).css
            height: opts.height
        return opts

      open = (target, opts) =>
        opts = options opts
        $(target).stop()[opts.in](opts.speed)


      close = (target, opts) =>
        opts = options opts
        $(target).stop()[opts.out](opts.speed)

      if typeof type == "string"
        if type == "open"
          open @, opts
        if type == "close"
          close @, opts
      else
        opts = type
        open @, opts
        
      # Keyup for closing when esc is pressed
      $(document).keyup (e) =>
        return unless e.keyCode == 27
        return unless $(@).is ":visible"
        close @, opts

      # Click an element in the modal with .closeModalify to close
      $(@).find(".closeModalify").click =>
        close @, opts
