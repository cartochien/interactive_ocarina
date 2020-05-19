var pitches = [];
var pitchNames = ['pitches/d', 'pitches/f', 'pitches/a', 'pitches/b', 'pitches/d2'];

var effects = [];
var effectNames = ['effects/songCorrect', 'effects/eponaNeigh', 'effects/eponaGallop', 'effects/cuccoMorning', 'effects/wolfNight', 'effects/rain', 'effects/thunder', 'effects/naviHey', 'effects/naviListen', 'effects/sariaLaugh', 'effects/doorTimeOpen', 'effects/doorTimeSlam'];

var songs = [];
var songNames = ['songs/forest', 'songs/fire', 'songs/water', 'songs/shadow', 'songs/spirit', 'songs/light', 'songs/zeldaLullaby', 'songs/sariaSong', 'songs/sunSong', 'songs/songStorm', 'songs/songTime', 'songs/eponaSong'];
var img = [];
var imgNames = ['images/oc_d', 'images/oc_f', 'images/oc_a', 'images/oc_b', 'images/oc_d2', 'images/oc_default', 'images/oc_blank'];

var keyrecorder = "";
var amplitude;
var currentTime = new Date().getHours();
var rectsize;

function preload() {

    //array of ocarina sounds and video game sound effects
    for (var i = 0; i < pitchNames.length; i++) {
        pitches[i] = loadSound(pitchNames[i] + '.wav');
    }
    //array of in-game songs
    for (var i = 0; i < songNames.length; i++) {
        songs[i] = loadSound(songNames[i] + '.mp3');
    }
    //array of ocarina images
    for (var i = 0; i < imgNames.length; i++) {
        img[i] = loadImage(imgNames[i] + '.png');
    }
    //array of sound effects    
    for (var i = 0; i < effectNames.length; i++) {
        effects[i] = loadSound(effectNames[i] + '.wav');
    }
}

function setup() {
    //centers canvas to middle of screen
    var cnv = createCanvas(420, 413.56);
    var x = (windowWidth - width) / 2;
    var y = 40; // 2;
    cnv.position(x, y);
    image(img[5], 0, 0, 420, 413.56);
}

function draw() {

    if (keyrecorder.length > 8) {
        keyrecorder = keyrecorder.substr(1, 8);
    }

    console.log(keyrecorder);

    if (keyrecorder.search("CADCAD") >= 0) { //Zelda's Lullaby
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[6].play(0.5);
        keyrecorder = "";
    } else if (keyrecorder.search("BDCBDC") >= 0) { //Saria's Song
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[7].play(0.2);
        effects[7].play(6.5); //Navi says "hey!"
        effects[8].play(7); //"listen!"
        effects[9].play(8); //Saria laughs
        keyrecorder = "";
    } else if (keyrecorder.search("DBADBA") >= 0) { //Sun's Song
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[8].play();
        if (currentTime >= 6 && currentTime <= 18) {
            effects[4].play(5.5); //if time is between 6am and 6pm, Sun's Song changes day to night and wolf howls
        } else {
            effects[3].play(5.5); //if time is between 6pm and 6am, Sun's Song changes night to day and cucco cockadoodledoos
        }
        keyrecorder = "";
    } else if (keyrecorder.search("EBAEBA") >= 0) { //Song of Storms 
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[9].play();
        effects[6].play(4.5); //thunder
        effects[6].play(5.2);
        effects[6].play(6.2);
        keyrecorder = "";
    } else if (keyrecorder.search("DEBDEB") >= 0) { //Song of Time
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[10].play();
        effects[10].play(10);
        effects[11].play(15);
        keyrecorder = "";
    } else if (keyrecorder.search("ACDACD") >= 0) { //Epona's Song
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[11].play();
        effects[1].play(8.2); //Epona neighs
        effects[2].play(9); //then gallops
        effects[2].play(9.4);
        effects[2].play(9.8);
        effects[2].play(10.2);
        keyrecorder = "";
    } else if (keyrecorder.search("EACDCD") >= 0) { //Minuet of Forest 
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[0].play();
        keyrecorder = "";
    } else if (keyrecorder.search("BEBEDBDB") >= 0) { //Bolero of Fire AND AMPLITUDE
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[1].play();
        //fill(30,60,50);
        //rectsize = map(amplitude.getLevel(), 0,1,0,1000);
        //rect(width/2, height/2, rectsize, rectsize);
        keyrecorder = "";
    } else if (keyrecorder.search("EBDDC") >= 0) { //Serenade of Water 
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[2].play();
        keyrecorder = "";
    } else if (keyrecorder.search("CDDECDB") >= 0) { //Nocturne of Shadow 
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[3].play();
        keyrecorder = "";
    } else if (keyrecorder.search("EBEDBE") >= 0) { //Requiem of Spirit 
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[4].play();
        keyrecorder = "";
    } else if (keyrecorder.search("ADADCA") >= 0) { //Prelude of Light
        image(img[5], 0, 0, 420, 413.56);
        effects[0].play();
        songs[5].play();
        keyrecorder = "";
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        pitches[4].play();
        image(img[4], 0, 0, 420, 413.56);
        keyrecorder = keyrecorder + "A"
    }
    if (keyCode == DOWN_ARROW) {
        pitches[1].play();
        image(img[1], 0, 0, 420, 413.56);
        keyrecorder = keyrecorder + "B"
    }
    if (keyCode == LEFT_ARROW) {
        pitches[3].play();
        image(img[3], 0, 0, 420, 413.56);
        keyrecorder = keyrecorder + "C"
    }
    if (keyCode == RIGHT_ARROW) {
        pitches[2].play();
        image(img[2], 0, 0, 420, 413.56);
        keyrecorder = keyrecorder + "D"
    }
    if (keyCode == "65") { //press 'A' to play d note
        pitches[0].play();
        image(img[0], 0, 0, 420, 413.56);
        keyrecorder = keyrecorder + "E"
    }
}
