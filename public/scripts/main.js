var myImg = document.querySelector('img');

myImg.onclick = function () {
    var mySrc = myImg.getAttribute('src');
    if ( mySrc === 'images/niconico.png') {
        myImg.setAttribute('src', 'images/chrome.png');
    } else {
        myImg.setAttribute('src', 'https://stat100.ameba.jp/kakeru/ironcat.jpg');
    }
}