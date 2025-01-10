import{startTimer, stopTimer, resetTimer}
from './timer.js';
import{updateClock} from './clock.js';
import{convertTemperature} from './temperature.js';
import{generateCalendar} from './calendar.js';
import{loadScripture} from './scripture.js';

//Initalize Scripture Section
loadScripture();

//Initialize Timer
document.getElementById('start-timer').addEventListener
('click', startTimer);
document.getElementById('stop-timer').addEventListener
('click', stopTimer);
document.getElementById('reset-timer').addEventListener
('click', resetTimer);

//Initialize Clock
setInterval(updateClock, 1000);

//Initialize Temperature
document.getElementById('temp-display').innerText = convertTemperature(25);

//Initialize Calendar
document.getElementById('calendar-display').innerHTML = generateCalendar();

//Notes Section
document.getElementById('user-notes').addEventListener('input', (e) =>{
    localStorage.setItem('user-notes', e.target.value);
});

document.getElementById('user-notes').value = 
localStorage.getItem('user-notes') ||'';