//Partie2
 
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
    donne.push(data[i]);
    console.log(donne[i ]);
}

var svg = dimple.newSvg("#graph", 590, 400);
  let myChart = new dimple.chart(svg,donne);
  let x = myChart.addCategoryAxis("x", 0);
  myChart.addMeasureAxis("y", 0);
  myChart.addSeries("donne[i]", dimple.plot.bar);
  myChart.draw();
})

