ProEvolutionQuidditch.preloadState = function(game) {

}

ProEvolutionQuidditch.preloadState.prototype = {

    preload: function() {

        var letras = game.add.sprite(400, 300, 'loading1');
        letras.scale.setTo(0.5,0.5);
        letras.anchor.set(0.5);

        game.load.image('cleangame', 'ProEvolutionQuidditch/assets/images/text/cleangame.png');
        game.load.image('loading2', 'ProEvolutionQuidditch/assets/images/text/loading2.png');

        game.load.image('draco', 'ProEvolutionQuidditch/assets/images/draco.png');
        game.load.image('griffindor', 'ProEvolutionQuidditch/assets/images/griffindor.png');
        game.load.image('harry', 'ProEvolutionQuidditch/assets/images/harry.png');
        game.load.image('referee', 'ProEvolutionQuidditch/assets/images/referee.png');
        game.load.image('slytherin', 'ProEvolutionQuidditch/assets/images/slytherin.png');
        game.load.image('snitch', 'ProEvolutionQuidditch/assets/images/snitch.png');
        game.load.image('trophy', 'ProEvolutionQuidditch/assets/images/trophy.png');
        
        game.load.image('player1', 'ProEvolutionQuidditch/assets/images/text/player1.png');
        game.load.image('player2', 'ProEvolutionQuidditch/assets/images/text/player2.png');
        game.load.image('press1', 'ProEvolutionQuidditch/assets/images/text/press1.png');
        game.load.image('press2', 'ProEvolutionQuidditch/assets/images/text/press2.png');
        game.load.image('return', 'ProEvolutionQuidditch/assets/images/text/return.png');
        game.load.image('start', 'ProEvolutionQuidditch/assets/images/text/start.png');
        game.load.image('title', 'ProEvolutionQuidditch/assets/images/text/title.png');
        game.load.image('vs', 'ProEvolutionQuidditch/assets/images/text/vs.png');
        game.load.image('winner', 'ProEvolutionQuidditch/assets/images/text/winner.png');

        game.load.image('background', 'ProEvolutionQuidditch/assets/images/background/background.png');
        game.load.image('background2', 'ProEvolutionQuidditch/assets/images/background/background2.png');
        game.load.image('stadium1', 'ProEvolutionQuidditch/assets/images/background/stadium1.png');
        game.load.image('stadium2', 'ProEvolutionQuidditch/assets/images/background/stadium2.png');
        game.load.image('stadium3', 'ProEvolutionQuidditch/assets/images/background/stadium3.png');
        game.load.image('stadium4', 'ProEvolutionQuidditch/assets/images/background/stadium4.png');

    },

    create: function() {

        game.state.start('menuState');
		
    },

    update: function() {
        
    }
}
