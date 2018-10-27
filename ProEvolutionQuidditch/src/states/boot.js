var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {

}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.load.image('loading1', 'https://github.com/losersEngine/ProEvolutionQuiddich/tree/master/ProEvolutionQuidditch/assets/images/text/loading1.png');        
    },

    create: function() {

    },

    update: function() {
        game.state.start('preloadState');
    }
}
