let hrs = document.getElementsByClassName("hrs")[0];
  let min = document.getElementsByClassName("min")[0];
  let sec = document.getElementsByClassName("sec")[0];

  function updateTime() {
    let currentTime = new Date();

    hrs.innerHTML = String(currentTime.getHours()).padStart(2, '0');
    min.innerHTML = String(currentTime.getMinutes()).padStart(2, '0');
    sec.innerHTML = String(currentTime.getSeconds()).padStart(2, '0');
  }

  
  updateTime();

  setInterval(updateTime, 1000);