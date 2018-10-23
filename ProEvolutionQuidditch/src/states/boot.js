var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {

}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.load.image('cleangame', 'assets/images/text/cleangame.png');
        game.load.image('loading1', 'assets/images/text/loading1.png');
        game.load.image('loading2', 'assets/images/text/loading2.png');
    },

    create: function() {

    },

    update: function() {
        game.state.start('preloadState');
    }
}