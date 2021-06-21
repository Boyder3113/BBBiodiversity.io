function makePlots(id) {
   d3.json("samples.json").then (sampledata =>{
       console.log(sampledata)
       var otu_ids = sampledata.samples[0].otu_ids;
       console.log(otu_ids)
   })
}