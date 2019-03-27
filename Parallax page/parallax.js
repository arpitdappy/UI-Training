'use strict';
let root = document.documentElement;
window.addEventListener('scroll', function () {
    root.style.setProperty('--scale-ratio', pageYOffset < 100 ? 1 + pageYOffset / 1000 : 1.1);
    root.style.setProperty('--transform-y', pageYOffset < 100 ? pageYOffset * 1.5 + 'px' : 150 + 'px');
    root.style.setProperty('--names-opacity', calculateOpacity(pageYOffset, document.documentElement.scrollHeight));
    });

function calculateOpacity(YOffset, scrollHeight) {
    let scrollRatio = (YOffset / scrollHeight);
    if (scrollRatio < 0.30) {
        return ((scrollRatio-0.18) * 5);
    }
    else if (scrollRatio > 0.30 && scrollRatio < 0.50) {
        return ((0.5 - scrollRatio) * 5);
    }
    else {
      return  0;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let topLevelNav = document.querySelector('.top-level-nav');
    let secondLevelNavSection = document.querySelector('.second-level-nav-section');
    let body = document.querySelector('body');
    for (const iterator of topLevelNav.children) {
        iterator.addEventListener('mouseover', function () {
            secondLevelNavSection.classList.add('show');
            body.classList.add('no-scroll');
            let navElementId = iterator.getAttribute('data-id');
            let navElement = document.querySelector('.second-level-nav[data-id=' + navElementId + ']');
            let secondLevelNavItems = document.querySelectorAll('.second-level-nav');
            secondLevelNavItems.forEach(function (element) {
                element.classList.remove('show');
                element.classList.add('hide');
            });
            navElement.classList.remove('hide');
            navElement.classList.add('show');
        });
        secondLevelNavSection.addEventListener('mouseleave', function () {
            secondLevelNavSection.classList.remove('show');
            body.classList.remove('no-scroll');
            secondLevelNavSection.classList.add('hide');
        });
    }
});