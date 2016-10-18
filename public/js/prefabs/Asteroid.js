var Chaos = Chaos || {};

Chaos.Asteroid = function(game, x, y, key) {
  Phaser.Sprite.call(this, game, x, y, key);

  this.game = game;
  //enable physics
  this.game.physics.arcade.enable(this);
  this.enableBody = true;
  this.anchor.setTo(0.5);
  this.checkWorldBounds = true;
  // this.events.onOutOfBounds.add(this.kill, this);
  this.outOfBoundsKill = true;
};

Chaos.Asteroid.prototype = Object.create(Phaser.Sprite.prototype);
Chaos.Asteroid.prototype.constructor = Chaos.Asteroid;

//   if(this.position.x < 0.05 * this.game.world.width) {
//     this.position.x = 0.05 * this.game.world.width + 2;
//     this.body.velocity.x *= -1;
//   }
//   else if(this.position.x > 0.95 * this.game.world.width) {
//     this.position.x = 0.95 * this.game.world.width - 2;
//     this.body.velocity.x *= -1;
//   }

//   if(this.position.y > this.game.world.height) {
//     this.position.y = 0.95 * this.game.world.height + 2;
//     this.body.velocity.y *= -1;
//   }
//   if(this.position.y < this.game.world.bounds.top) {
//     this.position.y = 0.05 * this.game.world.height - 2;
//     this.body.velocity.y *= -1;
//   }
// };