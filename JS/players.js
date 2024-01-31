const $ = document , _id = id => $.getElementById(id) , _qs = id => $.querySelector(id) , _qsa = id => $.querySelectorAll(id);
//* Security
!function Security () {
    if (localStorage.getItem('isSecure') == null) {
        _qsa('#background , header , main , footer').forEach(elem => elem.remove());
        _qs('title').textContent = 'شروع بازی';
        _qs('link[rel="icon"]').href = '/Truth-or-Dare/Pic/Tab/check.png';
        _qs('meta[name="theme-color"]').content = '#000';
        _qs('.error__wrapper h3').addEventListener('click' , () => {
            window.open('' , '_top');
        });
        window.addEventListener('keydown' , event => (event.key == 'Enter' ? _qs('.error__wrapper h3').click() : (event.key == 'Escape' ? window.close() : null)));
    } else {
        _qs('.error__wrapper').remove();
        localStorage.clear();
        
        //TODO Events
        _id('player-name').addEventListener('input' , checkPlayerName);
        _id('player-name').addEventListener('keydown' , event => (event.key == 'Enter' ? (checkPlayerName() ? _id('submit-player-name').click() : null) : null));
        _id('submit-player-name').addEventListener('click' , addPlayer);
        _id('submit-players').addEventListener('click' , submitNames);
    }
}();
//! Functions
function checkPlayerName () {
    let playerNameInput = _id('player-name') , bool;
    playerNameInput.value = playerNameInput.value.toString().trimStart();
    (playerNameInput.value.length == 0 ? (_id('player-name').classList.add('disable') , _id('submit-player-name').classList.add('disable') , bool = false) : (_id('player-name').classList.remove('disable') , _id('submit-player-name').classList.remove('disable') , bool = true));
    return bool;
};
function deletePlayer (event) {
    event.target.remove();
    (_id('players-list').childElementCount < 20 ? (_id('names-options').hasAttribute('style') ? _id('names-options').removeAttribute('style') : null) : null);
    (_id('players-list').childElementCount < 2 ? (_id('submit-player-box').hasAttribute('style') ? _id('submit-player-box').removeAttribute('style') : null) : null);
};
function addPlayer () {
    let list = _id('players-list') , playerNameInput = _id('player-name') , player = $.createElement('div');
    player.classList.add('player');
    player.textContent = playerNameInput.value.toString().trim();
    player.addEventListener('click' , deletePlayer);
    list.append(player);
    playerNameInput.value = '';
    playerNameInput.focus();
    checkPlayerName();
    (_id('players-list').childElementCount == 20 ? _id('names-options').style.display = 'none' : null);
    (_id('players-list').childElementCount >= 2 ? _id('submit-player-box').style.bottom = 0 : null);
};
function submitNames() {
    if (_id('players-list').childElementCount >= 2) {
        localStorage.clear();
        let list = [..._id('players-list').children] , players = [];
        list.forEach(player => players.push(player.textContent));
        localStorage.setItem('Players' , JSON.stringify(players));
        window.open('/Truth-or-Dare/Pages/sort.html' , '_top');
    }
};
//? Events
window.addEventListener('load' , () => {_id('loader').classList.add('hide');setTimeout(() => _id('loader').remove() , 1000)});
window.addEventListener('keydown' , event => (event.key == 'F12' ? event.preventDefault() : (event.key == 'ContextMenu' ? event.preventDefault() : null)));
window.addEventListener('contextmenu' , event => event.preventDefault());