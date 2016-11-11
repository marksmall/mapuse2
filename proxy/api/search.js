'use strict';

let noResults = [];

let singleResult = [{
  name: 'EH9 1PR',
  zoomLevel: 16,
  point: {
    x: 55.953252,
    y: -3.188267
  }
}];

let multipleResults = [{
  name: 'Edinburgh',
  zoomLevel: 16,
  point: {
    x: 55.953252,
    y: -3.188267
  }
}, {
  name: 'London',
  zoomLevel: 16,
  point: {
    x: 51.5073509,
    y: -0.1277583
  }
}, {
  name: 'Caisteal Dhùn Èideann',
  zoomLevel: 18,
  point: {
    x: 55.953252,
    y: -3.188267
  }
}];

let error = [{
  message: 'Error Searching',
  data: [{
    search: 'Search term',
    bbox: [0,0,0,0],
    resolution: 100.0
  }]
}];

let search = (req, res) =>{
  console.log('SEARCHING.');
  if (req.query.term === 'zero') {
    res.json(noResults);
  } else if (req.query.term === 'EH9 1PR') {
    res.json(singleResult);
  } else if (req.query.term === 'multi') {
    res.json(multipleResults);
  } else {
    res.json(error);
  }
};

module.exports = {
  search
};
