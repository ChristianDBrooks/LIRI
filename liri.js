// SETUP

require('dotenv').config();
// Pulling local files.
var keys = require("./keys")
// Requiring Packages
var request = require('request');
var fs = require('file-system')
var moment = require('moment');
var Spotify = require('node-spotify-api');
// Pushing keys to spotify api
var spotify = new Spotify(keys.spotify);

 switch(process.argv[2]) {
    case 'concert-this':
        concert()
        break;
    case 'spotify-this-song':
        spotify()
        break;
    case 'movie-this':
        movie()
        break;
    case 'do-what-it-says':
        doWhatItSays()
        break;
}

function concert() {
    var artist = process.argv[3]
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function(err, response, body) {
        console.log("\n==============================================================\n")
        console.log('The next concert is "' + JSON.parse(body)[0].venue.name + '"');
        console.log('This concert is in: ' + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region);
        var Date = JSON.parse(body)[0].datetime;
        var date = moment(Date.substring(0, Date.indexOf("T"))).format("MM/DD/YYYY");
        console.log('Date: ' + date);
        console.log("\n==============================================================\n")
    })
}

// function spotify() {

// }

// function movie() {
    
// }

// function doWhatItSays() {
    
// }