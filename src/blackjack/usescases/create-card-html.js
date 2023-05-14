/**
 * 
 * @param {String} card 
 * @returns {HTMLImageElement} Imagen de retorno
 */
export const createCardHTML = (card) => {
    if (!card) throw new Error('El argumento card es obligatorio.');
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${card}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}