const $ = document , _id = id => $.getElementById(id) , _qs = id => $.querySelector(id) , _qsa = id => $.querySelectorAll(id);
//! Functions
!function (DATE = new Date()) {
    let bg = _id('particles-js') , icon = _qs('link[rel="icon"]') , tab = _qs('meta[name="theme-color"]');
    switch (DATE.getUTCMonth() + 1) {
        case 12:
        case 1:
        case 2:
            tab.content = '#a0c4ff';
            bg.className = 'winter';
            icon.href = '../Pic/Tab/winter.png';
            particlesJS.load('particles-js', '../Libraries/JSON/winter-bg.json');
            break;
        case 3:
        case 4:
        case 5:
            tab.content = '#a1ff0a';
            bg.className = 'spring';
            icon.href = '../Pic/Tab/spring.png';
            break;
        case 6:
        case 7:
        case 8:
            tab.content = '#ef0';
            bg.className = 'summer';
            icon.href = '../Pic/Tab/summer.png';
            break;
        case 9:
        case 10:
        case 11:
            tab.content = '#ff8700';
            bg.className = 'autumn';
            icon.href = '../Pic/Tab/autumn.png';
            particlesJS.load('particles-js', '../Libraries/JSON/autumn-bg.json');
            break;
        default:
            bg.className = 'gradient';
    }
}();
//? Events
window.addEventListener('load' , () => {_id('loader').classList.add('hide');setTimeout(() => _id('loader').remove() , 1000)});
window.addEventListener('keydown' , event => (event.key == 'F12' ? event.preventDefault() : (event.key == 'ContextMenu' ? event.preventDefault() : null)));
window.addEventListener('contextmenu' , event => event.preventDefault());
_id('start').addEventListener('click' , () => {
    localStorage.clear();
    localStorage.setItem('isSecure' , true);
    window.open('../Pages/players.html' , '_top');
});