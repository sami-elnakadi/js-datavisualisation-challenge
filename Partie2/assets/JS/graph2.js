//Partie2

let svg = dimple.newSvg("#graph", 590, 400);
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
      'Abscisse': data[i][0],
      'Ordonne': data[i][1]
    });
    console.log(donne[i]);
}


  let myChart = new dimple.chart(svg,donne);
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

