var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {

}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
    },

    create: function() {

    },

    update: function() {
        game.state.start('preloadState');
    }
}