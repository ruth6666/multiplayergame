var database,gamestate=0,playercount,player,form,game;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
}

function draw(){
    background("white");
    
}

