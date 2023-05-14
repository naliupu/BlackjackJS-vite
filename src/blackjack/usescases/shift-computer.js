import { askCard, valueCard, createCardHTML } from './';
/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos.
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas.
 * @param {Array<String>} deck Array de la baraja de cartas.
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntosHTML son necesarios');

    let puntosComputadora = 0;
    do {
        const card = askCard(deck);
        console.log(card + "Linea 40");

        puntosComputadora = puntosComputadora + valueCard(card);
        puntosHTML.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = createCardHTML(card);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}