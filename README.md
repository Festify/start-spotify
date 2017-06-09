# start-spotify
A node script that launches the Spotify desktop application

## Usage
```js
const startSpotify = require('start-spotify');

startSpotify()
    .then(() => console.log("Spotify is running!"))
    .catch(err => console.log("Oh, no!"));
```
