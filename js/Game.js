class Game {
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

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    car1.addImage(carimag1);
    car2.addImage(carimag2);
    car3.addImage(carimag3);
    car4.addImage(carimag4);
    Cars=[car1,car2,car3,car4];
    
  }

  play(){
    form.hide();
   
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
   var index=0;
   var x=100;
   var y;
   for(var plr in allPlayers){
     index=index+1;
     x=x+200;
     y=displayHeight-allPlayers[plr].distance;
     Cars[index-1].x=x;
     Cars[index-1].y=y;
     if(index==player.index){
       fill("red");
       ellipse(x,y,60,60);
       Cars[index-1].shapeColor="red";
       camera.position.x=displayWidth/2;
       camera.position.y=Cars[index-1].y;
     }
   }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>4000){
gameState=2;
    }

  
    drawSprites();
  }
  end(){
    console.log("game ended");
  }
}
