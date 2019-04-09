// if statement
var cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

//if else statement
var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// logical operators
// If any of our two conditions are false, then the whole expression is false.
if (isCitizen && age > 18) {
  console.log("You are eligable to vote.");
}

// Here our if statement is true when temperature is either below -40 or above 40 degrees.
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isnt such a great idea...");
}

// We read the expression in the above example usually as "if not raining", but it's not always intuitive what "not true" or "not false" mean unless you remember that the ! operator simply reverses the value of raining. That is, if raining is true, !raining is false. If raining is false, !raining is true.
if (!raining) {
  console.log("Leave your umbrella at home!");
}