/*jshint esversion: 6 */

const video = document.getElementById('video');
const spanData = document.querySelectorAll('div span');

video.addEventListener('timeupdate', (e) => {
  for (let i = 0; i < spanData.length; i++){

    let span = spanData[i];
    let dataStart = span.getAttribute('data-start');
    let dataEnd = span.getAttribute('data-end');

    let currentVidTime = video.getCurrentTime();

    if(currentVidTime > dataStart && currentVidTime <= dataEnd){
      span.className = "highlight";
    } else {
      span.className = '';
    }
  }
});
