// init function to return the page loaded with essential data before 
// hitting dropdown menu 
function init () {    
  d3.json("f/data/samples.json").then((data)=> {
      console.log(data);
      var names = ((data.names)).slice(0,10);
      var n = names.slice(0,10);
      console.log(names);
      var samples = data.samples;
      var otuids = (samples.map(item => item.otu_ids)); 
      var otuids10 = otuids[0].slice(0,10);
      var otuID = modifyYaxisName(otuids10);
      var sampleValues = (samples.map(item => item.sample_values));
      var sample10 = sampleValues[0].slice(0,10);
      var labOuid = (samples.map(d => d.otu_labels));
      var label10 = labOuid[0].slice(0,10);
      var labels = modifyLabels(label10);
      // console.log(labels);
      var selectOpt = d3.select("#selDataset");
      var selectValues = data.names;
      selectValues.forEach((value) => {
        selectOpt
        .append("option")
        .text(value)
        .property("value",value)
        });

      // H-Bar plot
      var barData = [{
          x: sample10,
          y: otuID,
          text: labels,
          type: 'bar',
          orientation: 'h'
        }];      
  
        var layoutBar = {
          title : 'Sample metadataues vs. OTU ID',
          height: 600,
          width: 400,
          yaxis: {autorange: 'reversed'}
          };
      Plotly.newPlot("bar", barData, layoutBar);

      // Bubble chart:
      var data1 = [{
          x : otuids10,
          y : sample10,
          text: labels,
          mode : 'markers',
          marker : {
              color : otuids10,  
              colorscale: [[0, 'rgb(166,206,227)'], [0.25, 'rgb(31,120,180)'], [0.45, 'rgb(207, 254, 67)'], [0.65, 'rgb(51,160,44)'], 
                           [0.85, 'rgb(251,154,153)'], [0.9, 'rgb(81, 255, 77)'], [1, 'rgb(159,210,255)']],
              size : sample10, 
              sizeref: 0.038, sizemode: "area",
              hoverinfo:"x+y"
          }
      }];
      var layout1 = {
        xaxis :{ title: "OTU ID"}, hovermode:'closest'
      };
      Plotly.newPlot("bubble",data1, layout1);

      // MetaData
      var metadata1 = data.metadata
      idx = metadata1.map(item=>item.id);
      ethnicityx = metadata1.map(item=>item.ethnicity);
      genderx = metadata1.map(item=>item.gender);
      agex = metadata1.map(item=>item.age);
      locationx = metadata1.map(item=>item.location);
      bbtypex = metadata1.map(item=>item.bbtype);
      wfreqx = metadata1.map(item=>item.wfreq);
      console.log(idx[0]);
      var list = d3.select("#sample-metadata");
      list.html("");
      list.append("artilce").text(`id: ${idx[0]}`);
      list.append("article").text(`ethnicity: ${ethnicityx[0]}`);
      list.append("article").text(`gender: ${genderx[0]}`);
      list.append("article").text(`age: ${agex[0]}`);
      list.append("article").text(`location: ${locationx[0]}`);
      list.append("article").text(`bbtype: ${bbtypex[0]}`);
      list.append("article").text(`wfreq: ${wfreqx[0]}`);
      
      // Guage chart
      var wfreq = wfreqx[0];
      // Enter the Washing Frequency Between 0 and 180
      let level = parseFloat(wfreq) * 20;
  
      // Trigonometry to Calculate Meter Point
      let degrees = 180 - level;
      let radius = 0.5; 
      let radians = (degrees * Math.PI) / 180;
      let x = radius * Math.cos(radians);
      let y = radius * Math.sin(radians);
  
      // Path May Have to Change to Create a Better Triangle
      let mainPath = "M-.0 -0.05 L  .0 0.05 L";
      let pathX = String(x);
      let space = " ";
      let pathY = String(y);
      let pathEnd = " Z";
      let path = mainPath.concat(pathX, space, pathY, pathEnd);
      console.log(path);
      var datag = [
          {
              type: "scatter",
              x:[0],
              y:[0],
              marker: { size: 12, color: "850000" },
              showlegend: false,
              text: level,
              hoverinfo: "text+name"
          },
          {
              values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
              rotation: 90,
              text:["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
              textinfo: "text",
              textposition: "inside",
              marker: {
                  colors: [
                      "rgba(0,105,11,.5)",
                      "rgba(10,120,22,.5)",
                      "rgba(14,127,0,.5)",
                      "rgba(110,154,22,.5)",
                      "rgba(170,202,42,.5)",
                      "rgba(202,209,95,.5)",
                      "rgba(210,206,145,.5)",
                      "rgba(232,226,202,.5)",
                      "rgba(240, 230,215,.5)",
                      "rgba(255,255,255,0)"
                  ]
              },
              labels:["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
              hoverinfo: "label",
              hole: 0.5,
              type: "pie",
              showlegend: false
          }
      ]
  
      var layoutg = {
          shapes: [
              {
                  type: "path",
                  path: path,
                  fillcolor: "850000",
                  line: {
                      color: "850000"
                  }
              }
          ],
          title: "Belly Button Washing Frequency <br> Scrubs per Week",
          height: 500,
          width: 500,
          xaxis: {
              zeroline:false,
              showticklabels: false,
              showgrid: false,
              range: [-1, 1]
          },
          yaxis: {
              zeroline: false,
              showticklabels: false,
              showgrid: false,
              range: [-1, 1]
          }
      }
      // let GAUGE = document.getElementById("gauge");
      Plotly.newPlot("gauge", datag, layoutg);
      

      })
}
init();

// function to modify the yaxis ticks
function modifyYaxisName(z){
  var notation =[];
  for (var i= 0; i<z.length; i++){
      notation.push(`OTU ${z[i]}`)
  }
  return notation;}

  // function to shorten the labels' text
function modifyLabels(name) {
  var shortLabels = [];
  for (var i = 0; i < name.length; i++) {
      var stringName = name[i].toString();
      var splitLabels = stringName.split(";");
      if (splitLabels.length > 1) {
        shortLabels.push(splitLabels[splitLabels.length - 1]);
      } else {
        shortLabels.push(splitLabels[0]);
      }
  }
  return shortLabels;
  }

d3.selectAll("#selDataset").on("change", update);

function update(){
  var select = d3.selectAll("#selDataset").property("value");
  console.log(select);
  metaDemo(select);
  hBar(select);
  bub(select);
  gauge(select);
}

function metaDemo(select){
  d3.json("f/data/samples.json").then((data)=> {
      var metaSelect = (data.metadata).filter(item => item.id==select);
      console.log(metaSelect)
      var list = d3.select("#sample-metadata");
      list.html("");
      list.append("artilce").text(`id: ${metaSelect[0].id}`);
      list.append("article").text(`ethnicity: ${metaSelect[0].ethnicity}`);
      list.append("article").text(`gender: ${metaSelect[0].gender}`);
      list.append("article").text(`age: ${metaSelect[0].age}`);
      list.append("article").text(`location: ${metaSelect[0].location}`);
      list.append("article").text(`bbtype: ${metaSelect[0].bbtype}`);
      list.append("article").text(`wfreq: ${metaSelect[0].wfreq}`);

  })
}
function hBar(select) {
  d3.json("f/data/samples.json").then((data)=>{
      var barselect = (data.samples).filter(item => item.id==select);
      var otuids = (barselect.map(item => item.otu_ids)); 
      var otuids10 = otuids[0].slice(0,10);
      var otuID = modifyYaxisName(otuids10);
      var sampleValues = (barselect.map(item => item.sample_values));
      var sample10 = sampleValues[0].slice(0,10);
      var labOuid = (barselect.map(d => d.otu_labels));
      var label10 = labOuid[0].slice(0,10);
      var labels = modifyLabels(label10);



      var barData = [{
          x: sample10,
          y: otuID,
          text: labels,
          type: 'bar',
          orientation: 'h'
        }];      
  
        var layoutBar = {
          title : 'Sample metadataues vs. OTU ID',
          height: 600,
          width: 400,
          yaxis: {autorange: 'reversed'}
          };
      Plotly.react("bar", barData, layoutBar);
  })
}
function bub(select) {
  d3.json("f/data/samples.json").then((data)=>{
      var bubselect = (data.samples).filter(item => item.id==select);
      var otuids = (bubselect.map(item => item.otu_ids)); 
      var otuids10 = otuids[0].slice(0,10);
      var sampleValues = (bubselect.map(item => item.sample_values));
      var sample10 = sampleValues[0].slice(0,10);
      var labOuid = (bubselect.map(d => d.otu_labels));
      var label10 = labOuid[0].slice(0,10);
      var labels = modifyLabels(label10);
      
      var dataU = [{
          x : otuids10,
          y : sample10,
          text: labels,
          mode : 'markers',
          marker : {
              color : otuids10,  
              colorscale: [[0, 'rgb(166,206,227)'], [0.25, 'rgb(31,120,180)'], [0.45, 'rgb(207, 254, 67)'], [0.65, 'rgb(51,160,44)'], 
                           [0.85, 'rgb(251,154,153)'], [0.9, 'rgb(81, 255, 77)'], [1, 'rgb(159,210,255)']],
              size : sample10, 
              sizeref: 0.038, sizemode: "area",
              hoverinfo:"x+y"
          }
      }];
      var layoutU = {
        xaxis :{ title: "OTU ID"}, hovermode:'closest'
      };
      Plotly.react("bubble",dataU, layoutU);
  })

}



function step(){
  update();
  init();
};
step();
