function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const date = now.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent =
        date.charAt(0).toUpperCase() + date.slice(1);
}

updateClock();
setInterval(updateClock, 1000);
