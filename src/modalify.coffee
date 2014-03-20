$.fn.modalify = (opts) ->
  return @.each =>
    # set/get opts
    opts ?= {}
    opts.toggle ?= 'fadeToggle'
    opts.speed ?= 500
    # set target class
    element = @data "modalify"
    $(element).addClass "modalify"

    if opts.height
      $(element).css
        height: opts.height


    # Main function for toggling target's state
    $.fn.toggleModal = (target, opts) ->
      $(target).html("<div id='closeModal' class='closeModal'>&times;</div>#{$(target).html()}")
      $("#{target} #closeModal").click =>
        $(target).stop()[opts.toggle](opts.speed)
      $(target).stop()[opts.toggle](opts.speed)
    
    # Function for getting element's click
    $ @.click =>
      target = @data "modalify"
      $(target).toggleModal target, opts

    # Keyup for closing when esc is pressed
    $(document).keyup (e) ->
      return unless e.keyCode == 27
      return unless $(element).is ":visible"
      $(element).toggleModal element, opts    

