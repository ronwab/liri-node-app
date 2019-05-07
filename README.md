# Liri Node app

Setup:
Below are a series of steps that the user has to follow to successfully setup the Liri-app
1. Download node from https://nodejs.org/en/download/ and install it on your computer.
2. While on the repo click the clone button.
3. Run git repo <repo-name>
4. Run npm install to get all the necessary npm packages.
5. Create a .env file. Add the following keys
   a. SPOTIFY_ID=<spotify id>
   b. SPOTIFY_SECRET=<spotify secret>
   c. OMDB_API_KEY= <omdb api key>
   d. BANDS_IN_TOWN_API_KEY =<band in town api key>
  
Running the app
OMDB .
Within the terminal, 
1. Type the following command  node liri.js movie-this enter movie title when prompted movie-this ex node movie-this RED . click enter
2. The following info is returned in the console
      MovieTitle: RED 
      Year Released: 15 Oct 2010
      Ratings: 71%
      Actors: Bruce Willis, Mary-Louise Parker, Heidi von Palleske, Jefferson Brown
3. If user does not enter a movie title, the default movie returned is  Mr.Nobody
  http://www.omdbapi.com/?apikey=7516c38&t=Mr. Nobody 
      movieTitle: Mr. Nobody
      Year: 26 Sep 2013
      IMDBRating: 7.8
      RottenTomatoeRating: 67%
      Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham
      
      
      
Bands in town
Within the terminal, 
1. Type the following command  node liri.js  concert-this <band_name> ex node liri.js  concert-this Maroon 5. Click enter.
2. The following info is returned in the console
            Band Name: Maroon 5 
                Concert Venue: Mollenpark
                Concert city: Aalborg
                Concert Date: 2019-06-01T19:00:44
        
Spotify App 
Within the terminal, 
1. Type the following command  node liri.js spotify-this-song <song title> ex. node liri.js spotify-this-song stand by me
2. the following info is returned
      
          Track title: "stand by me";
          Artist Name: Ben E. King;
          Preview URL: https://p.scdn.co/mp3-preview/94e1e88bd6e967752a5030b1cca3fff3beae8dce?cid=6d610c3ab48a4a19aec96f083c94b53c;
          Album: Pain In My Heart;
  
  
Do what it says
Within the terminal, 
1. Type the following command  node liri.js do-what-it-says Click enter.
The following info is returned

          Track title: "I want it that way";
          Artist Name: Backstreet Boys;
          Preview URL: https://p.scdn.co/mp3-preview/b8c2410a5acb68b462be6ac85f1312430e2b149c?cid=6d610c3ab48a4a19aec96f083c94b53c;
          Album: Millennium;
  

  
 
      
