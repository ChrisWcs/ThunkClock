import React from 'react';
import PropTypes from 'prop-types';

const Clock = ({time, func}) => (
    <div>
        <h1>{time.toTimeString()}</h1>
        <button onClick={func}>start</button>
    </div>
);

Clock.propTypes = {
    time: PropTypes.object,
    func: PropTypes.func,
};

export default Clock;