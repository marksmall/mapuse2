'use strict';

let gfiResults = [{
  name: 'Print',
  glyph: 'print',
  tooltip: 'Open Print Preview'
}, {
  name: 'Import',
  glyph: 'cloud-download',
  tooltip: 'Import Annotations into Map'
}, {
  name: 'Export',
  glyph: 'cloud-upload',
  tooltip: 'Export Annotations from Map'
}, {
  name: 'My Maps',
  glyph: 'floppy-disk',
  tooltip: 'Save current view'
}, {
  name: 'Annotate',
  glyph: 'pencil',
  tooltip: 'Open Annotation Tools'
}, {
  name: 'Measure',
  glyph: 'print',
  tooltip: 'Open Measurement Tools'
}, {
  name: 'Feature',
  glyph: 'info-sign',
  tooltip: 'Get feature Information'
}, {
  name: 'Legend',
  glyph: 'print',
  tooltip: 'View Legend for layer'
}];

let error = [{
  message: 'Error Getting Feature Information',
  data: [{
    product: 'Strategi',
    bbox: [0,0,0,0],
    resolution: 100.0
  }]
}];

let gfi = (req, res) =>{
  console.log('GET FEATURE INFORMATION');
  if (req.query.options !== 'error'){
    res.json(gfiResults);
  } else {
    res.json(error);
  }
};

module.exports = {
  gfi
};
