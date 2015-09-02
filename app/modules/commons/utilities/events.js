import $ from 'jquery';

let toggleMenu = $('.toggle-menu'),
	menu 	   = $('.navbar-nav'),
	menuItem   = menu.find('ul li'),
	windows    = $(window),
	width      = 754;

toggleMenu.on('click', (e) => {
	e.preventDefault();
	menu.slideToggle();
});

menuItem.on('click', (e) => {
	if( windows.width() < width) {
		menu.delay(150).slideToggle();
	}
});

windows.resize(() => {
    let w = windows.width();
    if(w > width && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
}); 
