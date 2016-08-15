const csv = require('../index.js');
const assert = require('assert');

let data = [{
  name: 'James',
  job: 'dev'
},
{
  name: 'Addison',
  job: 'dev'
},{
  name: 'Andrew',
  job: 'dev'
}];

assert.equal('name,job\n"James","dev"\n"Addison","dev"\n"Andrew","dev"', csv(data, ['name', 'job']), "Failed to compare CSV output");

csv(data, ['name', 'job'], function (output) {
  assert.equal('name,job\n"James","dev"\n"Addison","dev"\n"Andrew","dev"', output, "Failed to compare CSV output using a callback");
});

let data2 = [{
  name: 'James',
  job: 'dev',
  thing: [1, 2, 3]
},
{
  name: 'Addison',
  job: 'dev',
  thing: [1, 2, 3]
},{
  name: 'Andrew',
  job: 'dev',
  thing: [1, 2, 3]
}];

assert.equal('name,job,thing\n"James","dev","1,2,3"\n"Addison","dev","1,2,3"\n"Andrew","dev","1,2,3"', csv(data2, ['name', 'job', 'thing']), "Failed to compare CSV output for complicated object");