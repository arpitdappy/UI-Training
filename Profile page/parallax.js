'use strict';
let root = document.documentElement;
window.addEventListener('scroll', function() {
    root.style.setProperty('--scroll-y-for-y',(pageYOffset*500)/window.innerHeight+'px');
    root.style.setProperty('--scroll-y-for-z',(pageYOffset*500)/window.innerHeight+'px');

});