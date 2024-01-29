const fs = require('fs');
const path = require('path');


const file = JSON.parse(fs.readFileSync('person.json'));
file.age = file.age - 10;
file.city = 'Ekaterinburg';
const pathToFile = path.join(__dirname, 'person.json');
const personJson = JSON.stringify(file, null, 2);
fs.writeFileSync(pathToFile, personJson);