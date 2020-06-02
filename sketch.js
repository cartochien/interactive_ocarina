var pitches = [];
var pitchNames = ['pitches/d', 'pitches/f', 'pitches/a', 'pitches/b', 'pitches/d2'];

var effects = [];
var effectNames = ['effects/songCorrect', 'effects/eponaNeigh', 'effects/eponaGallop', 'effects/cuccoMorning', 'effects/wolfNight', 'effects/rainExtended', 'effects/thunder', 'effects/naviHey', 'effects/naviListen', 'effects/sariaLaugh', 'effects/doorTimeOpen', 'effects/doorTimeSlam'];

var songs = [];
var songNames = ['songs/forest', 'songs/fire', 'songs/water', 'songs/shadow', 'songs/spirit', 'songs/light', 'songs/zeldaLullaby', 'songs/sariaSong', 'songs/sunSong', 'songs/songStorm', 'songs/songTime', 'songs/eponaSong'];

var img = [];
var imgNames = ['images/oc_d', 'images/oc_f', 'images/oc_a', 'images/oc_b', 'images/oc_d2', 'images/oc_default', 'images/oc_d_hover', 'images/oc_f_hover', 'images/oc_a_hover', 'images/oc_b_hover', 'images/oc_d2_hover'];

var keyrecorder = "";
var amplitude;
var isDayTime = true;

function preload() {
    //array of ocarina pitches
    for (var i = 0; i < pitchNames.length; i++) {
        pitches[i] = loadSound(pitchNames[i] + '.wav');
    }
    //array of songs
    for (var i = 0; i < songNames.length; i++) {
        songs[i] = loadSound(songNames[i] + '.mp3');
        songs[i].setVolume(0.3)
    }
    //array of ocarina images
    for (var i = 0; i < imgNames.length; i++) {
        img[i] = loadImage(imgNames[i] + '.png');
    }
    //array of sound effects    
    for (var i = 0; i < effectNames.length; i++) {
        effects[i] = loadSound(effectNames[i] + '.wav');
        effects[i].setVolume(0.5)
    }
}

function setup() {
    var cnv = createCanvas(420, 437.5);

    image(img[5], 0, 0, 420, 437.5);
}

function draw() {
    if (keyrecorder.length > 8) {
        keyrecorder = keyrecorder.substr(1, 8);
    }

    if (keyrecorder.search("CADCAD") >= 0) { //Zelda's Lullaby
        effects[0].play();
        songs[6].play();
        keyrecorder = "";
    } else if (keyrecorder.search("BDCBDC") >= 0) { //Saria's Song
        effects[0].play();
        songs[7].play();
        effects[7].play(6.3); //Navi says "Hey!"
        effects[8].play(6.8); //"Listen!"
        effects[9].play(7.8); //Saria laughs
        keyrecorder = "";
    } else if (keyrecorder.search("DBADBA") >= 0) { //Sun's Song
        effects[0].play();
        songs[8].play();
        if (isDayTime == true) {
            isDayTime = !isDayTime;
            effects[4].play(5.5); //wolf howls
        } else if (isDayTime == false) {
            isDayTime = !isDayTime;
            effects[3].play(5.5); //cucco cockadoodledoos
        }
        keyrecorder = "";
    } else if (keyrecorder.search("EBAEBA") >= 0) { //Song of Storms 
        effects[0].play();
        songs[9].play();
        effects[5].play(5); //rain
        effects[6].play(6.5); //thunder
        effects[6].play(7.2);
        effects[6].play(9.1);
        keyrecorder = "";
    } else if (keyrecorder.search("DEBDEB") >= 0) { //Song of Time
        effects[0].play();
        songs[10].play();
        effects[10].play(10); //door opens
        effects[11].play(15); //then slams
        keyrecorder = "";
    } else if (keyrecorder.search("ACDACD") >= 0) { //Epona's Song
        effects[0].play();
        songs[11].play();
        effects[1].play(8); //Epona neighs
        keyrecorder = "";
    } else if (keyrecorder.search("EACDCD") >= 0) { //Minuet of Forest 
        effects[0].play();
        songs[0].play();
        keyrecorder = "";
    } else if (keyrecorder.search("BEBEDBDB") >= 0) { //Bolero of Fire
        effects[0].play();
        songs[1].play();
        keyrecorder = "";
    } else if (keyrecorder.search("EBDDC") >= 0) { //Serenade of Water 
        effects[0].play();
        songs[2].play();
        keyrecorder = "";
    } else if (keyrecorder.search("CDDECDB") >= 0) { //Nocturne of Shadow 
        effects[0].play();
        songs[3].play();
        keyrecorder = "";
    } else if (keyrecorder.search("EBEDBE") >= 0) { //Requiem of Spirit 
        effects[0].play();
        songs[4].play();
        keyrecorder = "";
    } else if (keyrecorder.search("ADADCA") >= 0) { //Prelude of Light
        effects[0].play();
        songs[5].play();
        keyrecorder = "";
    }
}

