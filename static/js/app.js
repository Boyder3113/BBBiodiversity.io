function makePlots(id) {
   d3.json("samples.json").then(sampledata =>{
       console.log(sampledata)
       var otuIds = sampledata.samples[0].otu_ids;
       console.log(otuIds)
       var SampleValues = sampledata.samples[0].sample_values.slice(0,10).reverse();
       console.log(sampleValues)
       var otuLabels = sampledata.samples[0].otu_labels.slice(0,10);
       console.log(otuLabels)
   })
}