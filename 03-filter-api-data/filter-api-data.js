function filterApiData(apiData, mandatoryKeys) {
  let result = [];
  let element;
  let count = 0;
  for (let y = 0; y < apiData.length; y++) {
    element = Object.keys(apiData[y]);
    for (let key = 0; key < element.length; key++) {
      for (let manda = 0; manda < mandatoryKeys.length; manda++) {
        if (element[key] === mandatoryKeys[manda]) {
          count++;
        }
        if (count === mandatoryKeys.length) {
          count = 0;
          result.push(apiData[y]);
        }
      }
    }
  }
  return result;
}
