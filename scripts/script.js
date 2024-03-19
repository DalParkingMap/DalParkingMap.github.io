let isNamedDay = true;
let isNamedEve = true;
//Check the system time every second
setInterval(checkTime, 1000);

/*All open functions for evening lots 1-21*/
function openEve1() {
    document.getElementById('eve1Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve2() {
    document.getElementById('eve2Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve3() {
    document.getElementById('eve3Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve4() {
    document.getElementById('eve4Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve5() {
    document.getElementById('eve5Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve6() {
    document.getElementById('eve6Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve7() {
    document.getElementById('eve7Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve8() {
    document.getElementById('eve8Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve9() {
    document.getElementById('eve9Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve10() {
    document.getElementById('eve10Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve11() {
    document.getElementById('eve11Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve12() {
    document.getElementById('eve12Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve13() {
    document.getElementById('eve13Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve14() {
    document.getElementById('eve14Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve15() {
    document.getElementById('eve15Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve16() {
    document.getElementById('eve16Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve17() {
    document.getElementById('eve17Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve18() {
    document.getElementById('eve18Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve19() {
    document.getElementById('eve19Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve20() {
    document.getElementById('eve20Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openEve21() {
    document.getElementById('eve21Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

/*All open functions for day lots 1-21*/
function openDay1() {
    document.getElementById('day1Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay2() {
    document.getElementById('day2Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay3() {
    document.getElementById('day3Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay4() {
    document.getElementById('day4Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay5() {
    document.getElementById('day5Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay6() {
    document.getElementById('day6Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay7() {
    document.getElementById('day7Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay8() {
    document.getElementById('day8Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay9() {
    document.getElementById('day9Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay10() {
    document.getElementById('day10Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay11() {
    document.getElementById('day11Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay12() {
    document.getElementById('day12Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay13() {
    document.getElementById('day13Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay14() {
    document.getElementById('day14Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay15() {
    document.getElementById('day15Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay16() {
    document.getElementById('day16Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay17() {
    document.getElementById('day17Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay18() {
    document.getElementById('day18Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay19() {
    document.getElementById('day19Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay20() {
    document.getElementById('day20Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function openDay21() {
    document.getElementById('day21Modal').classList.add('open');
    document.body.classList.add('modal-open');
}

function closeModal() {
    document.querySelector('.modal.open').classList.remove('open');
    document.body.classList.remove('modal-open');
}

window.onclick = clickWindow;
function clickWindow(event) {
    var modal = document.querySelector('.modal');
    //Check if the clicked element has the class "modal"
    if (event.target.classList.contains('modal')) {
        document.querySelector('.modal.open').classList.remove('open');
        document.body.classList.remove('modal-open');
    }
}

//Check if (when using a mobile device), the screen is vertical. If it is, tell user to rotate
function rotateAlert() {
    if (window.innerWidth < 913) {
        alert("Please rotate your device 90 degrees for better viewing.");
    }
}

function checkTime() {
    var currentDate = new Date();
    var day = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();

    //Check if it's a weekday and the time is between 6 AM and 4:30 PM and if so, change the map
    if ((day >= 1 && day <= 5) && ((hour >= 6 && hour < 16) || (hour === 16 && minute < 30))) {
        const parents = document.getElementsByClassName("parenteve");
        hideChildren(parents);
    }
    else {
        const parents = document.getElementsByClassName("parentday");
        hideChildren(parents);
    }
    //If it's the exact time that a map switches over, then refresh the page manually to get the new map
    if ((day >= 1 && day <= 5) && (hour === 16 && minute === 30 && second === 0) || (day >= 1 && day <= 5) && (hour === 6 && minute === 0 && second === 0)) {
        location.reload();
    }
}

function pageLoad() {
    checkTime();
    rotateAlert();
}

function hideChildren(parents) {
    for (let i = 0; i < parents.length; i++) {
        const parent = parents[i];
        const children = parent.querySelectorAll('a, img');
        for (let j = 0; j < children.length; j++) {
            children[j].style.display = "none";
        }
    }
}

function toggleBuildingNames() {
    var currentDate = new Date();
    const day = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    let daytime = false;
    let evening = false;

    //Check if it's a weekday and the time is between 6 AM and 4:30 PM
    if ((day >= 1 && day <= 5) && ((hour >= 6 && hour < 16) || (hour === 16 && minute < 30))) {
        daytime = true;
    }
    //Check if it's not
    else {
        evening = true;
    }

    if (daytime == true && isNamedDay == true) {
        const map = document.getElementById("daymap");
        map.src = "media/maps/daymap.png";
        isNamedDay = false;
    }
    else if (daytime == true && isNamedDay == false) {
        const map = document.getElementById("daymap");
        map.src = "media/maps/daymapnamed.png";
        isNamedDay = true;
    }
    else if (evening == true && isNamedEve == true) {
        const map = document.getElementById("evemap");
        map.src = "media/maps/eveningmap.png";
        isNamedEve = false;
    }
    else if (evening == true && isNamedEve == false) {
        const map = document.getElementById("evemap");
        map.src = "media/maps/eveningmapnamed.png";
        isNamedEve = true;
    }
}