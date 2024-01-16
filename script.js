function clock() {
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const period = document.getElementById('period');

    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    ampm = (h >= 12) ? "PM" : "AM"
    if (h > 12) {
        h = h - 12;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    period.innerText = ampm;
}

setInterval(clock, 1000)