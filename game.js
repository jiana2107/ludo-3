class Game{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      moveRedToken(sprite,steps,spriteN){
        sprite.x=redPos[redStatus[spriteN].position+steps][0];
        sprite.y=redPos[redStatus[spriteN].position+steps][1];
        redStatus[spriteN].position+=steps;
      }

      moveYellowToken(sprite,steps,spriteN){
        sprite.x=yellowPos[yellowStatus[spriteN].position+steps][0];
        sprite.y=yellowPos[yellowStatus[spriteN].position+steps][1];
        yellowStatus[spriteN].position+=steps;
      }

      start(){
        if(gameState==0){
 
          player=new Player()
          player.getCount()

          form=new Form()
          form.display()
  
        }
      }

    play(){
      form.hide()
      
      board.visible=true;
      dice.visible=true;
      dice.scale=0.5;

      r1.visible=true;
      y1.visible=true;

      if(mousePressedOver(dice)){
         diceN=Math.round(random(1,6))

        switch(diceN){
         case 1 :dice.addImage(dI1);break;
         case 2 :dice.addImage(dI2);break;
         case 3 :dice.addImage(dI3);break;
         case 4 :dice.addImage(dI4);break;
         case 5 :dice.addImage(dI5);break;
         case 6 :dice.addImage(dI6);break;
         default:break;
        }
        fill(0)
        text("number:"+diceN,150,50)
      }

      if(mousePressedOver(r1)){
        if(redStatus.r1.state==="home" && diceN===6){
           r1.x=redPos[0][0]
           r1.y=redPos[0][1]
           redStatus.r1.state="out"
           redStatus.r1.position=0;
        }

       else if(redStatus.r1.state==="out"){
          this.moveRedToken(r1,diceN,"r1")
        }
      }

      if(mousePressedOver(y1)){
        if(yellowStatus.y1.state==="home" && diceN===6){
           y1.x=yellowPos[0][0]
           y1.y=yellowPos[0][1]
           yellowStatus.y1.state="out"
           yellowStatus.y1.position=0;
        }

       else if(yellowStatus.y1.state==="out"){
          this.moveYellowToken(y1,diceN,"y1")
        }
      }
      
     
    }

  }
