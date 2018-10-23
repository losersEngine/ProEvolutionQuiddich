ProEvolutionQuidditch.endingState = function(game) {

}

ProEvolutionQuidditch.endingState.prototype = {

    preload: function() {

        var back = game.add.sprite(0,0,'stadium3');
        
        var win = game.add.sprite(400, 100, 'winner');
        win.anchor.set(0.5);

        var plaWin = game.add.sprite(600,400,'player1');
        plaWin.anchor.set(0.5);

        var har = game.add.sprite(200,400,'harry');
        har.anchor.set(0.5);

        var trof = game.add.sprite(400, 400, 'trophy');
        trof.anchor.set(0.5);

    },

    create: function() {

    },

    update: function() {

        if (spaceKey.isDown)
        {
            game.state.start('menuState');
        }

    }
}