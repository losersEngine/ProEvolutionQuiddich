ProEvolutionQuidditch.preloadState = function(game) {

}

ProEvolutionQuidditch.preloadState.prototype = {

    preload: function() {

        var letras = game.add.sprite(400, 300, 'loading1');
        letras.scale.setTo(0.5,0.5);
        letras.anchor.set(0.5);

        game.load.image('cleangame', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/cleangame.png');
        game.load.image('loading2', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/loading2.png');

        game.load.image('draco', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/draco.png');
        game.load.image('griffindor', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/griffindor.png');
        game.load.image('harry', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/harry.png');
        game.load.image('referee', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/referee.png');
        game.load.image('slytherin', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/slytherin.png');
        game.load.image('snitch', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/snitch.png');
        game.load.image('trophy', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/trophy.png');
        
        game.load.image('player1', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/player1.png');
        game.load.image('player2', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/player2.png');
        game.load.image('press1', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/press1.png');
        game.load.image('press2', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/press2.png');
        game.load.image('return', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/return.png');
        game.load.image('start', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/start.png');
        game.load.image('title', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/title.png');
        game.load.image('vs', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/vs.png');
        game.load.image('winner', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/winner.png');

        game.load.image('background', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/background/background.png');
        game.load.image('background2', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/background/background2.png');
        game.load.image('stadium1', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/background/stadium1.png');
        game.load.image('stadium2', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/background/stadium2.png');
        game.load.image('stadium3', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/background/stadium3.png');
        game.load.image('stadium4', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/background/stadium4.png');

    },

    create: function() {

        game.state.start('menuState');
		
    },

    update: function() {
        
    }
}
