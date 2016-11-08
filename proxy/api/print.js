'use strict';

let printResults = [{
  message: 'Printing Successful',
}];

let error = [{
  message: 'Error printing',
  data: [{
    dpi: 'dpi',
    bbox: [0,0,0,0],
    resolution: 100.0
  }]
}];

let print = (req, res) =>{
  console.log('Print: ', JSON.stringify(req.body.printOptions));
  if (req.body.printOptions !== 'error') {
    res.json(printResults);
  } else {
    res.json(error);
  }
};

module.exports = {
  print
};
