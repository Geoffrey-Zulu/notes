function updateTime() {
    const now = new Date();
    const timeDiv = document.getElementById('time');
    timeDiv.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
    setInterval(updateTime, 1000);
    updateTime();