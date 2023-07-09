import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { primerMayusacula} from "../helper";

const ContenedorResumen = styled.div `
  padding:  1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`;
function Resumen(props) {
    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                  <li>Marca:{primerMayusacula(marca)} </li>
                  <li>Plan:{primerMayusacula(plan)} </li>
                  <li>Año del Auto:{primerMayusacula(year)} </li>
            </ul>
        </ContenedorResumen>
    );
}
Resumen.propTypes = {

};

export default Resumen;