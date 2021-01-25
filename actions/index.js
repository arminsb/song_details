// Action creator
export const selectedSong = song => {
    //return an action
    return {
        type: 'SONG_SELECTED', //required
        payload: song, //optional
    };
};
