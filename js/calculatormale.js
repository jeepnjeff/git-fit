
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
var activeExtra = (1.9);

// Male Female Radio button
function maleValue ()
{
  var maleGender = parseFloat(document.getElementById("male").value);
  genderTotal = (maleGender);
console.log (genderTotal);
}


// Height List
function heightValue ()
{
    var feetValue = parseFloat (document.getElementById("feetList").value);
    var inchValue = parseFloat (document.getElementById("inchList").value);
    heightTotal = ((feetValue + inchValue) * 2.54)*4.799;
  console.log (heightTotal);
}

// Weight function
function weightValue ()
{
  var pounds = document.getElementById("weight").value;
  poundsTotal = (pounds * 0.453592)* 13.397;
  console.log (poundsTotal);
}
// Age value
function ageValue ()
{
var ageInput = parseFloat (document.getElementById("age").value);
ageTotal = ageInput * 5.677;
console.log (ageTotal);
}

function maleBMRValue()
 {
  activityValue = parseFloat (document.getElementById("activityList").value);
  maleBMRTotal = (activityValue);
console.log (maleBMRTotal);
}

// Calulate Male calories
function calculateButton ()
  {
a = (genderTotal);
b = (heightTotal);
c = (poundsTotal);
d = (ageTotal);
e = (maleBMRTotal);
var result;
result = (a + b + c - d)*e;
document.getElementById("Answer").innerHTML = ("To maintain your current weight you'll need " + result.toFixed(0) + " calories per day.");
document.getElementById('seePlan').style.display = "block";
}

// Reset form button
function resetForm()
{
var male = (document.getElementById('male').checked = false);
var female = (document.getElementById('female').checked = false);
var feetList = (document.getElementById('feetList').value = 'Feet');
var inchList = (document.getElementById('inchList').value = 'Inch');
var weight = (document.getElementById('weight').value = '');
var age = (document.getElementById('age').value = '');
var activityList = (document.getElementById('activityList').value = 'Activity');
var Answer = (document.getElementById('Answer').innerHTML = '');
}

// End
