


var sound, amplitude, cnv;

function preload(){
  alligatorClip = loadSound('assets/alligator.mp3');
  antelopeClip = loadSound('assets/antelope.mp3');
  batClip = loadSound('assets/bat.mp3');
  bearClip = loadSound('assets/bear.mp3');
  beaverClip = loadSound('assets/beaver.mp3');
  bobwhiteClip = loadSound('assets/bobwhite.mp3');
  buffaloClip = loadSound('assets/buffalo.mp3');
  crowClip = loadSound('assets/crow.mp3');
  cuckooClip = loadSound('assets/cuckoo.mp3');
  eagleClip = loadSound('assets/eagle.mp3');
  flamingarrowClip = loadSound('assets/flamingarrow.mp3');
  foxClip = loadSound('assets/fox.mp3');
  hawkClip = loadSound('assets/hawk.mp3');
  mooseClip = loadSound('assets/moose.mp3');
  owlClip = loadSound('assets/owl.mp3');
  pantherClip = loadSound('assets/panther.mp3');
  pelicanClip = loadSound('assets/pelican.mp3');
  pinetreeClip = loadSound('assets/pinetree.mp3');
  raccoonClip = loadSound('assets/raccoon.mp3');
  rattlesnakeClip = loadSound('assets/rattlesnake.mp3');
  ravenClip = loadSound('assets/raven.mp3');
  sealClip = loadSound('assets/seal.mp3');
  whippoorwillClip = loadSound('assets/whippoorwill.mp3');
  wolfClip = loadSound('assets/wolf.mp3');
}

