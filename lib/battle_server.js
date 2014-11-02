var socketio = require('socket.io'),
  _ = require('lodash');
	
	
var handleInputs = function (socket, io) {
  socket.on('inputChange', function (data) {
    console.log('inputChange');
  });
};

var createBattleServer = function (server) {
  var io = socketio.listen(server);

  io.sockets.on('connection', function (socket) {
    handleInputs(socket, io);
  });
};

module.exports = createBattleServer;