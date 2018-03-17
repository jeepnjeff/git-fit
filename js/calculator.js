
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


function calCount() {
    document.getElementById("calculate") .innerHTML = 5 + 5;
}
