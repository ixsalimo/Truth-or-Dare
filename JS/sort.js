const $ = document , _id = id => $.getElementById(id) , _qs = id => $.querySelector(id) , _qsa = id => $.querySelectorAll(id) , 
persianNumbering = [
    'اول' , 'دوم' , 'سوم' , 'چهارم' , 'پنجم' , 'ششم' , 'هفتم' , 'هشتم' , 'نهم' , 'دهم' , 'یازدهم' , 'دوازدهم' , 'سیزدهم' , 'چهاردهم' , 'پانزدهم' , 'شانزدهم' , 'هفدهم' , 'هجدهم' , 'نوزدهم' , 'بیستم'
];
//* Security
!function Security () {
    if (localStorage.getItem('Players') == null) {
        _qsa('#background , header , main , footer').forEach(elem => elem.remove());
        _qs('title').textContent = 'شروع بازی';
        _qs('link[rel="icon"]').href = '/Pic/Tab/check.png';
        _qs('meta[name="theme-color"]').content = '#000';
        _qs('.error__wrapper h3').addEventListener('click' , () => {
            window.open('/' , '_top');
        });
        window.addEventListener('keydown' , event => (event.key == 'Enter' ? _qs('.error__wrapper h3').click() : (event.key == 'Escape' ? window.close() : null)));
    } else {
        _qs('.error__wrapper').remove();
        
        //TODO Events
        _id('get-turns-btn').addEventListener('click' , getTurns);
    }
}();
//! Functions
async function getTurns () {
    _id('get-turns-btn').remove();
    const sortPlayerBox = _id('sort-players-box');
    sortPlayerBox.classList.add('disable');
    let players = JSON.parse(localStorage.getItem('Players')) , time = 500 , scrollPlayer , selectedPlayer , list = _id('sorted-players-list') , playerCard , numberWrapper , span , number , splitLine , playerName , randomizedPlayers = [] , btn = $.createElement('button');
    list.innerHTML = '';
    localStorage.removeItem('Players');
    while (players.length != 0) {
        selectedPlayer = players[(Math.trunc(Math.random() * players.length))];
        randomizedPlayers.push(selectedPlayer);
        await players.splice(players.indexOf(selectedPlayer) , 1);
    }
    randomizedPlayers.forEach((player , index) => {
        playerCard = $.createElement('li');
        playerCard.classList.add('player' , 'sorted-player');
        playerCard.style.animationDelay = `${index * time}ms`;
        numberWrapper = $.createElement('div');
        numberWrapper.classList.add('player-number__wrapper');
        span = $.createElement('span');
        span.textContent = 'نفر';
        numberWrapper.append(span);
        number = $.createElement('p');
        number.classList.add('player-number');
        number.textContent = persianNumbering[index];
        numberWrapper.append(number);
        playerCard.append(numberWrapper);
        splitLine = $.createElement('span');
        splitLine.classList.add('split-line');
        playerCard.append(splitLine);
        playerName = $.createElement('p');
        playerName.classList.add('player-name');
        playerName.textContent = player;
        playerCard.append(playerName);
        list.append(playerCard);
        (index == 0 ? scrollPlayer = setInterval(() => window.scrollBy(0 , playerCard.offsetHeight * 5) , time * 4) : null);
        (index == randomizedPlayers.length - 1 ? setTimeout(() => {clearInterval(scrollPlayer) , sortPlayerBox.classList.remove('disable')} , ++index * time) : null);
    });
    btn.addEventListener('click' , () => {
        localStorage.setItem('Players' , JSON.stringify(randomizedPlayers));
        window.open('/Pages/game.html' , '_top');
    });
    btn.classList.add('start-game-btn' , 'btn');
    btn.textContent = 'حله';
    setTimeout(() => sortPlayerBox.append(btn) , time);
};
//? Events
window.addEventListener('load' , () => {_id('loader').classList.add('hide');setTimeout(() => _id('loader').remove() , 1000)});
window.addEventListener('keydown' , event => (event.key == 'F12' ? event.preventDefault() : (event.key == 'ContextMenu' ? event.preventDefault() : null)));
window.addEventListener('contextmenu' , event => event.preventDefault());