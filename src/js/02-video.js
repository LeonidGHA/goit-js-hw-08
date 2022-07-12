import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, seconds);
    // console.log(seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_CURRENT_TIME));
