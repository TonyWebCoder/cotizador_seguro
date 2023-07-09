export function  getDiferenciaAños(year){
    return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
    let incremeto;

    switch (marca) {
        case 'europeo':
            incremeto = 1.30;
        case 'americano':
            incremeto = 1.15;
        case 'asiatico':
            incremeto = 1.05;
            break
        default:
            break;
    }
    return incremeto;
}

export function getPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

export  function primerMayusacula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}