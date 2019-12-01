let player1result = false;
let player2result = false;
let player3result = false;
let player4result = false;
class GolfCard {
    constructor() {
        this.teeType = selectedTee;
        this.courseUrl = selectedUrl
    }

    async createCard() {
        let result = await fetch(this.courseUrl);
        let object = await result.json();
        console.log(object);
        let holes = object.data.holes;
        let cardString = `
        <div class="row" id="header">
            <div class="lgBox" id="headerTitle">Hole</div>
            <div class="smBox" id="headerHole1">1</div>
            <div class="smBox" id="headerHole2">2</div>
            <div class="smBox" id="headerHole3">3</div>
            <div class="smBox" id="headerHole4">4</div>
            <div class="smBox" id="headerHole5">5</div>
            <div class="smBox" id="headerHole6">6</div>
            <div class="smBox" id="headerHole7">7</div>
            <div class="smBox" id="headerHole8">8</div>
            <div class="smBox" id="headerHole9">9</div>
            <div class="medBox" id="headerOut">Out</div>
            <div class="smBox" id="headerHole10">10</div>
            <div class="smBox" id="headerHole11">11</div>
            <div class="smBox" id="headerHole12">12</div>
            <div class="smBox" id="headerHole13">13</div>
            <div class="smBox" id="headerHole14">14</div>
            <div class="smBox" id="headerHole15">15</div>
            <div class="smBox" id="headerHole16">16</div>
            <div class="smBox" id="headerHole17">17</div>
            <div class="smBox" id="headerHole18">18</div>
            <div class="medBox" id="headerIn">In</div>
            <div class="lgBox" id="headerTotal">Total</div>
        </div>
        <div class="row" id="tee">
            <div class="lgBox" id="teeTitle">Tee: ${this.teeType}</div>
            <div class="smBox" id="teeHole1"></div>
            <div class="smBox" id="teeHole2"></div>
            <div class="smBox" id="teeHole3"></div>
            <div class="smBox" id="teeHole4"></div>
            <div class="smBox" id="teeHole5"></div>
            <div class="smBox" id="teeHole6"></div>
            <div class="smBox" id="teeHole7"></div>
            <div class="smBox" id="teeHole8"></div>
            <div class="smBox" id="teeHole9"></div>
            <div class="medBox" id="teeOut"></div>
            <div class="smBox" id="teeHole10"></div>
            <div class="smBox" id="teeHole11"></div>
            <div class="smBox" id="teeHole12"></div>
            <div class="smBox" id="teeHole13"></div>
            <div class="smBox" id="teeHole14"></div>
            <div class="smBox" id="teeHole15"></div>
            <div class="smBox" id="teeHole16"></div>
            <div class="smBox" id="teeHole17"></div>
            <div class="smBox" id="teeHole18"></div>
            <div class="medBox" id="teeIn"></div>
            <div class="lgBox" id="teeTotal"></div>
        </div>
        <div class="row" id="player1">
            <div class="lgBox" id="player1Title">Player 1</div>
            <div class="smBox" id="player1Hole1" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole2" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole3" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole4" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole5" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole6" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole7" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole8" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole9" onchange="setPlayer(1)"></div>
            <div class="medBox" id="player1Out"></div>
            <div class="smBox" id="player1Hole10" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole11" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole12" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole13" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole14" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole15" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole16" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole17" onchange="setPlayer(1)"></div>
            <div class="smBox" id="player1Hole18" onchange="setPlayer(1)"></div>
            <div class="medBox" id="player1In"></div>
            <div class="lgBox" id="player1Total"></div>
        </div>
        <div class="row" id="player2">
            <div class="lgBox" id="player2Title">Player 2</div>
            <div class="smBox" id="player2Hole1" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole2" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole3" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole4" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole5" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole6" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole7" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole8" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole9" onchange="setPlayer(2)"></div>
            <div class="medBox" id="player2Out"></div>
            <div class="smBox" id="player2Hole10" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole11" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole12" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole13" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole14" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole15" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole16" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole17" onchange="setPlayer(2)"></div>
            <div class="smBox" id="player2Hole18" onchange="setPlayer(2)"></div>
            <div class="medBox" id="player2In"></div>
            <div class="lgBox" id="player2Total"></div>
        </div>
        <div class="row" id="par">
            <div class="lgBox" id="parTitle">Par</div>
            <div class="smBox" id="parHole1"></div>
            <div class="smBox" id="parHole2"></div>
            <div class="smBox" id="parHole3"></div>
            <div class="smBox" id="parHole4"></div>
            <div class="smBox" id="parHole5"></div>
            <div class="smBox" id="parHole6"></div>
            <div class="smBox" id="parHole7"></div>
            <div class="smBox" id="parHole8"></div>
            <div class="smBox" id="parHole9"></div>
            <div class="medBox" id="parOut"></div>
            <div class="smBox" id="parHole10"></div>
            <div class="smBox" id="parHole11"></div>
            <div class="smBox" id="parHole12"></div>
            <div class="smBox" id="parHole13"></div>
            <div class="smBox" id="parHole14"></div>
            <div class="smBox" id="parHole15"></div>
            <div class="smBox" id="parHole16"></div>
            <div class="smBox" id="parHole17"></div>
            <div class="smBox" id="parHole18"></div>
            <div class="medBox" id="parIn"></div>
            <div class="lgBox" id="parTotal"></div>
        </div>
        <div class="row" id="player3">
            <div class="lgBox" id="player3Title">Player 3</div>
            <div class="smBox" id="player3Hole1" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole2" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole3" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole4" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole5" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole6" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole7" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole8" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole9" onchange="setPlayer(3)"></div>
            <div class="medBox" id="player3Out"></div>
            <div class="smBox" id="player3Hole10" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole11" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole12" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole13" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole14" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole15" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole16" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole17" onchange="setPlayer(3)"></div>
            <div class="smBox" id="player3Hole18" onchange="setPlayer(3)"></div>
            <div class="medBox" id="player3In"></div>
            <div class="lgBox" id="player3Total"></div>
        </div>
        <div class="row" id="player4">
            <div class="lgBox" id="player4Title">Player 4</div>
            <div class="smBox" id="player4Hole1" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole2" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole3" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole4" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole5" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole6" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole7" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole8" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole9" onchange="setPlayer(4)"></div>
            <div class="medBox" id="player4Out"></div>
            <div class="smBox" id="player4Hole10" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole11" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole12" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole13" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole14" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole15" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole16" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole17" onchange="setPlayer(4)"></div>
            <div class="smBox" id="player4Hole18" onchange="setPlayer(4)"></div>
            <div class="medBox" id="player4In"></div>
            <div class="lgBox" id="player4Total"></div>
        </div>
        <div class="row" id="handicap">
            <div class="lgBox" id="handicapTitle">Handicap</div>
            <div class="smBox" id="handicapHole1"></div>
            <div class="smBox" id="handicapHole2"></div>
            <div class="smBox" id="handicapHole3"></div>
            <div class="smBox" id="handicapHole4"></div>
            <div class="smBox" id="handicapHole5"></div>
            <div class="smBox" id="handicapHole6"></div>
            <div class="smBox" id="handicapHole7"></div>
            <div class="smBox" id="handicapHole8"></div>
            <div class="smBox" id="handicapHole9"></div>
            <div class="medBox" id="handicapOut"></div>
            <div class="smBox" id="handicapHole10"></div>
            <div class="smBox" id="handicapHole11"></div>
            <div class="smBox" id="handicapHole12"></div>
            <div class="smBox" id="handicapHole13"></div>
            <div class="smBox" id="handicapHole14"></div>
            <div class="smBox" id="handicapHole15"></div>
            <div class="smBox" id="handicapHole16"></div>
            <div class="smBox" id="handicapHole17"></div>
            <div class="smBox" id="handicapHole18"></div>
            <div class="medBox" id="handicapIn"></div>
            <div class="lgBox" id="handicapTotal"></div>
        </div>`;
        document.getElementById("golfCard").innerHTML += cardString;
        document.getElementById("golfCard").style.display = "flex";
    }

