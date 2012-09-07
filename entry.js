var domready = require('domready')
  , Game = require('./lib/Game')

domready(function () {
  $('#title').text('LOLRPG');
  var game = new Game('canvas');
});
