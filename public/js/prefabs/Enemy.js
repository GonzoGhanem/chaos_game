var Chaos = Chaos || {};

Chaos.Enemy = function(game, x, y, key, health, enemyBullets, target, hit_power) {
  Phaser.Sprite.call(this, game, x, y, key);

  this.game = game;
  this.target = target;
  this.anchor.setTo(0.5);
  this.game.physics.arcade.enable(this);
  this.enableBody = true;
  this.body.allowCollision = true;
  this.animations.add('getHit', [0, 1, 2, 1, 0], 25, false);
  this.health = health;
  this.hit_power = hit_power;

  // this.game.physics.arcade.moveToObject(this, this.target, 1, 100);
  this.enemyBullets = enemyBullets;
  this.enemyTimer = this.game.time.create(false);
  this.enemyTimer.start();
  this.scheduleShooting();
};

Chaos.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Chaos.Enemy.prototype.constructor = Chaos.Enemy;

Chaos.Enemy.prototype.update = function() {
  this.game.physics.arcade.moveToObject(this, this.target, 100);
  //bounce on the borders
  // if(this.position.x < 0.05 * this.game.world.width) {
  //   this.position.x = 0.05 * this.game.world.width + 2;
  //   this.body.velocity.x *= -1;
  // }
  // else if(this.position.x > 0.95 * this.game.world.width) {
  //   this.position.x = 0.95 * this.game.world.width - 2;
  //   this.body.velocity.x *= -1;
  // }

  // if(this.position.y > this.game.world.height) {
  //   this.position.y = 0.95 * this.game.world.height + 2;
  //   this.body.velocity.y *= -1;
  // }
  // if(this.position.y < this.game.world.bounds.top) {
  //   this.position.y = 0.05 * this.game.world.height - 2;
  //   this.body.velocity.y *= -1;
  // }
};

Chaos.Enemy.prototype.damage = function(amount) {
  Phaser.Sprite.prototype.damage.call(this, amount);
  //play "getting hit" animation
  this.play('getHit');
  
  //particle explosion
  if(this.health <= 0) {
    var emitter = this.game.add.emitter(this.x, this.y, 100);
    emitter.makeParticles('enemyParticle');
    emitter.minParticleSpeed.setTo(-200, -200);
    emitter.maxParticleSpeed.setTo(200, 200);
    emitter.gravity = 0;
    emitter.start(true, 500, null, 100);
  }
};

Chaos.Enemy.prototype.scheduleShooting = function() {
  this.shoot();
  
  this.enemyTimer.add(Phaser.Timer.SECOND * 2, this.scheduleShooting, this);
};

Chaos.Enemy.prototype.shoot = function() {
  if(!this.alive)return;
  var bullet = this.enemyBullets.getFirstExists(false);
  if(!bullet) {
    bullet = new Chaos.EnemyBullet(this.game, this.x, this.y, this.hit_power);
    this.enemyBullets.add(bullet);
  }
  else {
    bullet.reset(this.x, this.y);
  }
  console.log(this.angle);
  this.game.physics.arcade.velocityFromAngle(this.angle, 200, bullet.body.velocity);
  // bullet.body.velocity.y = 100;
};