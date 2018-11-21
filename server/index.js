var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('build'));

function Player(id, name, numbers, isPlaying){
    this.id = id;
    this.name = name;
    this.numbers = numbers;
    this.isPlaying = isPlaying;
}

function Game(playerA, playerB, numbers, operators, movingPlayerId) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.operators = operators;
    this.movingPlayerId = movingPlayerId;
    this.number = number;
    this.divident = 3;
    this.messages=[];
    this.randomNumber = 0;
    this.winner = null;
    this.inputs = ["+1","0","-1"]
}

players = [];
game = new Game();
var randomNumber = 0;;
var number = 0;
var info = ' ';

function initGame(){
    randomNumber = Math.floor(Math.random() * 31) + 50 ;
    game.randomNumber = randomNumber;
    game.winner = null;
    number = randomNumber;
    game.number = randomNumber
    game.operators = []
    game.messages=[];
     
  //  players = [];
}

initGame();

function executeNextMove(movingPlayer, waitingPlayer) {
    number = waitingPlayer.numbers[waitingPlayer.numbers.length-1];
    operator = game.operators[game.operators.length-1];
    number = getNewNumber(number, operator);
    game.number = number;
    movingPlayer.numbers.push(number);
    movingPlayer.isPlaying = false;
    waitingPlayer.isPlaying = true;

    game.movingPlayerId = waitingPlayer.id;
    info_waiting = '...waiting for ' + waitingPlayer.name + ' to a move!';
    info_moving = 'Please make a move ' + waitingPlayer.name + '!'
    
    io.sockets.connected[movingPlayer.id].emit('info', info_waiting);

    if(waitingPlayer.id != 'notAvailable') {
        io.sockets.connected[waitingPlayer.id].emit('info', info_moving);
    }
    io.sockets.emit('game', game);
}

function getNewNumber(number, operator){
    number = (number + operator) / 3;
    return Math.round(number);
};

function getCurrentPlayerName(game) {
    return (game.movingPlayerId === game.playerA.id) ? game.playerA.name : game.playerB.name;
}

function togglePlayer() {
     game.movingPlayerId === game.playerA.id ? game.playerA.id : game.playerB.id; 
}
 
io.on('connection', function(socket){
    console.log("Connected to game!!"+ socket.id)	
    players.push(socket);

    if(players.length === 1){   
        player = new Player(socket.id, 'Player A', [], true);
        game.playerA = player;
        game.playerB = new Player('notAvailable', 'Player B', [randomNumber], false);
        game.movingPlayerId = game.playerA.id;
        game.operators = [];
        game.number = number;
        io.sockets.connected[socket.id].emit('game', game);
    } else if(players.length === 2) {
        game.playerB.id = socket.id;
        game.number = number;
        io.sockets.emit('game', game);
    } else {
        io.sockets.emit('game', game);
    };

    socket.on('next-move', function(data){ 
        console.log("next-move to game!!"+ data)	
        game.operators.push(parseInt(data));
        game.messages.push({
            value:data,
            number:number,
            player:game.movingPlayerId,
            playerName : game.movingPlayerId === game.playerA.id ? "A" :"B"

        });

        let currentUser = game.movingPlayerId;
        if(game.movingPlayerId === game.playerA.id) {
            executeNextMove(game.playerA, game.playerB);
        } else {
            executeNextMove(game.playerB, game.playerA);
        }
        if (number === 1) {
           console.log("game complete !! "+ currentUser)
           game.winner = currentUser;
            io.sockets.emit('game', game);
            //io.close();
        }
    });
    
    socket.on('restart', function() {
        console.log("game restart")
        initGame();
        io.sockets.emit('game', game);
        //io.close();
    });

    socket.on('disconnect', function() {
        var index = players.indexOf(socket);
        if (index !== -1) {
            players.splice(index, 1);
        }
        //io.close();
    });
});

server.listen(8999, function(){
    console.log('server running on 8999');
});
