var $ = require('./jquery')

var Keys = function () {
  this.keydown = {};

  var keyName = function (event) {
    return String.fromCharCode(event.which).toLowerCase();
  }

  var self = this;
  $(document).bind('keydown', function (event) {
    self.keydown[keyName(event)] = true;
    return false;
  });

  $(document).bind('keyup', function (event) {
    self.keydown[keyName(event)] = false;
    return false;
  });
};

Keys.prototype.getKeys = function (callback) {
  callback(null, this.keydown);
}

module.exports = new Keys;
