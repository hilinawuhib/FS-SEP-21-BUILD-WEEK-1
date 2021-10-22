let date = new Date();
let hrs = date.getHours();

let greetings;

if (hrs < 12)
    greetings = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greetings = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greetings = 'Good Evening';

document.getElementById('Greetings-part').innerHTML = greetings;