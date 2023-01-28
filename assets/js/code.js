const text = document.querySelector('h2')

function getChrono(){
    const now = new Date().getTime();
    const countdownDate = new Date("24 April 2023 06:00 UTC").getTime();

    const timeLeft = countdownDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60))/(1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60))/1000);
    
    
    text.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
};

const countDownInterval = setInterval(() => {

    getChrono();

}, 1000);