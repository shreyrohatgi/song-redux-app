import { combineReducers } from "redux";

const songs = [
  {
    title: "No Scrubs",
    duration: "4:05",
  },
  {
    title: "Macarena",
    duration: "2:30",
  },
  {
    title: "All Star",
    duration: "3:15",
  },
  {
    title: "I Want it That Way",
    duration: "1:45",
  },
];

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else if (action.type === "DELETE_SONG") {
    if (selectedSong !== null) {
      if (selectedSong.title === action.payload) {
        selectedSong = null;
        return selectedSong;
      }
    }
  }

  return selectedSong;
};

const songsReducer = (gaane = songs, action) => {
  if (action.type === "DELETE_SONG") {
    return [...gaane.filter((song) => song.title !== action.payload)];
  } else if (action.type === "SONG_SELECTED") {
    return [...gaane];
  }
  return songs;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
