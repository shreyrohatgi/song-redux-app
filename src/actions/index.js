// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const deleteSong = (title) => {
  return {
    type: "DELETE_SONG",
    payload: title,
  };
};
