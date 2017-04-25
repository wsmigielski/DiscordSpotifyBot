const Discord = require("discord.js");
const client = new Discord.Client();

var nodeSpotifyWebHelper = require('node-spotify-webhelper');
var spotify = new nodeSpotifyWebHelper.SpotifyWebHelper();
var config = require('./config.json');
var currentSong, newSong;

// Script for exiting the process is from https://frankl.in/code/before-exit-scripts-in-node-js

let preExit = [];

// Catch exit
process.stdin.resume();
process.on('exit', code => {
  let i;
  console.log('Process exit');
  for (i = 0; i < preExit.length; i++) {
    preExit[i](code);
  }
  client.user.setGame();
  process.exit(code);
});

// Catch CTRL+C
process.on('SIGINT', () => {
  console.log('\nCTRL+C...');
  process.exit(0);
});

// Catch uncaught exception
process.on('uncaughtException', err => {
  console.dir(err, {
    depth: null
  });
  process.exit(1);
});

// INSERT CODE
console.log('Bot on, hit CTRL+C to exit :)');

// Add pre-exit script
preExit.push(code => {
  console.log('Whoa! Exit code %d, cleaning up...', code);
});



spotify.getStatus(function(err, res) { //Initially sets your game to the current song
  if (err) {
    return console.error(err);
  }
  console.info(`Logged in as ${client.user.username}!`);
  console.info('currently playing:', res.track.artist_resource.name, '-', res.track.track_resource.name);

  currentSong = res.track.track_resource.name + ' - ' + res.track.artist_resource.name;
  client.user.setGame(currentSong);
});

setInterval(function(err, res) { //This Updates the song every 10 seconds
  spotify.getStatus(function(err, res) {
    if (err) {
      return console.error(err);
    }
    newSong = res.track.track_resource.name + ' - ' + res.track.artist_resource.name;
    if (newSong != currentSong) {
      client.user.setGame(newSong);
      console.info('currently playing:', res.track.artist_resource.name, '-', res.track.track_resource.name);
      currentSong = newSong;
    }
  });
}, 10000); //Change the value here to change how often the song is updated

client.login(config.token)
