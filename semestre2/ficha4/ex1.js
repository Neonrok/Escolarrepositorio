
let pa = document.getElementById("p2");
let pb = document.getElementsByTagName("p");
let pd = document.getElementsByClassName("red")
let pf = document.getElementsByTagName("div");
let pg = document.getElementsByTagName("span");
let pi = document.querySelector("span");


console.log(pa);
console.log("_________________");
console.log(pb);
console.log("_________________");
for (let i = 0; i < pb.length; i++) {
    console.log(pb[i].textContent);
}
console.log("_________________");
console.log(pd);
console.log("_________________");
for (let i = 0; i < pb.length; i++) {
    if (pb[i].id != "p3") {
        console.log(pb[i].textContent);
    }
}
console.log("_________________");
for (let i = 0; i < pb.length; i++) {
    console.log(pb[i].textContent);
}
for (let i = 0; i < pf.length; i++) {
    console.log(pf[i].textContent);
}
console.log("_________________");
for (let i = 0; i < pg.length; i++) {
    console.log(pg[i].textContent);
}
console.log("_________________");
for (let i = 0; i < pf.length; i++) {
    let ph =pf[i].getElementsByTagName("span")
    for (let j = 0; j < ph.length; j++) {
        console.log(ph[j].textContent);
    }
}
console.log("_________________");
for (let i = 0; i < pi.length; i++) {
    console.log(pi[i].textContent);
}
console.log(pi.textContent);
console.log("_________________");