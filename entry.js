var domready = require('domready')
  , Game = require('./lib/Game')
  , $ = require('./vendor/jquery')

domready(function () {
  $('#title').text('LOLRPG');
  var game = new Game('#canvas');
});
