var Chaos = Chaos || {};

//initiate the Phaser framework
Chaos.game = new Phaser.Game('100%', '100%', Phaser.AUTO);

Chaos.game.state.add('Game', Chaos.Game);
// Chaos.game.state.add('Level02', Chaos.Level02);
// Chaos.game.state.add('Level03', Chaos.Level03);
// Chaos.game.state.add('Level04', Chaos.Level04);
Chaos.game.state.start('Game');