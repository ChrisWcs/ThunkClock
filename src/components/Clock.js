import React from 'react';
import PropTypes from 'prop-types';

import ClockFace from './ClockFace';

const Clock = ({time, func}) => (
    <div>
        <ClockFace time={time}/>
        <button onClick={func}>start</button>
    </div>
);

Clock.propTypes = {
    time: PropTypes.object,
    func: PropTypes.func,
};

export default Clock;