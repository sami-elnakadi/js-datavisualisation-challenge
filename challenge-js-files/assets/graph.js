function addDiv(){
    let newDiv = document.createElement("div")
    newDiv.id = "graph"
}
let tableth = document.querySelectorAll('th')
let tabletd = document.querySelectorAll('td')

for (let i = 0; i<tableth.length; i++){
    let th = tableth[i].innerHTML
    console.log(th)
}

for (let j = 0; j<tabletd.length; j++){
    let td = tabletd[j].innerHTML
    console.log(td)
}

// let titre = document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police');
// titre.innerHTML += '\n' + " HEllo";
// let table1 = document.getElementById('table1');
// let jso = JSON.stringify(table1);
// console.log(jso);

// let titre2=document.getElementById('Homicide');
