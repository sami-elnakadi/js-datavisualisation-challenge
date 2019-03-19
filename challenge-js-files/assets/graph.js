let newDiv = document.createElement("div")
newDiv.id = "graph"
let container = document.getElementById("mw-content-text")
container.insertBefore(newDiv, table2);

//2eme Graphique

// let tabletd = document.querySelectorAll('#table1 tbody')
let td = document.querySelectorAll('#table2 td')

let donne1 = []
let res = []

let svg = dimple.newSvg("#graph", 900, 400);

for (let i= 0; i<td.length; i++){
    donne1.push(td[i].innerHTML)
}

// console.table(donne1);

for (let i = 0; i < donne1.length; i += 3) {

    res.push({
        "Pays": donne1[i],
        "population carcerale 1": donne1[i + 1],
        "population carcerale 2": donne1[i + 2],
    })
}
// console.table(res)

let myChart = new dimple.chart(svg,res);
myChart.setBounds(60, 30, 510, 305)
let x = myChart.addCategoryAxis("x", "Pays")

x.addOrderRule("Pays")

let y1 = myChart.addMeasureAxis("y", "population carcerale 1")
let y2 = myChart.addMeasureAxis("y", "population carcerale 2")
myChart.addSeries("2007-2009", dimple.plot.line, [x, y1]);
myChart.addSeries("2010-2012", dimple.plot.line, [x, y2]);
myChart.addLegend(60, 10, 510, 20, "right")
 
  myChart.draw();


  //Partie2
  let title1 = document.getElementsByTagName('h1')[0]
  let newDiv2 = document.createElement("div")
  newDiv2.id = "graph2"
title1.parentNode.insertBefore(newDiv2, title1.nextSibling);

let svg2 = dimple.newSvg("#graph2", 590, 400);
let caca = function(){
async function getData()
{
    let response = await fetch('https://inside.becode.org/api/v1/data/random.json');

    let data = await response.json();
    return data 
}

getData()
.then(data => {

let donne = [];

for (let i=0; i<data.length; i++){
    donne.push({
      'Ordonne': data[i][0],
      'Abscisse': data[i][1]
    });
    console.log(donne[i]);
}


  let myChart = new dimple.chart(svg2,donne);
  myChart.addCategoryAxis("x", 'Ordonne');
  myChart.addMeasureAxis("y", 'Abscisse');
  myChart.addSeries("donne", dimple.plot.bar);
  myChart.draw();
  setTimeout(function (){
myChart.svg.selectAll('*').remove()
  caca()
},2000)
  
}).catch(err =>{
  console.log("erreur");
})
}
caca();

