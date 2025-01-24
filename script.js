(function(){
    'use strict';
    console.log("reading js");

    const nav = document.querySelector('#nav-button');

    nav.addEventListener('click', function(){
        mobileNav.showModal();
    })
})