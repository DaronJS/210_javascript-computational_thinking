var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(function(bandObj) {
    updateCountry(bandObj, 'Canada');
    namesToUpperCase(bandObj);
    removeDotsInName(bandObj);
    return bandObj;
  });
}

function updateCountry(band, newCountry) {
  band.country = newCountry;
}

function namesToUpperCase(band) {
  band.name = band.name.replace(/\b[a-z]/g, function(x) { return x.toUpperCase();});
}

function removeDotsInName(band) {
  band.name = band.name.replace(/\./g, '');
}

console.log(processBands(bands));

// should return:

[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]