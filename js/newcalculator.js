// The Revised Harris-Benedict Equation
// Men	BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
// Women BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (9.247 x age in years)
//
//  Conversion
//  Length 1 in = 2.54 cm
//  Weight  1# = 0.453592 kilograms
//
// Exercise level	Daily Calories Required (Kcal/day)
// Little to no exercise	Daily kilocalories needed = BMR x 1.2
// Light exercise (1–3 days per week)	Daily kilocalories needed = BMR x 1.375
// Moderate exercise (3–5 days per week)	Daily kilocalories needed = BMR x 1.55
// Heavy exercise (6–7 days per week)	Daily kilocalories needed = BMR x 1.7
// Very heavy exercise (twice per day, extra heavy workouts)	Daily kilocalories needed = BMR x 1.9

function check() {
    var radios = document.getElementsByName('gender');

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked == 0) {
            calculateFemale();
            console.log(radios[i].value);
            break;
        }
        else {
        calculatemale();
        break;
        }
    }
}




function calculateFemale() {


    let feetValue = parseFloat(document.getElementById("feetList").value);
    let inchValue = parseFloat(document.getElementById("inchList").value);
    let pounds = document.getElementById("weight").value;
    let ageInput = parseFloat(document.getElementById("age").value);
    let activityValue = parseFloat(document.getElementById("activityList").value);

    // activityList
    const activeNone = (1.2);
    const activeLow = (1.375);
    const activeMod = (1.55);
    const activeVery = (1.7);
    const activeExtra = (1.9);

    //Gender BMR Value
    const femaleBMR = (447.593);

    //Height Equation for male and female
    let femaleHeightTotal = ((feetValue + inchValue) * 2.54) * 3.098;
    console.log("height Inch", feetValue + inchValue);
    //Weight equation for male and female
    let femalePoundsTotal = (pounds * 0.453592) * 9.247;

    //Age equation for male and female
    let femaleAgeTotal = ageInput * 4.330;

    //BMR Total equation for activity list and Base BMR
    let femaleBMRTotal = (activityValue);

    console.log("femaleBMR", femaleBMR);
    console.log("Height", femaleHeightTotal);
    console.log("pounds", femalePoundsTotal);
    console.log("age", femaleAgeTotal);
    console.log("Activity", femaleBMRTotal);

    // Calulate female calories
    a = (femaleBMR);
    b = (femaleHeightTotal);
    c = (femalePoundsTotal);
    d = (femaleAgeTotal);
    e = (femaleBMRTotal);
    var result;
    result = (a + b + c - d) * e;
    console.log (result);
    document.getElementById("Answer").innerHTML = ("To maintain your current weight you'll need " + result.toFixed(0) + " calories per day.");
    document.getElementById('seePlan').style.display = "block";
}


function calculatemale() {

    let feetValue = parseFloat(document.getElementById("feetList").value);
    let inchValue = parseFloat(document.getElementById("inchList").value);
    let pounds = document.getElementById("weight").value;
    let ageInput = parseFloat(document.getElementById("age").value);
    let activityValue = parseFloat(document.getElementById("activityList").value);


    // activityList
    const activeNone = (1.2);
    const activeLow = (1.375);
    const activeMod = (1.55);
    const activeVery = (1.7);
    const activeExtra = (1.9);

    //Gender BMR Value
    const maleBMR = (88.362)

    //Height Equation for male and female
    let maleHeightTotal = ((feetValue + inchValue) * 2.54) * 4.799;

    //Weight equation for male and female
    let malePoundsTotal = (pounds * 0.453592) * 13.397;

    //Age equation for male and female
    let maleAgeTotal = ageInput * 5.677;

    //BMR Total equation for activity list and Base BMR
    let maleBMRTotal = (activityValue);
    console.log(maleBMR);
    console.log(maleHeightTotal);
    console.log(malePoundsTotal);
    console.log(maleAgeTotal);
    console.log(maleBMRTotal);

    // Calulate female calories
    a = (maleBMR);
    b = (maleHeightTotal);
    c = (malePoundsTotal);
    d = (maleAgeTotal);
    e = (maleBMRTotal);
    var result;
    result = (a + b + c - d) * e;
    console.log(result);
    

    document.getElementById("Answer").innerHTML = ("To maintain your current weight you'll need " + result.toFixed(0) + " calories per day.");
    document.getElementById('seePlan').style.display = "block";
}

// Reset form button
function resetForm() {
    var male = (document.getElementById('male').checked = false);
    var female = (document.getElementById('female').checked = false);
    var feetList = (document.getElementById('feetList').value = 'Feet');
    var inchList = (document.getElementById('inchList').value = 'Inch');
    var weight = (document.getElementById('weight').value = '');
    var age = (document.getElementById('age').value = '');
    var activityList = (document.getElementById('activityList').value = 'Activity');
    var Answer = (document.getElementById('Answer').innerHTML = '');
}

//End