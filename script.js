// Set the target date
const targetDate = new Date("2024-12-20T23:59:59");

// Countdown function
function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference < 0) {
        document.getElementById("countdown").innerText = "The event has started!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
