'use strict';

let noResults = [];

let singleResult = [{
  name: 'EH9 1PR',
  zoomLevel: 16,
  point: [326351, 672165]
}];

let multipleResults = [{
  name: 'Edinburgh',
  zoomLevel: 13,
  point: [325763, 673884]
}, {
  name: 'London',
  zoomLevel: 13,
  point: [532475, 180740]
}, {
  name: 'Caisteal Dhùn Èideann',
  zoomLevel: 7,
  point: [33600, 67500]
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
    res.status(400)
    res.json(error);
  }
};

module.exports = {
  search
};
