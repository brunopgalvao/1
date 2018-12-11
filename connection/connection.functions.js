let wentOffline, wentOnline;

function updateConnectionStatus(event) {
    const connection = document.querySelector('#connection');
    const status = navigator.onLine ? "online" : "offline";
    connection.className = status;
    connection.innerHTML = status.toUpperCase();
    if(status === 'offline') {
        wentOffline = new Date(event.timeStamp);
        console.log("You lost your connection.");
    } else {
        wentOnline = new Date(event.timeStamp);
        console.log(`You were offline for ${(wentOnline - wentOffline) / 1000} seconds.`);
    }

}

window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);