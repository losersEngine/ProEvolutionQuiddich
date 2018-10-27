var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {

}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.load.image('loading1', process.env.PUBLIC_URL + '/assets/images/text/loading1.png');        
    },

    create: function() {

    },

    update: function() {
        game.state.start('preloadState');
    }
}
