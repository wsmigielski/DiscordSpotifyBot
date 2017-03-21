const Discord = require("discord.js");
const client = new Discord.Client();

var nodeSpotifyWebHelper = require('node-spotify-webhelper');
var spotify = new nodeSpotifyWebHelper.SpotifyWebHelper();
var currentSong;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});

spotify.getStatus(function(err, res) { //Initially sets your game to the current song
    if (err) {
        return console.error(err);
    }

    console.info('currently playing:', res.track.artist_resource.name, '-', res.track.track_resource.name);

    currentSong = res.track.track_resource.name + ' - ' + res.track.artist_resource.name;
    client.user.setGame(currentSong);
});

setInterval(function(err, res) { //This Updates the song every 60 seconds
    spotify.getStatus(function(err, res) {
        if (err) {
            return console.error(err);
        }
        console.info('currently playing:', res.track.artist_resource.name, '-', res.track.track_resource.name);

        currentSong = res.track.track_resource.name + ' - ' + res.track.artist_resource.name;
        client.user.setGame(currentSong);
    });
}, 60000); //Change the value here to change how often the song is updated

client.login('User Token')
