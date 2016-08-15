# lil-csv

A tiny tool to convert an array of simple objects into a CSV. Allows header orders.

### Usage

```js
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

// order is name, job
csv(data, ['name', 'job']);

// output:
// name,job\n"James","dev"\n"Addison","dev"\n"Andrew","dev"
```
