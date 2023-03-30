const clock = document.getElementById('clock');

function digitaltime() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let AMPM=' '
  if(hours>12){
    AMPM='PM';
  }
  else{
    AMPM='AM';
  }
  hours=hours %12 || 12;
  const time=`${hours}:${minutes}:${seconds}:${AMPM}`;
  clock.innerHTML = time;
}
setInterval(digitaltime,1000);

