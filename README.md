# Playlistmaker - Audius API excercise with React

This a small excercise with React.js using [Audius API](https://audiusproject.github.io/api-docs/#audius-api-docs)
The original plan was to provide the user with ability to search tracks by mood and genre..
But the API is limited to using only one query string that "blindly" searches all metadata.

The app is currently written on one single JS file but can easily be refactored into smaller components.

## installation
```
    npm install
```

The App was compiled from scratch and no boilerplates were used and as such has very little "excess bloat" packages.

### Search Bar

The apllication's most prominent element is the search bar that expects a user input and an "enter key press", after which:
- makes an *axios* request
- Reads the results into React's **state**
- Renders JSX for each resulting element into the "track grid"

### Track Grid

This Grid View represents all the results from the latest search. It generates a "card" for each result and provides a button
that adds the respected track to a playlist

### Playlist

Under the search bar, a playlist view is generated. Small icons that show the genre of the added track and its respected title
To the top right-hand side an **X** icon appears that deletes the respected track from the playlist.

I made a short video describing the functionality [here]https://youtu.be/4CWTQ4_czcE)