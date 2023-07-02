import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};
if (JSON.parse(localStorage.getItem('videoplayer-current-time'))) {
    player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds)
}
player.on('timeupdate', throttle(onPlay, 1000));
