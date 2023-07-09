import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css'

const Spinner = props => {
    return (
        <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>

    )}

Spinner.propTypes = {
    
};

export default Spinner;