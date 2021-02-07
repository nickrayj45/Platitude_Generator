var platitudeList = ['It is what it is', 'The night is always darkest before the dawn', 'Don\'t worry about it', 'Forgive and forget'];




function generatePlat(platitudeList) {
    var numberOfPlats = platitudeList.length;
    var generatedPlat = Math.floor(Math.random() * numberOfPlats);
    var randomPlat = platitudeList[generatedPlat];

    return randomPlat + " is your platitude.";


};

generatePlat(randomPlat);
