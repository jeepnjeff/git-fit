// Actual code begins here.
//Sets the variables that will be used to represent the divs to be shown/hidden
const showLow  = document.getElementsByClassName("showlow");
const showMed  = document.getElementsByClassName("showmed");
const showHigh = document.getElementsByClassName("showhigh");

function lowSetting() {
  //adds the "Display None" style to the divs I don't want shown.
  for (i = 0; i < showMed.length; i++) {
    showMed[i].classList.add("displaynone");
  }
  for (i = 0; i < showHigh.length; i++) {
    showHigh[i].classList.add("displaynone");
  }
  //removes the "Display None" style from the correct divs.
  for (i = 0; i < showLow.length; i++) {
    showLow[i].classList.remove("displaynone");
  }
}
function medSetting() {
  //adds the "Display None" style to the divs I don't want shown.
  for (i = 0; i < showLow.length; i++) {
    showLow[i].classList.add("displaynone");
  }
  for (i = 0; i < showHigh.length; i++) {
    showHigh[i].classList.add("displaynone");
  }
  //removes the "Display None" style from the correct divs.
  for (i = 0; i < showMed.length; i++) {
    showMed[i].classList.remove("displaynone");
  }
}
function highSetting() {
  //adds the "Display None" style to the divs I don't want shown.
  for (i = 0; i < showLow.length; i++) {
    showLow[i].classList.add("displaynone");
  }
  for (i = 0; i < showMed.length; i++) {
    showMed[i].classList.add("displaynone");
  }
  //removes the "Display None" style from the correct divs.
  for (i = 0; i < showHigh.length; i++) {
    showHigh[i].classList.remove("displaynone");
  }
}
