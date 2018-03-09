// var para = document.createElement("p");
// var Breakfast2 = document.createTextNode(amount + unit + type + calories);
// para.appendChild(Breakfast2);
// var element = document.getElementById("Breakfast2");
// element.appendChild(para);
class MenuItem {
  constructor(id, amount, unit, food, calories) {
    this.id = id
    this.amount = amount
    this.unit = unit
    this.food = food
    this.calories = calories
  }
  printitem() {
    document.getElementById(this.id).innerHTML = "• " + this.amount +" " + this.unit +" "+ this.food +" "+ this.calories + " Calories"
  }
}

const lowcalorie = () => {
  let egg = new MenuItem("brk1row1", 1, "Whole","Egg",72)
  let eggwhites = new MenuItem("brk1row2", .75, "Cup", "Egg Whites", 95)
  let rawoats = new MenuItem("brk1row3", .5, "Cup", "Raw Oats", 150)
  let freshberries = new MenuItem("brk1row4", .5, "Cup", "Fresh Berries", 40)
  egg.printitem()
  eggwhites.printitem()
  rawoats.printitem()
  freshberries.printitem()
}
const mediumcalorie = () => {
  let egg = new MenuItem("brk2row1", 1, "Whole","Egg",72)
  let eggwhites = new MenuItem("brk2row2", 1, "Cup", "Egg Whites", 126)
  let rawoats = new MenuItem("brk2row3", 1, "Cup", "Raw Oats", 300)
  let freshberries = new MenuItem("brk2row4", 1, "Cup", "Fresh Berries", 80)
  egg.printitem()
  eggwhites.printitem()
  rawoats.printitem()
  freshberries.printitem()
}
const highcalorie = () => {
  let egg = new MenuItem("brk3row1", 2, "Whole","Egg", 1)
  let eggwhites = new MenuItem("brk3row2", 1.5, "Cup", "Egg Whites", 190)
  let rawoats = new MenuItem("brk3row3", 1.5, "Cup", "Raw Oats", 450)
  let freshberries = new MenuItem("brk3row4", 1.5, "Cup", "Fresh Berries", 120)
  egg.printitem()
  eggwhites.printitem()
  rawoats.printitem()
  freshberries.printitem()
}
lowcalorie()
mediumcalorie()
highcalorie()
