/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Updated date in footer
    const updatedEl = document.getElementById('updated');
    if (updatedEl) {
        const now = new Date();
        updatedEl.textContent = 'Aktualizováno: ' + now.toLocaleDateString('cs-CZ', { year:'numeric', month:'long', day:'numeric' });
    }

    // Countdown to ceremony: 22. 08. 2026 11:00 (month is 0-based => 7 = August)
    const target = new Date(2026, 7, 22, 11, 0, 0);
    const $dys = document.getElementById('cdDays');
    const $hrs = document.getElementById('cdHours');
    const $min = document.getElementById('cdMins');
    const $sec = document.getElementById('cdSecs');
    const $note = document.getElementById('cdNote');

    function pad2(n){ return String(n).padStart(2, '0'); }

    function tick(){
        if(!$dys || !$hrs || !$min || !$sec) return;

        const now = new Date();
        let diff = target.getTime() - now.getTime();

        if(diff <= 0){
            $dys.textContent = '0';
            $hrs.textContent = '00';
            $min.textContent = '00';
            $sec.textContent = '00';
            if($note) $note.textContent = 'Obřad právě začíná.';
            return;
        }

        const totalSec = Math.floor(diff / 1000);
        const days = Math.floor(totalSec / 86400);
        const hours = Math.floor((totalSec % 86400) / 3600);
        const mins = Math.floor((totalSec % 3600) / 60);
        const secs = totalSec % 60;

        $dys.textContent = String(days);
        $hrs.textContent = pad2(hours);
        $min.textContent = pad2(mins);
        $sec.textContent = pad2(secs);
    }

    tick();
    setInterval(tick, 250);

});
