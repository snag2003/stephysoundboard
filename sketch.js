let weight = window.innerWidth;
let height = window.innerHeight;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom = [];

let alert;
let among_us;
let bonk;
let boom;
let cartoon_slip;
let do_it;
let minecraft_damage;
let oh_my_god;
let samsung_notif;

function preload() {
  soundFormats("mp3");
  alert = loadSound("sounds/alert.mp3");
  among_us = loadSound("sounds/among_us.mp3");
  bonk = loadSound("sounds/bonk.mp3");
  boom = loadSound("sounds/boom.mp3");
  cartoon_slip = loadSound("sounds/cartoon_slip.mp3");
  do_it = loadSound("sounds/do_it.mp3");
  minecraft_damage = loadSound("sounds/minecraft_damage.mp3");
  oh_my_god = loadSound("sounds/oh_my_god.mp3");
  samsung_notif = loadSound("sounds/samsung_notif.mp3");
}

function setup() {
  canvas = createCanvas(weight, height);

  // Create buttons
  let b1 = new Button(
    weight / 3,
    height / 3,
    weight * 0.15,
    weight * 0.04,
    color(226, 132, 19),
    color(244, 190, 124),
    alert
  );
  let b2 = new Button(
    weight / 2,
    height / 3,
    weight * 0.15,
    weight * 0.04,
    color(0, 159, 183),
    color(153, 241, 255),
    among_us
  );
  let b3 = new Button(
    (2 * weight) / 3,
    height / 3,
    weight * 0.15,
    weight * 0.04,
    color(145, 145, 233),
    color(204, 204, 245),
    bonk
  );

  let b4 = new Button(
    weight / 3,
    height / 2,
    weight * 0.15,
    weight * 0.04,
    color(205, 92, 92),
    color(240, 128, 128),
    boom
  );
  let b5 = new Button(
    weight / 2,
    height / 2,
    weight * 0.15,
    weight * 0.04,
    color(72, 209, 204),
    color(175, 238, 238),
    cartoon_slip
  );
  let b6 = new Button(
    (2 * weight) / 3,
    height / 2,
    weight * 0.15,
    weight * 0.04,
    color(255, 215, 0),
    color(255, 255, 0),
    do_it
  );

  let b7 = new Button(
    weight / 3,
    (2 * height) / 3,
    weight * 0.15,
    weight * 0.04,
    color(255, 163, 175),
    color(255, 214, 220),
    minecraft_damage
  );
  let b8 = new Button(
    weight / 2,
    (2 * height) / 3,
    weight * 0.15,
    weight * 0.04,
    color(143, 45, 86),
    color(216, 131, 166),
    oh_my_god
  );
  let b9 = new Button(
    (2 * weight) / 3,
    (2 * height) / 3,
    weight * 0.15,
    weight * 0.04,
    color(236, 78, 32),
    color(234, 162, 133),
    samsung_notif
  );

  buttons_top.push(b1);
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_middle.push(b4);
  buttons_middle.push(b5);
  buttons_middle.push(b6);

  buttons_bottom.push(b7);
  buttons_bottom.push(b8);
  buttons_bottom.push(b9);
}

function mousePressed() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].clicked(mouseX, mouseY);
    buttons_middle[i].clicked(mouseX, mouseY);
    buttons_bottom[i].clicked(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].y = height / 3;
    buttons_middle[i].y = height / 2;
    buttons_bottom[i].y = (2 * height) / 3;
  }
}

function draw() {
  background(247, 178, 183);
  noStroke();
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].show(); // using our show() function from our Button class.
    buttons_middle[i].show();
    buttons_bottom[i].show();
  }
}

class Button {
  constructor(x, y, w, h, color, accent, song, animationType) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.song = song;
    this.animationType = animationType;
  }
  show() {
    noStroke();

    fill(this.color);
    rect(this.x - weight * 0.075, this.y, this.w, 50);

    fill(this.accent);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color);
    arc(this.x, this.y + 49, this.w, this.h, TWO_PI, PI);
  }
  clicked(px, py) {
    let horizontalThreshold = this.w * 0.5; // Adjust this value as needed for horizontal threshold
    let verticalThreshold = this.h * 0.8; // Adjust this value as needed for vertical threshold

    let horizontalDistance = abs(px - this.x);
    let verticalDistance = abs(py - this.y);

    if (
      horizontalDistance < horizontalThreshold &&
      verticalDistance < verticalThreshold &&
      this.song.isLoaded()
    ) {
      this.y = this.y + 10;
      this.song.play();
    }
  }
}
