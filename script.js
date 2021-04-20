var platitudeList = [
  "It is what it is",
  "The night is always darkest before the dawn",
  "Don't worry about it",
  "Forgive and forget",
];

function generatePlat() {
  var numberOfPlats = platitudeList.length;
  var randomIndex = Math.floor(Math.random() * numberOfPlats);
  var randomPlat = platitudeList[randomIndex];

  return randomPlat + " is your platitude.";
}

generatePlat();
document.getElementById("generate").addEventListener("click", function () {
  var plat = generatePlat();
  document.getElementById("platBox").value = plat;
  console.log(plat);
});
