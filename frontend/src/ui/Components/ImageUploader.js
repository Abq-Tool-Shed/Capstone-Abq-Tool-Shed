import React from 'react';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

const App = () => {

    return (
        <div style={{
            display: 'flex',
            margin: 'auto',
            flexWrap: 'wrap',
        }}>

            <input accept="image/*" id="icon-button-file"
                   type="file" style={{ display: 'none' }} />
            <label  htmlFor="icon-button-file">
                <IconButton style={{border: 'black',height: 300, width: 300, }}  color="primary" aria-label="upload picture"
                            component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </div>
    );
}

export default App;