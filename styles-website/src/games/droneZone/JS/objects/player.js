/**
 * Created by Adam Walker and Joshua Styles
 * Player Object
 *
 * Changes :
 * Velocity added to prevent player moving backwards except after hitting wall.
 * hitGround function added as a callback for collision between player and ground. This will signal when player is allowed to jump.
 * Removed applyGravity function as it is no longer needed.
 * Commented out console.log in controlx function. It is being called in update() and causing skips in framerate.
 * Sped up backwards rotation a little to look a bit more realistic.
 *
 * Bugs : 
 * 
 */

var Player = function(x, y){
    //Set Properties
    this.x = x;
    this.y = y;
    this.sprite = game.add.sprite(this.x, this.y, "player");

    this.velY = 2;
    this.velX = 0;
    this.rotation = this.sprite.angle;
    this.rotationMin=-20;
    this.rotationMax = 20;
    this.ascendForce = -150;
    this.minX = game.world.width/2 - 200;
    this.maxX = game.world.width/2 + 200;
    this.sfx = game.add.audio("helicopter");
    this.emitter = game.add.emitter(this.x - (this.sprite.width), this.y, 25);
    this.emitter.makeParticles("fume");
    this.emitter.gravity = 1;
    this.emitter.setAlpha(1, 0, 1500);
    this.emitter.setScale(2, 0, 1.2, 8, 3000);
    this.emitter.start(false, 250, 2);

    //play audio
    this.sfx.loop = true;
    this.sfx.play();

    //enabled Physics
    game.physics.arcade.enable(this.sprite);

    //Set Physics properties
    this.sprite.body.bounce.y = 0.2;

    //Set anchor for a smoother roatation - Front of helicopter
    this.sprite.anchor.x = 0.7;
    this.sprite.anchor.y = 0.30;

    this.sprite.body.allowGravity = true;
    this.sprite.body.immovable = false;
};

//Ascend Helicopter Sprite
Player.prototype.ascend = function(){
    this.sprite.body.velocity.y = this.ascendForce;
};

//Control left & right movement of helicopter
Player.prototype.controlX = function (key) {
    
    //console.log(key);
    
    switch(key){
        case "LeftKey":
            //Calculate new velocity
            if(this.sprite.x>this.minX){
                this.velX = -40;
                this.rotation -= 3;
            }else{
                this.velX = 0;
                this.rotation++;
            }
            break;
        case "RightKey":
            //Calculate new velocity
            if(this.sprite.x<this.maxX){
                this.velX = 40;
            }else{
                this.velX=0;
            }
            this.rotation++;
            break;
        case "none":
            this.rotation++;
            this.velX=0;
            break;
    }

    //Calculate Rotation
    if(this.rotation >= this.rotationMax){
        this.rotation = this.rotationMax;
    }else if(this.rotation <= this.rotationMin){
        this.rotation = this.rotationMin;
    }

    this.sprite.angle = this.rotation;

    this.sprite.body.velocity.x = this.velX;
};

Player.prototype.updateParticles = function(ascending){
    
    if(ascending){
        
        this.emitter.on = true;
        this.emitter.minParticleSpeed.set(-10, 50);
        this.emitter.maxParticleSpeed.set(-50, 200);
        this.emitter.emitX = this.sprite.x - 20;
        this.emitter.emitY = this.sprite.y + 24;
    }else{
        
        this.emitter.on = false;
    }
}

Player.prototype.endGame = function (onAnimationComplete) {
    //Stop current Sound
    this.sfx.stop();

    var x = this.sprite.x;
    var y = this.sprite.y;

    this.sprite.kill();

    //Set properties for explosion animation and play it.
    var explosion = game.add.sprite(x,y,"explosion");
    explosion.animations.add("explode");
    explosion.anchor.x = 0.5;
    explosion.anchor.y = 0.5;
    explosion.angle = this.rotation;
    explosion.animations.play("explode",30,false);
    explosion.animations.currentAnim.onComplete.add(onAnimationComplete);

    //set properties for explosion sound & play it.
    var sfx = game.add.audio("explosionSound");
    sfx.play();

};
