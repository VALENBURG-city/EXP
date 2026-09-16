let back = document.getElementById('back');
let trstPLANE = document.getElementById('trstPLANE');
let stPLANE = document.getElementById('stPLANE');
let bock = document.getElementById('bock');


window.addEventListener('scroll', function(){


    let value = window.scrollY;
    back.style.top = value * 0.25 + 'px';
    trstPLANE.style.top = value * 1.05 + 'px';
    stPLANE.style.top = value * 0.5 + 'px';
    bock.style.top = value * 1.5 + "px";
    

})