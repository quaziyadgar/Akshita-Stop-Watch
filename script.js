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
    console.log("lap")
    lap++;   
    var div = document.createElement('div');
    div.innerHTML = `<div id="btn-ctrl">
                <div>Lap ${lap}</div>
                <div>${h}:${m}:${s}</div>
                </div>`;
    document.getElementById('watch-frame').appendChild(div);
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