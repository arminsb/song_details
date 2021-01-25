import { combineReducers } from "redux";

const songReducer = () => {
    return [
        { title: 'zimzim', duration: '4:20' },
        { title: 'behet qol midam', duration: '2:23' },
        { title: 'bigharar', duration: '5:46' },
        { title: 'gole yakh', duration: '4:00' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
});