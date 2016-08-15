function parse(data, headers) {
  if (typeof(headers) === 'undefined') {
    throw new Error('The second argument is required. You need to supply headers for the CSV output.');
  }
  let rows = [];
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let tempRow = [];
    for(let item in headers) {
      let val = data[i][headers[item]];
      if (typeof(val) !== 'string') {
        val = val.toString();
      }

      tempRow.push(`"${val}"`);
    }
    // create an array of rows
    rows.push(tempRow.join(','));
  }

  // join headers as a CSV
  headers = headers.join(',');

  // dump 'er
  let output = headers + "\n" + rows.join("\n");

  return output;
}

module.exports = parse;