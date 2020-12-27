let s=document.getElementById("setdate");
s.addEventListener("click",setalarm);

let aud=document.getElementById("audio1");
function bellring()
{
    aud.play();
    let stop1=document.getElementById("stopalarm");
    stop1.style="display:block; font-size: 40px;";
    stop1.addEventListener("click",function()
    {
        aud.pause();
        location.reload();
    })
}

function setalarm()
{
    let date=document.getElementById("alarmdate");
    now_date=new Date();
    year=now_date.getFullYear();
    month=now_date.getMonth();
    dat=now_date.getDate();

    final=year+' '+String(parseInt(month)+1)+' '+dat+' '+date.value;
    set_date=new Date(final)
    t1=set_date-now_date;
    alert("your alarm is set");
    if(t1>=0)
    {
        setTimeout(()=>{
            bellring();
        },t1);
    }
    
    
    
    
    
    
}