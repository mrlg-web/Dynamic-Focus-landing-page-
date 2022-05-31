// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    aName = document.getElementById('aName'),
    focus = document.getElementById('focus');

// Option
const showAmPm = true;
//Show Time
function showTime() {
    // let today = new Date(2022, 31, 05, 20, 33, 30),  // Test
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();


    //Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);

}

// Add zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBackGroundAndGreeting() {
    // let today = new Date(2022, 31, 05, 20, 33, 30),  // Test
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('../images/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        // greeting.id('greeting') = 'white';
        document.body.style.color = 'white';
    } else {
        //Evening
        document.body.style.backgroundImage = "url('../images/evening.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }

}

//Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        aName.textContent = '[Enter Name]'
    } else {
        aName.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        //Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            aName.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        //Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

aName.addEventListener('keypress', setName);
aName.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run 
showTime();
setBackGroundAndGreeting();
getName();
getFocus();