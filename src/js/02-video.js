import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'current-time';

player.on('timeupdate', function (data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data));
  //   console.log(data);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {};

player.on('play', onPlay);