function setup() {

  var text;
  var canvas;
  var rowdiv;
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  
  rowdiv = createDiv('Patrol names and calls');
  startcap = rowdiv.class('startcap');
  
  rowdiv = createDiv('<span class="left">Alligator</span> <span class="right">Grunting Hiss</span>');
  alligator = rowdiv.class('row alligator');

  rowdiv = createDiv('<span class="left">Antelope</span> <span class="right">Shrill Snort</span>');
  antelope = rowdiv.class('row antelope');

  rowdiv = createDiv('<span class="left">Bat</span> <span class="right">High Squeek</span>');
  bat = rowdiv.class('row bat');
  
  rowdiv = createDiv('<span class="left">Bear</span> <span class="right">Deep Growl</span>');
  bear = rowdiv.class('row bear');
  
  rowdiv = createDiv('<span class="left">Beaver</span> <span class="right">Clap hands sharply once</span>');
  beaver = rowdiv.class('row beaver');
  
  rowdiv = createDiv('<span class="left">Bob White</span> <span class="right">"Bob-bob-white"</span>');
  bobwhite = rowdiv.class('row bobwhite');
  
  rowdiv = createDiv('<span class="left">Buffalo</span> <span class="right">Lowing "Um-mooww"</span>');
  buffalo = rowdiv.class('row buffalo');
  
  rowdiv = createDiv('<span class="left">Crow</span> <span class="right">"Caw-caw-caw"</span>');
  crow = rowdiv.class('row crow');
  
  rowdiv = createDiv('<span class="left">Cuckoo</span> <span class="right">"Cook-koo"</span>');
  cuckoo = rowdiv.class('row cuckoo');
  
  rowdiv = createDiv('<span class="left">Eagle</span> <span class="right">Shrill "Kreeee"</span>');
  eagle = rowdiv.class('row eagle');
  
  rowdiv = createDiv('<span class="left">Flaming Arrow</span> <span class="right">"Whsssss"</span>');
  flamingarrow = rowdiv.class('row flamingarrow');
  
  rowdiv = createDiv('<span class="left">Fox</span> <span class="right">Sharp bark</span>');
  fox = rowdiv.class('row fox');
  
  rowdiv = createDiv('<span class="left">Hawk</span> <span class="right">High shrill whistle</span>');
  hawk = rowdiv.class('row hawk');
  
  rowdiv = createDiv('<span class="left">Moose</span> <span class="right">"Oh-ah, oh-ah, oh-ahhh"</span>');
  moose = rowdiv.class('row moose');
  
  rowdiv = createDiv('<span class="left">Owl</span> <span class="right">Loud "Coo"</span>');
  owl = rowdiv.class('row owl');
  
  rowdiv = createDiv('<span class="left">Panther</span> <span class="right">"Keeook"</span>');
  panther = rowdiv.class('row panther');
  
  rowdiv = createDiv('<span class="left">Pelican</span> <span class="right">"Clap-clap-clap"</span>');
  pelican = rowdiv.class('row pelican');
  
  rowdiv = createDiv('<span class="left">Pine Tree</span> <span class="right">Whistle intimidating wind</span>');
  pinetree = rowdiv.class('row pinetree');
  
  rowdiv = createDiv('<span class="left">Racoon</span> <span class="right">Thin whine "Mm-mmm"</span>');
  raccoon = rowdiv.class('row raccoon');
  
  rowdiv = createDiv('<span class="left">Rattlesnake</span> <span class="right">Rattle pebbles in can</span>');
  rattlesnake = rowdiv.class('row rattlesnake');
  
  rowdiv = createDiv('<span class="left">Raven</span> <span class="right">"Kar-kaw""</span>');
  raven = rowdiv.class('row raven');
  
  rowdiv = createDiv('<span class="left">Seal</span> <span class="right">Sharp bark</span>');
  seal = rowdiv.class('row seal');
  
  rowdiv = createDiv('<span class="left">Whippoorwill</span> <span class="right">"Whip-poor-will"</span>');
  whippoorwill = rowdiv.class('row whippoorwill');
  
  rowdiv = createDiv('<span class="left">Wolf</span> <span class="right">"Loud howl "Hoo-oo"</span>');
  wolf = rowdiv.class('row wolf');
	
  rowdiv = createDiv('For other names make up your own patrol call.');
  endcap = rowdiv.class('endcap');


  amplitude = new p5.Amplitude();
  amplitude.toggleNormalize(true);
  amplitude.smooth(.2);
  // start / stop the sound when canvas is clicked
  alligator.mouseOver(function() {
      alligatorClip.play();
  });
  alligator.mouseOut(function() {
      alligatorClip.stop();
  });
  
  
  antelope.mouseOver(function() {
      antelopeClip.play();
  });
  antelope.mouseOut(function() {
      antelopeClip.stop();
  });
  

  bat.mouseOver(function() {
      batClip.play();
  });
  bat.mouseOut(function() {
      batClip.stop();
  });
  
  
  bear.mouseOver(function() {
      bearClip.play();
  });
  bear.mouseOut(function() {
      bearClip.stop();
  });
  
  
  beaver.mouseOver(function() {
      beaverClip.play();
  });
  beaver.mouseOut(function() {
      beaverClip.stop();
  });
  
  
  bobwhite.mouseOver(function() {
      bobwhiteClip.play();
  });
  bobwhite.mouseOut(function() {
      bobwhiteClip.stop();
  });
  
  
  buffalo.mouseOver(function() {
      buffaloClip.play();
  });
  buffalo.mouseOut(function() {
      buffaloClip.stop();
  });
  
  
  crow.mouseOver(function() {
      crowClip.play();
  });
  crow.mouseOut(function() {
      crowClip.stop();
  });
  
  
  cuckoo.mouseOver(function() {
      cuckooClip.play();
  });
  cuckoo.mouseOut(function() {
      cuckooClip.stop();
  });
  
  
  eagle.mouseOver(function() {
      eagleClip.play();
  });
  eagle.mouseOut(function() {
      eagleClip.stop();
  });
  
  
  flamingarrow.mouseOver(function() {
      flamingarrowClip.play();
  });
  flamingarrow.mouseOut(function() {
      flamingarrowClip.stop();
  });
  
  
  fox.mouseOver(function() {
      foxClip.play();
  });
  fox.mouseOut(function() {
      foxClip.stop();
  });
  
  
  hawk.mouseOver(function() {
      hawkClip.play();
  });
  hawk.mouseOut(function() {
      hawkClip.stop();
  });
  
  
  moose.mouseOver(function() {
      mooseClip.play();
  });
  moose.mouseOut(function() {
      mooseClip.stop();
  });
  
  
  owl.mouseOver(function() {
      owlClip.play();
  });
  owl.mouseOut(function() {
      owlClip.stop();
  });
  
  
  panther.mouseOver(function() {
      pantherClip.play();
  });
  panther.mouseOut(function() {
      pantherClip.stop();
  });
  
  
  pelican.mouseOver(function() {
      pelicanClip.play();
  });
  pelican.mouseOut(function() {
      pelicanClip.stop();
  });
  
  
  pinetree.mouseOver(function() {
      pinetreeClip.play();
  });
  pinetree.mouseOut(function() {
      pinetreeClip.stop();
  });
  
  
  raccoon.mouseOver(function() {
      raccoonClip.play();
  });
  raccoon.mouseOut(function() {
      raccoonClip.stop();
  });
  
  
  rattlesnake.mouseOver(function() {
      rattlesnakeClip.play();
  });
  rattlesnake.mouseOut(function() {
      rattlesnakeClip.stop();
  });
  
  
  rattlesnake.mouseOver(function() {
      rattlesnakeClip.play();
  });
  rattlesnake.mouseOut(function() {
      rattlesnakeClip.stop();
  });
  
  
  raven.mouseOver(function() {
      ravenClip.play();
  });
  raven.mouseOut(function() {
      ravenClip.stop();
  });
  
  
  seal.mouseOver(function() {
      sealClip.play();
  });
  seal.mouseOut(function() {
      sealClip.stop();
  });
  
  
  whippoorwill.mouseOver(function() {
      whippoorwillClip.play();
  });
  whippoorwill.mouseOut(function() {
      whippoorwillClip.stop();
  });
  
  wolf.mouseOver(function() {
      wolfClip.play();
  });
  wolf.mouseOut(function() {
      wolfClip.stop();
  });

  
}


function draw() {
  background(255);
  fill(0);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, windowWidth);
  ellipse(width/2, height/2, size, size);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
