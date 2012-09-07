var Player = require('./domain/Player')

var Game = function (element) {
  this.fps = 60;
  this.width = 800;
  this.height = 600;
  this.context = document.getElementById(element).getContext('2d');
  this.players = [];
  this.players.push(new Player(this));
  this.frameCount = 0;

  this.previous = 0;
  var game = this;
  var FPS = setInterval(function () {
    var frameCount = game.frameCount;
    console.log(frameCount - game.previous);
    game.previous = frameCount;
  }, 1000);

  var gameLoop = setInterval(function () {
    game.updateAll();
    game.drawAll();
    game.frameCount++;
  }, (1000 / this.fps));
};

Game.prototype.updateAll = function () {
  this.players.forEach(function (player) {
    player.update();
  });
}

Game.prototype.drawAll = function () {
  this.background('#000');
  this.players.forEach(function (player) {
    player.draw();
  });
}

Game.prototype.background = function (color, callback) {
  //console.log('GAME: Drawing background (%s)', color);
  this.context.fillStyle = color;
  this.context.fillRect(0, 0, this.width, this.height);
  this.context.fillStyle = '#FFF';
  this.context.fillText(this.frameCount, 0, 10);
}

Game.prototype.drawRectangle = function (color, x, y, width, height) {
  //console.log('GAME: Drawing rectangle (%s) at %s, %s', color, x, y);
  this.context.fillStyle = color;
  this.context.fillRect(x, y, width, height);
}

module.exports = Game;