    async setCard() {
        let result = await fetch(this.courseUrl);
        let object = await result.json();
        console.log(object);
        let holes = object.data.holes;
        let teeOut = 0;
        let teeIn = 0;
        let teeTotal = 0;
        let parOut = 0;
        let parIn = 0;
        let parTotal = 0;
        let hcpOut = 0;
        let hcpIn = 0;
        let hcpTotal = 0;
        for (let i = 0; i < holes.length; i++) {
            for (let x = 0; x < holes[i].teeBoxes.length; x++) {
                if (holes[i].teeBoxes[x].teeType === this.teeType) {
                    let id = "";
                    id += "teeHole" + (i + 1);
                    let parId = "";
                    parId += "parHole" + (i + 1);
                    let handId = "";
                    handId += "handicapHole" + (i + 1);
                    let player1Id = "";
                    player1Id += "player1Hole" + (i + 1);
                    let player2Id = "";
                    player2Id += "player2Hole" + (i + 1);
                    let player3Id = "";
                    player3Id += "player3Hole" + (i + 1);
                    let player4Id = "";
                    player4Id += "player4Hole" + (i + 1);
                    document.getElementById(id).innerHTML = holes[i].teeBoxes[x].yards;
                    document.getElementById(parId).innerHTML = holes[i].teeBoxes[x].par;
                    document.getElementById(handId).innerHTML = holes[i].teeBoxes[x].hcp;
                    document.getElementById(player1Id).innerHTML = "0";
                    document.getElementById(player2Id).innerHTML = "0";
                    document.getElementById(player3Id).innerHTML = "0";
                    document.getElementById(player4Id).innerHTML = "0";
                    document.getElementById(player1Id).contentEditable = true;
                    document.getElementById(player2Id).contentEditable = true;
                    document.getElementById(player3Id).contentEditable = true;
                    document.getElementById(player4Id).contentEditable = true;
                    if (i < 9) {
                        teeOut += holes[i].teeBoxes[x].yards;
                        teeTotal += holes[i].teeBoxes[x].yards;
                        parOut += holes[i].teeBoxes[x].par;
                        parTotal += holes[i].teeBoxes[x].par;
                        hcpOut += holes[i].teeBoxes[x].hcp;
                        hcpTotal += holes[i].teeBoxes[x].hcp;
                    }
                    if (i >= 9) {
                        teeIn += holes[i].teeBoxes[x].yards;
                        teeTotal += holes[i].teeBoxes[x].yards;
                        parIn += holes[i].teeBoxes[x].par;
                        parTotal += holes[i].teeBoxes[x].par;
                        hcpIn += holes[i].teeBoxes[x].hcp;
                        hcpTotal += holes[i].teeBoxes[x].hcp;
                    }
                }
            }
        }
        document.getElementById("teeOut").innerHTML = teeOut;
        document.getElementById("teeIn").innerHTML = teeIn;
        document.getElementById("teeTotal").innerHTML = teeTotal;
        document.getElementById("parOut").innerHTML = parOut;
        document.getElementById("parIn").innerHTML = parIn;
        document.getElementById("parTotal").innerHTML = parTotal;
        document.getElementById("handicapOut").innerHTML = hcpOut;
        document.getElementById("handicapIn").innerHTML = hcpIn;
        document.getElementById("handicapTotal").innerHTML = hcpTotal;
        document.getElementById("player1Title").contentEditable = true;
        document.getElementById("player2Title").contentEditable = true;
        document.getElementById("player3Title").contentEditable = true;
        document.getElementById("player4Title").contentEditable = true;
        let frames = 0;
        function loop () {
            frames++;
            setPlayer(1);
            setPlayer(2);
            setPlayer(3);
            setPlayer(4);
            check();
            window.requestAnimationFrame(loop);
        }
        loop();
    }

}

