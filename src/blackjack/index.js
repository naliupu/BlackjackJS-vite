import _ from 'underscore';
// import { crearDeck } from './usescases/create-deck';
// import { askCard } from './usescases/askCard';
// import { valueCard } from './usescases/valueCard';
// import { crearDeck as crearNuevoDeck } from './usescases/create-deck';// Se puede agregar un alias y llamarlo con ese nombre
import { askCard, valueCard, crearDeck, turnoComputadora, createCardHTML } from './usescases';
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const type = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');

deck = crearDeck(type, specialCards);//Deck es la baraja de cartas

// Eventos
btnPedir.addEventListener('click', () => {

    const card = askCard(deck);

    puntosJugador = puntosJugador + valueCard(card);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = createCardHTML(card);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);

    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(type, specialCards);

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});
