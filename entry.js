var domready = require('domready')
  , Game = require('./lib/game')

domready(function () {
  $('#title').text('LOLRPG');
  var game = new Game('canvas');
});
