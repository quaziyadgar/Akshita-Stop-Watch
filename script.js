var startBtn = document.getElementById('start-btn');
var lapBtn = document.getElementById('lap-btn');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

var h = 0;
var m = 0;
var s = 0;
var c = 0;
var lap = 0;
startBtn.addEventListener('click', startTime);

lapBtn.addEventListener('click', addLap);

function addLap()
{
    if (lapBtn.innerText == 'Reset')
    {
        console.log("reset");
        h = 0;
        m = 0;
        s = 0;
        c = 0;
        lap = 0;
        lapBtn.innerText = 'Lap';
        startBtn.innerText = 'Start';
        hour.innerText = '00';
        minute.innerText = '00';
        second.innerText = '00';
        document.getElementById('lap-frame').innerText = "";
    }
    else{
    console.log("lap")
    lap++;   
    var div = document.createElement('div');
    div.innerHTML = `<div id="btn-ctrl">
                <div>Lap ${lap}</div>
                <div>${h}:${m}:${s}</div>
                </div>`;
    document.getElementById('lap-frame').appendChild(div);
    }
}

function startTime()
{

    if(c==0){
        x = setInterval(function(){timeCounter();},1000);
        startBtn.innerText = "Stop"; 
        c++;
    }
    else
    {
        clearInterval(x);
        lapBtn.innerText = "Reset";
    }
    
    
}

function timeCounter()
{
    if(s == 59) {
        s = 0;
        m++;
        if(minute == 60)
        {
            m = 0;
            h++;
            second.innerText = '0'+s;
            minute.innerText = '0'+m;
            if (h<10) 
            hour.innerText = '0' + h;
            else
            hour.innerText = h;
        }
        else{
            
            second.innerText = '0' + s;
            if (m<10)
            minute.innerText = '0' + m; 
            else
            minute.innerText = m;
            if (h<10)
            hour.innerText = '0' + h;
            else
            hour.innerText = h;
        }
           
    }
    else
    {   
        s = s+1;
        if (s<10)
        second.innerText = '0'+ s;
        else
        second.innerText = s;
        if (m<10)
        minute.innerText = '0' + m;
        else
        minute.innerText = m;
        if (h<10)
        hour.innerText = '0' + h;
        else
        hour.innerText = h;
    }
    
}