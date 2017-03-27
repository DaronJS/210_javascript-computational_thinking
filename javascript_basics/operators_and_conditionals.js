var apples = 3;
var bananas = "3";

if (apples === bananas) {
  console.log("They are equal");
} else {
    if (apples == bananas) {
      console.log("They are not strictly equal");
    } else {
      console.log("They are not equal");
    }
}

apples = 3;
bananas = 3;

var areEqual = (apples === bananas);

console.log(areEqual);

apples = 3;
bananas = undefined;

var eitherOr = bananas || apples;

console.log(eitherOr);

var lastName = "Spaulding";

var familyMessage = lastName === "Spaulding" ? "You're a part of the family!" : "You're not family.";
console.log(familyMessage);