var menu = $('nav#menu');

var watcher = scrollMonitor.create( menu );

watcher.lock();

watcher.stateChange(function() {
    $(menu).toggleClass('scrolled', this.isAboveViewport)
});

//js voor narrow navigatie
document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function() {
        this.classList.toggle( "active" );
});