function mouseMoved() {
    var dNoteInside = dist(mouseX, mouseY, 124, 413);
    var fNoteInside = dist(mouseX, mouseY, 168, 402);
    var aNoteInside = dist(mouseX, mouseY, 210, 388);
    var bNoteInside = dist(mouseX, mouseY, 253, 375);
    var d2NoteInside = dist(mouseX, mouseY, 296, 364);

    if (dNoteInside < 15.5) {
        clear();
        cursor(HAND);
        image(img[6], 0, 0, 420, 437.5); 
    } else if (fNoteInside < 15.5) {
        clear();
        cursor(HAND); 
        image(img[7], 0, 0, 420, 437.5);
    } else if (aNoteInside < 15.5) {
        clear();
        cursor(HAND); 
        image(img[8], 0, 0, 420, 437.5);
    } else if (bNoteInside < 15.5) {
        clear();
        cursor(HAND); 
        image(img[9], 0, 0, 420, 437.5);
    } else if (d2NoteInside < 15.5) {
        clear();
        cursor(HAND); 
        image(img[10], 0, 0, 420, 437.5);
    } else {
        clear();
        cursor(ARROW);
        image(img[5], 0, 0, 420, 437.5);
    }
}

function mousePressed() {
    var dNoteInside = dist(mouseX, mouseY, 124, 413);
    var fNoteInside = dist(mouseX, mouseY, 168, 402);
    var aNoteInside = dist(mouseX, mouseY, 210, 388);
    var bNoteInside = dist(mouseX, mouseY, 253, 375);
    var d2NoteInside = dist(mouseX, mouseY, 296, 364);

    if (dNoteInside < 15.5) {
        clear();
        pitches[0].play();
        image(img[0], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "E"
    } else if (fNoteInside < 15.5) {
        clear();
        pitches[1].play();
        image(img[1], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "B"
    } else if (aNoteInside < 15.5) {
        clear();
        pitches[2].play();
        image(img[2], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "D"
    } else if (bNoteInside < 15.5) {
        clear();
        pitches[3].play();
        image(img[3], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "C"
    } else if (d2NoteInside < 15.5) {
        clear();
        pitches[4].play();
        image(img[4], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "A"
    }
}

function mouseReleased() {
    clear();
    image(img[5], 0, 0, 420, 437.5);
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        clear();
        pitches[4].play();
        image(img[4], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "A"
    } else if (keyCode == DOWN_ARROW) {
        clear();
        pitches[1].play();
        image(img[1], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "B"
    } else if (keyCode == LEFT_ARROW) {
        clear();
        pitches[3].play();
        image(img[3], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "C"
    } else if (keyCode == RIGHT_ARROW) {
        clear();
        pitches[2].play();
        image(img[2], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "D"
    } else if (keyCode == "65") { //press 'A' to play d note
        clear();
        pitches[0].play();
        image(img[0], 0, 0, 420, 437.5);
        keyrecorder = keyrecorder + "E"
    }
}

function keyReleased() {
    clear();
    image(img[5], 0, 0, 420, 437.5);
}

function touchStarted() {
    image(img[1], 0, 0, 420, 437.5);
    // var dNoteInside = dist(mouseX, mouseY, 124, 413);
    // var fNoteInside = dist(mouseX, mouseY, 168, 402);
    // var aNoteInside = dist(mouseX, mouseY, 210, 388);
    // var bNoteInside = dist(mouseX, mouseY, 253, 375);
    // var d2NoteInside = dist(mouseX, mouseY, 296, 364);

    // if (dNoteInside < 15.5) {
    //     clear();
    //     pitches[0].play();
    //     image(img[0], 0, 0, 420, 437.5);
    //     keyrecorder = keyrecorder + "E"
    // } else if (fNoteInside < 15.5) {
    //     clear();
    //     pitches[1].play();
    //     image(img[1], 0, 0, 420, 437.5);
    //     keyrecorder = keyrecorder + "B"
    // } else if (aNoteInside < 15.5) {
    //     clear();
    //     pitches[2].play();
    //     image(img[2], 0, 0, 420, 437.5);
    //     keyrecorder = keyrecorder + "D"
    // } else if (bNoteInside < 15.5) {
    //     clear();
    //     pitches[3].play();
    //     image(img[3], 0, 0, 420, 437.5);
    //     keyrecorder = keyrecorder + "C"
    // } else if (d2NoteInside < 15.5) {
    //     clear();
    //     pitches[4].play();
    //     image(img[4], 0, 0, 420, 437.5);
    //     keyrecorder = keyrecorder + "A"
    // }
}

function touchEnded() {
    clear();
    image(img[5], 0, 0, 420, 437.5);    
}