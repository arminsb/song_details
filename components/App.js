import React from 'react';
import SongDetail from './SongDetail';
//import { selectedSong } from '../actions/index';  //commented beacuse of never used warning
import SongList from './SongList';

const myfunction = () => {
    return (
        <div className='ui container grid' style={{ marginTop: '10px' }}>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList />
                </div>
                <div className='column eight wide'>
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default myfunction;