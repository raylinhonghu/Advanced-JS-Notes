putstr("Enter a month Number");
var monthNum = readline();
var monthName;

switch (monthNum) {
  case "1":
    monthName = "jan";
    break;
  case "2":
    monthName = "feb";
    break;
  case "3":
    monthName = "mar";
    break;
  case "4":
    monthName = "apr";
    break;
  case "5":
    monthName = "may";
    break;
  case "6":
    monthName = "jun";
    break;
  case "7":
    monthName = "jul";
    break;
  case "8":
    monthName = "aug";
    break;
  case "9":
    monthName = "sept";
    break;
  default:
    print("bad input");
}
