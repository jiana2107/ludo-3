class Form{
    constructor(){
        this.input=createInput("Name");
        this.begin=createElement("h2");
        this.colorI=createInput("Choose a color:")
        this.color=createSelect();
        this.button=createButton("Play");
        this.reset=createButton("reset")
        this.greeting=createElement("h2");

    }

    hide(){
        this.input.hide();
        this.begin.hide()
        this.colorI.hide()
        this.color.hide()
        this.button.hide()
    }

    display(){
       this.input.position(displayWidth/2-150,displayHeight/2-150)
       this.color.position(displayWidth/2-35,displayHeight/2-100)
       this.colorI.position(displayWidth/2-150,displayHeight/2-100)
       this.button.position(displayWidth/2-100,displayHeight/2-50)
       this.reset.position(displayWidth/2+500,displayHeight/2+200)

       this.begin.html("WELCOME TO LUDO , FILL IN THE DETAILS AND THEN PRESS PLAY TO START!❤")
       this.begin.position(displayWidth/2-470,displayHeight/2-250)

       this.color.option('green');
       this.color.option('blue');
       this.color.option('yellow');
       this.color.option('red');
       this.color.selected('red');

       this.reset.mousePressed(()=>{
           playerCount=0
           gameState=0
           player.updateCount(playerCount)
           game.update(gameState)
       })
       
      // mySelectEvent()

       this.button.mousePressed(()=>{
           player.name=this.input.value()
           player.color=this.color.value()
           playerCount+=1;
           player.index = playerCount;
           player.updateCount(playerCount)
           player.update()
           this.greeting.html("HELLO  "+player.name+","+"  GOOD LUCK👍!")
           this.greeting.position(displayWidth/2-200,displayHeight/2-380)
           this.hide()
           })

    }
    
    mySelectEvent(){
        this.sel.position(10, 10);
        this.sel.option('red');
        this.sel.option('green');
        this.sel.option('blue');
        //this.sel.selected('yellow');
        this.sel.changed(mySelectEvent);
    }

}