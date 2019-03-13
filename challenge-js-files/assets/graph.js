let titre = document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police');
titre.innerHTML += '\n' + " HEllo";
let table1 = document.getElementById('table1');
let jso = JSON.stringify(table1);
console.log(jso);

let titre2=document.getElementById('Homicide');



//Partie2

const req = new XMLHttpRequest;
req.open('GET','https://inside.becode.org/api/v1/data/random.json',true);
req.onload = function(){
    if(this.status===404){
        alert('An error occured')
    }
    else if(this.status===200){
        console.log(JSON.parse(this.responseText));
        
        
    }
    
}

req.send();   

var svg = dimple.newSvg("#chartContainer", 590, 400);
    d3.tsv("https://inside.becode.org/api/v1/data/random.json", function (data) {
      data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"])
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 430, 330);
      var x = myChart.addCategoryAxis("x", ["Owner", "Month"]);
      x.addGroupOrderRule("Date");
      myChart.addMeasureAxis("y", "Unit Sales");
      var s = myChart.addSeries(["Brand"], dimple.plot.line);
      s.barGap = 0.05;
      myChart.addLegend(510, 20, 100, 300, "left");
      myChart.draw();
    });