/*

function zipStrings(strA, strB) {
  console.log(strA + "|||" + strB);
  let part = "";
  let result = "";
  let difference = Math.abs(strA.length - strB.length);
  console.log("diff", difference);

  if (strA.length >= strB.length) {
    for (let i = 0; i < strA.length; i++) {
      part = strA[i] + strB[i];
      console.log("part", part);
      result += part;
      if (i === strB.length - 1) {
        break;
      }
    }
    for (let x = strA.length - difference; x < strA.length; x++) {
      console.log("x", x);
      result += strA[x];
    }
  } else {
    for (let i = 0; i < strB.length; i++) {
      part = strA[i] + strB[i];
      console.log("part", part);
      result += part;
      console.log("test", strA.length, i);
      if (i === strA.length - 1) {
        break;
      }
    }
    console.log("strB.length - difference", strB.length - difference - 1);
    for (x = strB.length - difference; x < strB.length; x++) {
      console.log("x", x);
      result += strB[x];
    }
  }

  if (strA.length === 0) return strB;
  if (strB.length === 0) return strA;

  console.log("result:", result);
  return result;
}

*/

function zipStrings(strA, strB) {
  let result = "";
  arrA = strA.split("");
  arrB = strB.split("");
  let delta = Math.abs(strA.length - strB.length);
  if (strA.length >= strB.length) {
    for (let x = strA.length - delta; x < strA.length; x++) {
      arrB[x] = "";
    }
  }
  if (strB.length >= strA.length) {
    for (let x = strB.length - delta; x < strB.length; x++) {
      arrA[x] = "";
    }
  }
  for (let i = 0; i < arrA.length; i++) {
    result += arrA[i] + arrB[i];
  }
  return result;
}
