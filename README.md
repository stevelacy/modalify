# Modalify

[stevelacy.github.io/modalify](https://stevelacy.github.io/modalify/)

#### Fully responsive, Sleak minimalism Flat design, Modal.

A jQuery plugin for responsive modals

<img src="https://raw.github.com/stevelacy/modalify/master/screenshot.png">

## Usage

Copy [modalify.js](https://raw.github.com/stevelacy/modalify/master/build/modalify.js) and [modalify.css](https://raw.github.com/stevelacy/modalify/master/build/modalify.css)
to your site folder.

Include them in the html along with [jQuery](http://jquery.com/download/)

```html
<link rel="stylesheet" type="text/css" href="modalify.css"/>
<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script type="text/javascript" src="modalify.js"></script>

```
Or require the plugin as an AMD loaded plugin.

## Example

```html

<div id="modal" class="hidden">
  Content here
</div>

<button id="showModal">Click to open</button>

```
Add the following to your html, or in your jQuery file.
```html
<script>
  $("#showModal").click(function(){
    $("#modal").modalify();
  });
</script>
```

## Building

Modalify is built with [gulp](https://github.com/gulpjs/gulp)

Commands:

`gulp` will build and run gulp.watchers with [livereload](https://github.com/napcs/node-livereload)

The built plugin will be in [build/](https://github.com/stevelacy/modalify/tree/master/build)


## API

```js
.modalify(String type, Object options);
```
### type
Open or Close modal

```
default: "open"
parameters: String "open", "close"
```

### options
```
default: "null"
parameters: Object
```

#### toggle

```
toggle: "option"
Default: "fadeToggle"
```

##### jQuery Toggle animation
    
    toggle
    fadeToggle
    slideToggle

#### speed

```
speed: milliseconds
speed: jQuery speed
Default: 500
```

##### millisecond time, or jQuery speed string.

    500
    1000
    "slow"
    "fast"

#### height

```
height: number size
Default: none
```

##### CSS size height
    
    500px
    20em
    50%


## License

The MIT License (MIT)

Copyright (c) 2014 Steve Lacy <me@slacy.me> http://slacy.me

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
