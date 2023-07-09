import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

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
  return (
      <Contenedor>
            <Header
              titulo='Cotizador de Seguro'
            />

            <ContenedorFormulario>
                <Formulario />

            </ContenedorFormulario>
      </Contenedor>
  );
}

export default App;
