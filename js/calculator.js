
// The Revised Harris-Benedict Equation
// Men	BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
// Women BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
//
//  Conversion
//  Length 1 in = 2.54 cm
//  Weight  1# = 0.453592 kilograms
//
// Exercise level	Daily Calories Required (Kcal/day)
// Little to no exercise	Daily kilocalories needed = BMR x 1.2
// Light exercise (1–3 days per week)	Daily kilocalories needed = BMR x 1.375
// Moderate exercise (3–5 days per week)	Daily kilocalories needed = BMR x 1.55
// Heavy exercise (6–7 days per week)	Daily kilocalories needed = BMR x 1.725
// Very heavy exercise (twice per day, extra heavy workouts)	Daily kilocalories needed = BMR x 1.9

// activityList
var activeNone = (1.2);
var activeLow = (1.375);
var activeMod = (1.55);
var activeVery = (1.75);
// Base BMR Value
var maleBMR = (88.362);
var femaleBMR = (447.593);

function maleBMRValue()
 {
  var activityValue = document.getElementById("activityList").value;
  var maleBMRTotal = (activityValue * maleBMR);
console.log (maleBMRTotal);
}

// Height List
function heightValue ()
{
    var feetValue = parseInt (document.getElementById("feetList").value);
    var inchValue = parseInt (document.getElementById("inchList").value);
    var heightTotal = ((feetValue + inchValue) * 2.54);
  console.log (heightTotal);
}

// Weight function
function weightValue ()
{
  var pounds = document.getElementById("weight").value;
  var poundsTotal = pounds * 0.453592;
  console.log (poundsTotal);
}
// Age value
function ageValue ()
{
var ageInput = parseInt (document.getElementById("age").value);
var ageTotal = ageInput;
console.log (ageTotal);
}

// Calulate Male kilocalories

function calCount () {
if (male == true);

}








// End
