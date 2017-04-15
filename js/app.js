// アルバムデータの作成
var album = [
  { src: 'img/1.jpg', msg: ''},
  { src: 'img/2.jpg', msg: ''},
  { src: 'img/3.jpg', msg: ''},
  { src: 'img/4.jpg', msg: ''},
  { src: 'img/5.jpg', msg: ''},
  { src: 'img/6.jpg', msg: ''},
  { src: 'img/7.jpg', msg: ''},
  { src: 'img/8.jpg', msg: ''},
  { src: 'img/9.jpg', msg: ''},
  { src: 'img/10.jpg', msg: ''},
  { src: 'img/11.jpg', msg: ''},
  { src: 'img/12.jpg', msg: ''},
  { src: 'img/13.jpg', msg: ''},
  { src: 'img/14.jpg', msg: ''},
  { src: 'img/15.jpg', msg: ''},
  { src: 'img/16.jpg', msg: ''},
  { src: 'img/17.jpg', msg: ''},
  { src: 'img/18.jpg', msg: ''},
  { src: 'img/19.jpg', msg: ''},
  { src: 'img/20.jpg', msg: ''},
  { src: 'img/21.jpg', msg: ''},
  { src: 'img/22.jpg', msg: ''},
  { src: 'img/23.jpg', msg: ''},
  { src: 'img/24.jpg', msg: ''},
  { src: 'img/25.jpg', msg: ''},
  { src: 'img/26.jpg', msg: ''},
  { src: 'img/27.jpg', msg: ''},
  { src: 'img/28.jpg', msg: ''}
];

// 最初のデータを表示しておく
var mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

var mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

var mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル画像の表示
var thumbFlame = document.querySelector('#gallery .thumb');
for (var i = 0; i < album.length; i++) {
  var thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});
