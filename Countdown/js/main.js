const clock = document.querySelector('#clock');

const getRemainTime = (deadline) => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

        return{
            remainTime,
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays
        }
};
// console.log(getRemainTime('Wed Jul 21 2021 00:00:00 GMT-0300'));

const countdown = (deadline, finalMessage) => {

    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        clock.innerHTML = `
                        <h1 class="title">¿Cuánto falta para el invierno?</h1>
                        <div class="clock">
                            <div class="clock__time">
                                ${t.remainDays}
                                <p>Días</p>
                            </div>
                            <div class="clock__time">
                                ${t.remainHours}
                                <p>Horas</p>
                            </div>
                            <div class="clock__time">
                                ${t.remainMinutes}
                                <p>Minutos</p>
                            </div>
                            <div class="clock__time">
                                ${t.remainSeconds}
                                <p>Segundos</p>
                            </div>
                        </div>
                        `

        if(t.remainTime <= 1){
            clearInterval(timerUpdate);
            clock.innerHTML = finalMessage;
        }
    }, 1000)
};

countdown('Wed Jul 21 2021 00:00:00 GMT-0300', '<h1 class="title">¡Llegó el invierno!</h1>');