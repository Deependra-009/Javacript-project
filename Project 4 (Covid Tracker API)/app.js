
let covid=document.getElementById("covid");
covid.style="display:none;";

let worldbtn=document.getElementById("world");
worldbtn.addEventListener("click",world);
function world(e)
{
    let show=document.getElementById("show");
    show.innerHTML=worldbtn.innerHTML;
    covid.style="display:block";   
    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        let obj = JSON.parse(this.responseText);
        console.log(obj[0]);
        let confirmed = document.getElementById("confirmed");
        confirmed.innerHTML = obj[0].confirmed;
        let death = document.getElementById("death");
        death.innerHTML = obj[0].deaths;
        let recovered = document.getElementById("recovered");
        recovered.innerHTML = obj[0].recovered;
        let active = document.getElementById("active");
        active.innerHTML = obj[0].active;
        let critical = document.getElementById("critical");
        critical.innerHTML = obj[0].critical;



    }
});

xhr.open("GET", "https://covid-19-data.p.rapidapi.com/report/totals?date=2020-07-21");
xhr.setRequestHeader("x-rapidapi-key", "ec40178baemsh1577bcfee285ecap19159djsn1adf7c41cbf2");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");

xhr.send(data);

}

let btn = document.getElementById("btn");

btn.addEventListener("click", india);

function india(e) {
    let act=document.getElementById("act");
    act.style="display:none";
    let show=document.getElementById("show");
    show.innerHTML=btn.innerHTML;
    covid.style="display:block";   
    const data = null;

    const xhr1 = new XMLHttpRequest();
    xhr1.withCredentials = true;

    xhr1.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let obj1=JSON.parse(this.responseText);
            console.log(obj1[0]);
            let confirmed = document.getElementById("confirmed");
        confirmed.innerHTML = obj1[0].confirmed;
        let death = document.getElementById("death");
        death.innerHTML = obj1[0].deaths;
        let recovered = document.getElementById("recovered");
        recovered.innerHTML = obj1[0].recovered;
        let critical = document.getElementById("critical");
        critical.innerHTML = obj1[0].critical;
        }
    });

    xhr1.open("GET", "https://covid-19-data.p.rapidapi.com/country?name=india");
    xhr1.setRequestHeader("x-rapidapi-key", "ec40178baemsh1577bcfee285ecap19159djsn1adf7c41cbf2");
    xhr1.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");

    xhr1.send(data);

}



