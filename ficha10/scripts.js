
function Nclick(){
    var FDP="FDP";
    console.log(FDP);
    return FDP;
}

setInterval(() => {
    console.log("passaram 5 segundos")
}, 5000);

setInterval(() => {
    const data = new Date()
    const horas = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds();
    const hms = [horas , min , sec].join(':')
    console.log(hms)
}, 2000);