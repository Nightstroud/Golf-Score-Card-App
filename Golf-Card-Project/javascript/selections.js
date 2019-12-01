let selectedUrl = "";
let selectedTee = null;

let selection = document.getElementById("selection");
selection.style.display = "none";

function selectCourse (id) {
    document.getElementById("courses").style.display = "none";
    selection.style.display = "flex";
    selectedUrl = "https://golf-courses-api.herokuapp.com/courses/" + id;
    return selectedUrl;
}

function selectTee () {
    selectedTee = document.getElementById("selectedTee").value;
    selection.style.display = "none";
    let golfCard = new GolfCard();
    golfCard.createCard().then(r => null);
    golfCard.setCard().then(r => null);
}