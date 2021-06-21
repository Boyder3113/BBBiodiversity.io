function makePlots(id) {
   d3.json("samples.json").then(sampledata =>{
       console.log(sampledata)
       var otuIds = sampledata.samples[0].otu_ids;
       console.log(otuIds)
       var SampleValues = sampledata.samples[0].sample_values.slice(0,10).reverse();
       console.log(sampleValues)
       var otuLabels = sampledata.samples[0].otu_labels.slice(0,10);
       console.log(otuLabels)

       var top10 = (sampledata.samples[0].otu_ids.slice(0,10)).reverse();
       
       var plotID = top10.map(d => "OTU " + d);
       console.log(`OTU IDS: ${plotID}`)

       console.log(`OTU Labels: ${outLabels}`)

       var trace1 = {
           x: sampleValues,
           y: plotID,
           text: labels,
           marker: {
           color: 'blue'},
           type: "bar",
           orientation: "h",
       };

       var data = [trace1];

       var layout = {
           title: "Top 10 OTU's per Individual",
           yaxis:{
               tickmode:"linear",
           },
           margin: {
               l: 100,
               r: 100,
               t: 100,
               b: 30
           }
       };

   })
}