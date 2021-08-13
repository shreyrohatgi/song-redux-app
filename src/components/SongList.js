import React from "react";
import { connect } from "react-redux";
import { selectSong, deleteSong } from "../actions";

const SongList = (props) => {
  return (
    <div className='ui divided list'>
      {props.songs.map((song) => (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
            <button
              className='ui button primary'
              onClick={() => props.deleteSong(song.title)}
            >
              Delete
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong,
  deleteSong,
})(SongList);
