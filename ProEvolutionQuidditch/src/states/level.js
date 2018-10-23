
ProEvolutionQuidditch.levelState = function(game) {

    this.game = game;

}

ProEvolutionQuidditch.levelState.prototype = {

    cursors : null,
    direccion : Phaser.NONE,
    score: 0,

    preload: function() {

    },

    create: function() {

        this.harry = this.game.add.sprite(5, 0, 'harry', 0);
        this.game.physics.arcade.enable(this.harry);
        this.harry.body.setSize(16, 16, 0, 0);
        this.snitch = this.game.add.sprite(0,0,'snitch',0);
        this.game.physics.arcade.enable(this.snitch);
        this.snitch.body.setSize(16, 16, 0, 0);

        this.randomPosition();

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.scoreText = this.game.add.text(1, 255, "Puntuación: " + his.score, { fontSize: "16px", fill: "#fff" });
    },

    update: function() {

        this.checkKeys();
        this.checkCollisions();

    },

    checkCollisions: function(){

        this.game.physics.arcade.collide(this.sprite, this.game.layer);
        this.game.physics.arcade.overlap(this.harry, this.snitch, this.addPoints, null, this);

    },
    checkGameStatus: function(){

        this.score++;

        if(this.score == 3){

            endGame();

        }else{

            this.randomPosition();

        }
    },

    endGame: function(){

        game.state.start('endingState');

    },
    randomPosition: function(){

        this.snitch.x = Math.floor((Math.random() * 800) + 1);
        this.snitch.y = Math.floor((Math.random() * 600) + 1);

    },
    checkKeys: function(){

        if(this.cursors.left.isDown && this.direccion !== Phaser.LEFT){
            
            this.actual = Phaser.LEFT;
    
        }else if(this.game.cursors.right.isDown && this.direccion !== Phaser.RIGHT){
    
            this.direccion = Phaser.RIGHT;
    
        }
    
        else if(this.game.cursors.up.isDown && this.direccion !== Phaser.UP){
    
            this.direccion = Phaser.UP;
    
        }
    
        else if(this.cursors.down.isDown && this.direccion !== Phaser.DOWN){
    
            this.direccion = Phaser.DOWN;
    
        } else{

            this.direccion = Phaser.NONE;
        }

        this.changeVelocity();
        
    },

    changeVelocity: function(){

        let velocidad = 60;


        if (this.direccion === Phaser.NONE) {
            this.harry.body.velocity.x = this.harry.body.velocity.y = 0;
        }
    
        if (this.direccion === Phaser.LEFT || direccion === Phaser.UP)
        {
            velocidad = -velocidad;
        }
        if (this.direccion === Phaser.LEFT || direccion === Phaser.RIGHT)
        {
            this.harry.body.velocity.x = velocidad;
        }
        else
        {
            this.harry.body.velocity.y = velocidad;
        }

    }
}