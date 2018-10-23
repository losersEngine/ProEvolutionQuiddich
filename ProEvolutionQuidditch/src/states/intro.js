ProEvolutionQuidditch.introState = function(game) {

}

ProEvolutionQuidditch.introState.prototype = {

    preload: function() {
        
    },


    create: function() {

        var background2 = game.add.sprite(0, 0, 'background2');
        var referee = game.add.sprite(400, 200, 'referee');
        referee.anchor.set(0.5);

        var cleangame = game.add.sprite(400, 500, 'cleangame');
        cleangame.anchor.set(0.5);
        cleangame.scale.setTo(0.5 , 0.5);

    	spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {

        if (spaceKey.isDown) {
            game.state.start('levelState');
        }

    }
}