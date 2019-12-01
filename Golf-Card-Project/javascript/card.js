class Card {
    constructor(courseNumber){
        this.img = null;
        this.title = null;
        this.number = courseNumber;
    }

    resetCards() {
        let cardHTML = document.getElementById("courses");
        cardHTML.innerHTML = "";
    }

    async addCourse() {
        let response = await fetch("https://golf-courses-api.herokuapp.com/courses");
        let object = await response.json();
        console.log(object);
        let course = object.courses[this.number];
        this.title = course.name;
        this.img = course.image;
        document.getElementById("courses").innerHTML += `
        <div class="courseCard">
            <div class="courseImg" id="${this.returnId()}">
                <img src="${this.img}" alt="This is the image" style="height:100%; width:100%;">
            </div>
            <div class="courseDescription">
                <p>${this.title}</p>
            </div>
            <div class="courseButton">
                <button onclick="selectCourse(${course.id})">Select Course</button>
            </div>
        </div>`;
    }

    returnId() {
        if (this.number !== null) {
            if (this.number === 1) {
                return "firstCourse";
            }
            if (this.number === 2) {
                return "secondCourse";
            }
            else return "thirdCourse";
        }
    }

}

let firstCourse = new Card(0);
let secondCourse = new Card(1);
let thirdCourse = new Card (2);
firstCourse.resetCards();
firstCourse.addCourse().then(r => null);
secondCourse.addCourse().then(r => null);
thirdCourse.addCourse().then(r => null);