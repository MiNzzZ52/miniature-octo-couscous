let handleId = 0;
let sec = 100;
const h1 = document.getElementById("time")
const go = document.getElementById("go")
const stop = document.getElementById("stop")
const bat = document. getElementById("bat")

function getTime(){
    const date = new Date()
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const time = `${hrs}:${min}:${sec}`
    h1.textContent = time;
}

handleId = setInterval(getTime,1000)

go.onclick = function(){
    setInterval(operateTimer,1000)
    }

function operateTimer(){
    sec--;
    const batterypercent = `${sec}%`
    bat.textContent = batterypercent;
}


