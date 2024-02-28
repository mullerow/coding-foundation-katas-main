function extractClassName(sessionTitle) {
  let array = sessionTitle.split(" ");
  let month = "";
  let year = 0;
  if (array[2].length === 4 && array[2][0] === "2") {
    year = array[2];
  }
  if (array[3]) {
    switch (array[3]) {
      case "Januar":
        month = "01";
        break;
      case "Februar":
        month = "02";
        break;
      case "März":
        month = "03";
        break;
      case "Maerz":
        month = "03";
        break;
      case "April":
        month = "04";
        break;
      case "Mai":
        month = "05";
        break;
      case "Juni":
        month = "06";
        break;
      case "Juli":
        month = "07";
        break;
      case "August":
        month = "08";
        break;
      case "September":
        month = "09";
        break;
      case "Oktober":
        month = "10";
        break;
      case "November":
        month = "11";
        break;
      default:
        month = "12";
        break;
    }
  }
  if (year != 0 && month != "") {
    return year + "-" + month;
  } else return null;
}
