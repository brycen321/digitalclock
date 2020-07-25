var idVar = setInterval(myClock, 1000);

const disp = document.getElementById("disp");
const rst = document.getElementById("reset");
const mode = document.getElementById("mode");

function myClock()
{
    var clock = new Date();
    disp.innerText = clock.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false});
}



myClock();