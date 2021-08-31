i = "0";
Chill Bro = "";
Chumma Kizhi = "";
Vaathi Coming = "";
Kutti Story = "";
Verithanam = "";
Enjoy Enjaami = "";

function preload() {
    Chill Bro = loadSound('Chill-Bro (2).mp3');
    Chumma Kizhi = loadSound("Chumma-Kizhi.mp3");
  Vaathi Coming = loadSound("Vaathi-Coming.mp3");
  Kutti Story = loadSound("Kutti-Story.mp3");
  Verithanam = loadSound("Verithanam.mp3");
  Enjoy Enjaami = loadSound("Enjoy-Enjaami.mp3");

}

function setup() {
    canvas = createCanvas(400, 400);
    background(153);
    canvas.position(480, 250);
    
    cam = createCapture(VIDEO);
    cam.hide();
}

function draw() {
    image(cam, 0, 0, 400, 400);
}
function Play() {
    Song = document.getElementById("Song_Name").value;
    Song.play();
}


function Next() {
    Songs_name_array = ["Chill Bro",
                   "Chumma Kizhi",
                   "Vaathi Coming",
                   "Kutti Story",
                   "Verithanam",
                   "Enjoy Enjaami"
                ];
    i = i + 1;
    Song = Songs_name_array[i];
    document.getElementById("Song_Name").innerhtml = Song;
}