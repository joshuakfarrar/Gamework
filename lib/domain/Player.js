var Keys = require('../keys')

var Player = function (game, keys) {
  this.game = game;
  this.x = 100;
  this.y = 100;
  this.speed = 5;
  this.diagSpeed = Math.sqrt(Math.pow(this.speed, 2) / 2);
  this.color = '#ff0';
}

Player.prototype.update = function() {
  var self = this;
  Keys.getKeys(function(err, keys) {

    // Check if more than one movement key is being pressed. If so, use diagSpeed.
    // Corrects pythagorean movement 'bug'
    var speed = self.speed
      , movementKeys = ['w', 'a', 's', 'd']
      , instances = 0

    Object.keys(keys).forEach(function (k) {
      if (movementKeys.indexOf(k) > -1) {
        instances++;
      }
    });
    if (instances > 1) {
      speed = self.diagSpeed;
    }    

    // And now that that's sorted out, get down to the business of moving.
    if (keys['w']) {
      self.y -= speed;
    }
    if (keys['a']) {
      self.x -= speed;
    }
    if (keys['s']) {
      self.y += speed;
    }
    if (keys['d']) {
      self.x += speed;
    }

  });
}

Player.prototype.draw = function () {
  //console.log('Drawing player at %sx%s in %s', this.x, this.y, this.color);
  this.game.drawRectangle(this.color, this.x, this.y, 10, 10);
}

module.exports = Player;
