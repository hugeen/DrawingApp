/* Thumbs usage
<!-- include before all javascript -->
<script type="text/javascript" src="thumbs.js"></script>

// later on...

element.addEventListener('touchstart', callback, false);

// or an attribute...

element.setAttribute('ontouchstart', 'console.log("hi");');

// or an inline attribute...

<a href="#" ontouchstart="console.log('hi');">Hi</a>
*/