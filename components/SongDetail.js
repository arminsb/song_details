import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({ song }) => { //or = (props) =>
    if (!song) return <h5>please select a song!</h5>;
    return (
        <div>
            <h3>Deatails for:</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);


