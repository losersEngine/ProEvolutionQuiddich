ProEvolutionQuidditch.menuState = function(game) {

}

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {
    	//game.load.image('background', 'assets/images/background/background.png');
        
    },

    create: function() {


        var background = game.add.sprite(0, 0, 'background');

        var snitch = game.add.sprite(400 ,50, 'snitch');
        snitch.anchor.set(0.5);

    	var harry1 = game.add.sprite(150, 300, 'harry');
        harry1.scale.setTo(0.5 , 0.5);
        harry1.anchor.set(0.5);

        var harry2 = game.add.sprite(650, 300, 'harry');
        harry2.scale.setTo(-0.5 , 0.5);
        harry2.anchor.set(0.5);

        var title = game.add.sprite(400, 100, 'title');
        title.scale.setTo(0.5 , 0.5);
        title.anchor.set(0.5);

        var griffindor = game.add.sprite(400, 300, 'griffindor');
        //griffindor.scale.setTo(0.5 , 0.5);
        griffindor.anchor.set(0.5);

        var start = game.add.sprite(400, 500, 'start');
        start.scale.setTo(0.5,0.5);
        start.anchor.set(0.5);

        sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    },

    update: function() {
         if (sKey.isDown) {
            game.state.start('introState');
        }

    }
}