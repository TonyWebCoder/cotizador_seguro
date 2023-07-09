import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";

import styled from '@emotion/styled';


const Contenedor = styled.div`
  background-color: aqua;
  max-width: 600px;
  margin: 0 auto;
  `;

const ContenedorFormulario = styled.div `
  background-color: #FFF;
  padding: 3rem;
`;
function App() {
    const [resumen, setResumen] = useState({});
    const {datos} = resumen;

    return (
      <Contenedor>
            <Header
              titulo='Cotizador de Seguro'
            />

            <ContenedorFormulario>
                <Formulario
                    setResumen = {setResumen}
                />
                {datos ? (<Resumen />) : null}

            </ContenedorFormulario>
      </Contenedor>
  );
}

export default App;
