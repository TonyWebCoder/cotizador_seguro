import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";

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
const App = () => {
    const [resumen, setResumen] = useState({
        cotizacion: 0,
        datos: {
            marca: '',
            year:'',
            plan:''
    }
    });
    const {cotizacion, datos} = resumen;

    return (
      <Contenedor>
            <Header
              titulo='Cotizador de Seguro'
            />

            <ContenedorFormulario>
                <Formulario
                    setResumen = {setResumen}
                />
                <Resumen
                    datos = {datos}
                />
                <Resultado
                    cotizacion={cotizacion}
                />
            </ContenedorFormulario>
      </Contenedor>
  );
}

export default App;
