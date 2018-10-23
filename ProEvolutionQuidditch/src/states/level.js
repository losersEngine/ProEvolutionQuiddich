
ProEvolutionQuidditch.levelState = function(game) {

    this.game = game;

}

ProEvolutionQuidditch.levelState.prototype = {

    preload: function() {
        this.cursors = null;
        this.direccionHor = Phaser.NONE;
        this.direccionVer = Phaser.NONE;
        this.score = 0;
    },

    create: function() {
    	var stadium4 = game.add.sprite(0, 0, 'stadium4');

        this.harry = this.game.add.sprite(400, 200, 'harry', 0);
        this.game.physics.enable(this.harry, Phaser.Physics.ARCADE);
        this.harry.scale.setTo(0.5 , 0.5);
        //this.harry.body.setSize(16, 16, 0, 0);
        this.harry.body.collideWorldBounds = true;
        this.harry.anchor.set(0.5);

        this.snitch = this.game.add.sprite(0,0,'snitch', 0);
        this.game.physics.enable(this.snitch, Phaser.Physics.ARCADE);
        this.snitch.scale.setTo(0.5, 0.5);
        this.snitch.anchor.set(0.5);
        //this.snitch.body.setSize(16, 16, 0, 0);

        this.randomPosition();

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.scoreText = this.game.add.text(200, 50, "Puntuación: " + this.score, { fontSize: "16px", fill: "#fff" });
        this.scoreText.anchor.set(0.5);
        this.scoreText.scale.setTo(3,3);
    },

    update: function() {

        this.checkKeys();
        this.checkCollisions();

    },

    checkCollisions: function(){

        this.game.physics.arcade.collide(this.harry, this.game.layer);
        this.game.physics.arcade.overlap(this.harry, this.snitch, this.checkGameStatus, null, this);

    },

    checkGameStatus: function(){

        this.score++;
        this.scoreText.text = "Puntuación: " + this.score;
        this.randomPosition();

        if(this.score == 3){
            this.endGame();
        } else {
            this.randomPosition();
        }
    },

    endGame: function(){

        game.state.start('endingState');

    },
    randomPosition: function(){

        let x =  Math.floor((Math.random() * 700) + 51);
        let y = Math.floor((Math.random() * 500) + 51);

        this.snitch.position.setTo(x,y);

    },
    checkKeys: function(){

        if(this.cursors.right.isDown){
            this.direccionHor = Phaser.RIGHT;
        } else if (this.cursors.left.isDown){
            this.direccionHor = Phaser.LEFT;
        } else {
            this.direccionHor = Phaser.NONE;
        }

        if(this.cursors.up.isDown){
            this.direccionVer = Phaser.UP;
        } else if (this.cursors.down.isDown){
            this.direccionVer = Phaser.DOWN;
        } else {
            this.direccionVer = Phaser.NONE;
        }

        this.changeVelocity();
    },

    changeVelocity: function(){

        let velocidad = 300;

        switch (this.direccionHor){
            case Phaser.NONE:
                this.harry.body.velocity.x = 0;
                break;

            case Phaser.RIGHT:
                this.harry.body.velocity.x = velocidad;
                break;

            case Phaser.LEFT:
                this.harry.body.velocity.x = -velocidad;
                break;
        }

        switch (this.direccionVer){
            case Phaser.NONE:
                this.harry.body.velocity.y = +velocidad/5;
                break;

            case Phaser.UP:
                this.harry.body.velocity.y = -velocidad;
                break;

            case Phaser.DOWN:
                this.harry.body.velocity.y = +velocidad;
                break;
        }
        

    }
}