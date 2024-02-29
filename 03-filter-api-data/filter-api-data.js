function filterApiData(apiData, mandatoryKeys) {
  // console.log("mandatorys:", mandatoryKeys);
  let result = [];
  let element;
  let count = 0;
  console.log("-----------------------------------------------------------");

  for (let y = 0; y < apiData.length; y++) {
    element = Object.keys(apiData[y]);
    // console.log("element", element);
    // console.log("element[y]", element[y]);
    // console.log("manda", manda, "y", y);

    for (let key = 0; key < element.length; key++) {
      for (let manda = 0; manda < mandatoryKeys.length; manda++) {
        if (element[key] === mandatoryKeys[manda]) {
          console.log(element[key], "===", mandatoryKeys[manda]);
          count++;
        }
        if (count === mandatoryKeys.length) {
          console.log("hab dich!", "key", key);
          count = 0;
          result.push(apiData[y]);
        }
      }
    }
  }
  console.log("result", result);
  return result;
}
