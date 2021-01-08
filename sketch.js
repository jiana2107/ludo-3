var boardI;
var board;
var form;
var player;
var allPlayers;
var game;
var gameState=0;
var playerCount=0;

var dice;
var d1,d2,d3,d4,d5,d6;
var dI1,dI2,dI3,dI4,dI5,dI6;

var r1,r2,r3,r4;
var b1,b2,b3,b4;
var g1,g2,g3,g4;
var y1,y2,y3,y4;

var redStatus={
  r1:{
    state:"home"
  },
  r2:{
    state:"home"
  },
  r3:{
    state:"home"
  },
  r4:{
    state:"home"
  }
}

var yellowStatus= {
  y1:{
    state:"home"
  },
  y2:{
    state:"home"
  },
  y3:{
    state:"home"
  },
  y4:{
    state:"home"
  }
}

var redPos=[[580,300],[620,300],[660,300],[700,300],[740,285],[730,250],[725,310],[725,175],[725,135],[785,135],[845,135],[845,175],
[845,215],[845,255],[830,290],[860,310],[900,310],[940,305],[980,305],[1030,305],[1030,355],[1030,405],
[980,405],[940,405],[900,405],[860,400],[830,420],[850,460],[850,495],[850,535],[850,575],[780,575],[730,575],
[717,540],[717,500],[717,460],[735,425],[700,410],[660,410],[620,410],[580,410],[540,410],[540,355],[540,300],
[580,355],[620,355],[660,355],[710,355],[755,355]
]
var yellowPos=[[980,405],[940,405],[900,405],[860,400],[830,420],[850,460],[850,495],[850,535],[850,575],[780,575],[730,575],
[717,540],[717,500],[717,460],[735,425],[700,410],[660,410],[620,410],[580,410],[540,410],[540,355],[540,300],
[580,300],[620,300],[660,300],[700,300],[740,285],[730,250],[725,310],[725,175],[725,135],[785,135],[845,135],[845,175],
[845,215],[845,255],[830,290],[860,310],[900,310],[940,305],[980,305],[1030,305],[1030,355],[1030,405],
[985,355],[940,355],[900,355],[855,355],[815,355]
]


var sel;
var diceN;
var database;

function preload(){
  boardI=loadImage("ludo 2-4.png")

  dI1=loadImage("d1.png")
  dI2=loadImage("d2.png")
  dI3=loadImage("d3.png")
  dI4=loadImage("d4.png")
  dI5=loadImage("d5.png")
  dI6=loadImage("d6.png")
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-150);
  console.log(displayHeight)
  console.log(displayWidth)

  console.log(red)
  
  database=firebase.database()

  game=new Game()
  game.getState()
  game.start()
  //console.log(player)

  board=createSprite(displayWidth/2-10,displayHeight/2-80)
  board.addImage(boardI)
  board.visible=false;


  dice=createSprite(200,200)
  dice.visible=false;

  r1=createSprite(585,220,20,20)
  r1.shapeColor="maroon"
  r1.visible=false;

  y1=createSprite(999,495,20,20)
  y1.shapeColor="#D3A755"
  y1.visible=false;

  textAlign(CENTER);
  frameRate(10)
  //background("white");

}

function draw() {
  //background(boardI); 
  background("lightblue");
  

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState==1){
    game.play()
  }
  //form.mySelectEvent()
  

  drawSprites();
}