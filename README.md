[![Stories in Ready](https://badge.waffle.io/wsmigielski/DiscordSpotifyBot.png?label=ready&title=Ready)](https://waffle.io/wsmigielski/DiscordSpotifyBot)
# Discord Spotify Bot
Updates the game you are playing to the current song playing on your Spotify app.  
Just a simple bot I made for fun using https://discord.js.org/#/ and https://github.com/nadavbar/node-spotify-webhelper
## How to install
To install and run this bot you will need the nodejs installed https://nodejs.org/en/  
You will have to download the DiscordSpotifyBot v1.2 folder https://github.com/wsmigielski/DiscordSpotifyBot/archive/v1.2.zip  
Unzip the file.  
Next you will need to find you client token.  
To do this press `Ctrl + Shift + I` while on your discord app.  
Then proceed to find the token and copy it.  
![How to find the token](https://cloud.githubusercontent.com/assets/9850907/23435366/401bf38e-fdff-11e6-872c-127119a2a3d1.png)  
<!-- ![To see where to put the token click here](https://cloud.githubusercontent.com/assets/9850907/23435333/2cab26f8-fdff-11e6-91d1-c0eac5b1d25d.png)    -->
Put the token in the config file "" where it says user token.  
Firstly you want to run the install.bat file to install all the required dependencies.
Then just run the run.bat whenever you want to run the bot.
To exit the bot just use CTRL-C in the Command Prompt where the process is running.
<!-- Save the file and `shift right-click` where the bot.js file is and click on open command window here.
Type `npm install` and enter to install the required dependencies.
Then just type `node bot.js` and press enter in the console. -->

### Known Issues
Bot crashing when user is on a private session on Spotify.
Bot crashing when streamer mode is on within discord.
The bot will not show you as playing the current song on Spotify on your own discord client, however other people will see it. You also need to clear all your custom set games till the point where it is saying no game detected.