function setPlayer(number) {
    let player = "player" + number;
    let playerOut = 0;
    let playerIn = 0;
    let playerTotal = 0;
    let playerOutId = "player" + number + "Out";
    let playerInId = "player" + number + "In";
    let playerTotalId = "player" + number + "Total";
    for (let i = 0; i < 18; i++) {
        let myId = player + "Hole" + (i + 1);
        let thatId = document.getElementById(myId).innerHTML;
        if (i < 9) {
            playerOut += parseInt(thatId);
            playerTotal += parseInt(thatId);
        }
        if (i >= 9) {
            playerIn += parseInt(thatId);
            playerTotal += parseInt(thatId);
        }
    }
    document.getElementById(playerOutId).innerHTML = playerOut;
    document.getElementById(playerInId).innerHTML = playerIn;
    document.getElementById(playerTotalId).innerHTML = playerTotal;
}

function check() {
    for (let i = 0; i < 4; i++) {
        for (let j = (i + 1); j < 4; j++) {
            if (document.getElementById("player" + (i + 1) + "Title").innerHTML === document.getElementById("player" + (j + 1) + "Title").innerHTML) {
                document.getElementById("player" + (i + 1) + "Title").innerHTML = "Player " + (i + 1);
            }
        }
        for (let j = 0; j < 18; j++) {
            let thisId = document.getElementById("player" + (i + 1) + "Hole" + (j + 1)).innerHTML;
            let reg = /[^0-9.]/gm;
            if (reg.test(thisId) === false) {}
            else document.getElementById("player" + (i + 1) + "Hole" + (j + 1)).innerHTML = "0";
        }
    }

    let result = true;
    for (let i = 0; i < 4; i++) {
        for (let x = 0; x < 18; x++) {
            let thisId = document.getElementById("player" + (i + 1) + "Hole" + (x + 1)).innerHTML;
            if (thisId === "0" || thisId === "") {
                result = false;
            }
            if (x === 17 && result !== false && i === 0 && player1result === false) {
                player1result = true;
                if (parseInt(document.getElementById("player1Total").innerHTML) < parseInt(document.getElementById("parTotal").innerHTML)) {
                    alert(`Well Done. You did better than average.
                           Your Score was ${document.getElementById("player1Total").innerHTML}
                           Par was ${document.getElementById("parTotal").innerHTML}`);
                }
                if (parseInt(document.getElementById("player1Total").innerHTML) >= parseInt(document.getElementById("parTotal").innerHTML)) {
                    alert(`You need more practice!
                        Your Score was ${document.getElementById("player1Total").innerHTML}
                        Par was ${document.getElementById("parTotal").innerHTML}`);
                }
            }
            if (x === 17 && result !== false && i === 1 && player2result === false) {
                player2result = true;
                if (parseInt(document.getElementById("player2Total").innerHTML) < parseInt(document.getElementById("parTotal").innerHTML)) {
                    alert(`Well Done. You did better than average.
                           Your Score was ${document.getElementById("player2Total").innerHTML}
                           Par was ${document.getElementById("parTotal").innerHTML}`);
                }
                if (parseInt(document.getElementById("player2Total").innerHTML) >= parseInt(document.getElementById("parTotal").innerHTML)) {
                    alert(`You need more practice!
                        Your Score was ${document.getElementById("player2Total").innerHTML}
                        Par was ${document.getElementById("parTotal").innerHTML}`);
                }
            }
            if (x === 17 && result !== false && i === 2 && player3result === false) {
                player3result = true;
                if (parseInt(document.getElementById("player3Total").innerHTML) < parseInt(document.getElementById("parTotal").innerHTML)) {
                    alert(`Well Done. You did better than average.
                           Your Score was ${document.getElementById("player3Total").innerHTML}
                           Par was ${document.getElementById("parTotal").innerHTML}`);
                }
                if (parseInt(document.getElementById("player3Total").innerHTML) >= parseInt(document.getElementById("parTotal").innerHTML)) {
                    alert(`You need more practice!
                        Your Score was ${document.getElementById("player3Total").innerHTML}
                        Par was ${document.getElementById("parTotal").innerHTML}`);
                }
            }
            if (x === 17 && result !== false && i === 3 && player4result === false) {
                player4result = true;
                if (parseInt(document.getElementById("player4Total").innerHTML) < parseInt(document.getElementById("parTotal").innerHTML)) {
                    alert(`Well Done. You did better than average.
                           Your Score was ${document.getElementById("player4Total").innerHTML}
                           Par was ${document.getElementById("parTotal").innerHTML}`);
                }
                if (parseInt(document.getElementById("player4Total").innerHTML) >= parseInt(document.getElementById("parTotal").innerHTML)) {
                    alert(`You need more practice!
                        Your Score was ${document.getElementById("player4Total").innerHTML}
                        Par was ${document.getElementById("parTotal").innerHTML}`);
                }
            }
        }
    }
}