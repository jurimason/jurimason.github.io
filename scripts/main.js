
var homebtn = document.getElementById('sportiverso-home');
homebtn.setAttribute('onclick',"window.location.href = 'index.html';");

var menu = document.getElementById('menu-list');
menu.style.visibility = 'hidden';

function hamMenuClicked(){
    //show menu
    
    if (menu.style.visibility === 'hidden') {
        menu.style.visibility = 'visible';
    } else {
        menu.style.visibility = 'hidden';
    }
}

