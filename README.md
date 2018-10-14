# LIRI

[SCREENSHOTS] (screenshots/)

**Commands**

**'node liri.js concert-this artist name'**

Description:

This command returns the following information correlating to the "arist name" given.
- The venue of the next concert the artist you entered will be performing at.
- The location of the venue
- The date of the concert.

Make sure to provide and artist because if you do not it will not work.

**'node liri.js spotify-this-song[ name of song]'**

Description:

This command returns 3 results for the following information correlating to the "song name" given.
- Artist(s)
- The song's name
- A preview link of the song from Spotify
- A preview link of the song from Spotify
- The album that the song is from

If no song is provided information for the default song, "The Sign", will be provided.

**'node liri.js movie-this[ name of movie]'**

Description:

This command returns the following information correlating to the "movie name" given.

- Title of the movie
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.

If no movie title is provided information for the default movie, "Mr. Nobody", will be provided.

**'node liri.js do-what-it-says'**

This command is a unique command that will read command lines from a file called random.txt.

By default random.txt is filled with "'spotify-this-song','I Want it That Way'".

So by default it will run the spotify-this-song command and return the correlating data for the song "I want it That Way".