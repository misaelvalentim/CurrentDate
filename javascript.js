window.addEventListener('load', () => {
    const date = new Date();
    const time = new Date();
    const day = new Date();
    
    const msg = `${setDay(day)}, ${setDate(date)} - ${setHour(time)}`;
    
    getMessage(msg, true);
    verifyTime(time);
    
})
function verifyTime(time) {
    const bg = document.querySelector('.main')
    if (time.getHours() < 5 && time.getHours() >= 18) {
        return bg.style.backgroundColor = '#111';
    }
    if (time.getHours() >= 5 && time.getHours() < 12) {
        return bg.style.backgroundColor = 'skyblue';
    }
    if (time.getHours() >= 12 && time.getHours() < 18) {
        return bg.style.backgroundColor = '#f0e68c';
    }
}

function setDay(day) {
    const dia = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    if (day.getDay() == 0) return `${dia[0]}`;
    if (day.getDay() == 1) return `${dia[1]}`;
    if (day.getDay() == 2) return `${dia[2]}`;
    if (day.getDay() == 3) return `${dia[3]}`;
    if (day.getDay() == 4) return `${dia[4]}`;
    if (day.getDay() == 5) return `${dia[5]}`;
    if (day.getDay() == 6) return `${dia[6]}`;
}

function setDate(date) {
    if (date.getMonth() == 0) return `${zeroBeforeTen(date.getDate())} de Janeiro de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 1) return `${zeroBeforeTen(date.getDate())} de Fevereiro de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 2) return `${zeroBeforeTen(date.getDate())} de Março de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 3) return `${zeroBeforeTen(date.getDate())} de Abril de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 4) return `${zeroBeforeTen(date.getDate())} de Maio de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 5) return `${zeroBeforeTen(date.getDate())} de Junho de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 6) return `${zeroBeforeTen(date.getDate())} de Julho de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 7) return `${zeroBeforeTen(date.getDate())} de Agosto de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 8) return `${zeroBeforeTen(date.getDate())} de Setembro de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 9) return `${zeroBeforeTen(date.getDate())} de Outubro de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 10) return `${zeroBeforeTen(date.getDate())} de Novembro de ${zeroBeforeTen(date.getFullYear())}`;
    if (date.getMonth() == 11) return `${zeroBeforeTen(date.getDate())} de Dezembro de ${zeroBeforeTen(date.getFullYear())}`;
}

function setHour(time) {
    const hour = zeroBeforeTen(time.getHours());
    const minutes = zeroBeforeTen(time.getMinutes());
    const seconds = zeroBeforeTen(time.getSeconds());
    return `${hour}:${minutes}:${seconds}`;
}
function zeroBeforeTen(num) {
    return num >= 10 ? `${num}` : `0${num}`;
}

function createTitle(){
    const title = document.createElement('h1');
    return title;
}

function getMessage(msg, isValid) {
    const resultado = document.querySelector('.time');
    resultado.innerHTML = '';
    const title = createTitle();
    title.innerHTML = msg;
    resultado.appendChild(title);

    if (isValid) {
        title.classList.add('time__date');
    } else {
        title.classList.remove('time__date');
    }
}
