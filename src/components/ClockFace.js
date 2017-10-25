import React from 'react';
import PropTypes from 'prop-types';

const style = {
    row : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

};

const ClockFace = ({time}) => (
    <div style={style.row}>
        <h1>{time.getHours()}:</h1>
        <h1>{time.getMinutes()}:</h1>
        <h1>{time.getSeconds()}</h1>
    </div>
);

ClockFace.propTypes = {
    time: PropTypes.object
};

export default ClockFace;