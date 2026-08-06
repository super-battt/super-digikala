let endTime = Date.now() + 24 * 60 * 60 * 1000; // 24 ساعت از الان

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateTimer() {
    const now = Date.now();
    let distance = endTime - now;

    // اگر تایمر تمام شد، دوباره 24 ساعت شروع شود
    if (distance <= 0) {
        endTime = Date.now() + 24 * 60 * 60 * 1000;
        distance = endTime - Date.now();
    }

    const h = Math.floor(distance / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);