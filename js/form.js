class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Multiplayer Game")
        title.position(300,50)
        var input = createInput("Name")
        input.position(200,180)
        var button = createButton('Play!');
        button.position(350,180)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var playersname = input.value();
            playercount+=1
            player.updatecount(playercount)
        player.update(playersname)
        var greeting = createElement('h4')
        greeting.html("Hello!"+playersname)
        greeting.position(200,200);
        })
    }
}