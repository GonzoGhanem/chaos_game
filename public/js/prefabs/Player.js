var Chaos = Chaos || {};

Chaos.Player = function(game, x, y, key, health) {
  Phaser.Sprite.call(this, game, x, y, key);
  
  this.game = game;
  
  // this.player = this.add.sprite(this.game.world.centerX, this.game.world.height-50, 'player');
  this.anchor.setTo(0.5, 0.5);
  this.angle = -90;
  this.game.physics.arcade.enable(this);
  this.body.collideWorldBounds = true;
  this.selected_weapon = 'basic';
  this.is_turbo = false;
  this.health = health;
  
};

Chaos.Player.prototype = Object.create(Phaser.Sprite.prototype);
Chaos.Player.prototype.constructor = Chaos.Player;

