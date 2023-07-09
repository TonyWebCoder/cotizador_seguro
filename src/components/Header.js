import React from 'react';
import PropTypes from "prop-types";

const Header = ({titulo}) => {
    return (
        <header>
            <h1>{titulo}</h1>
        </header>
    );
}

Header.prototype = {
    titulo: PropTypes.string.isRequired
}
export default Header;