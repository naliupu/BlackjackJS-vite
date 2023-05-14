import _ from 'underscore';//import shuffle from 'underscore';
/**
 * Esta función crea un nuevo deck(Baraja)
 * @param {Array<String>} typeOfCard Ejemplo: ['C','D','H','S']
 * @param {Array<String>} specialCards Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (typeOfCard, specialCards) => {//Se exporta la clase para poder leer el metodo en index.js

    if (!typeOfCard || typeOfCard.length === 0)
        throw new Error('Tipo de carta es obligatorio, como un arreglo de string');
    if (!specialCards || specialCards.length === 0)
        throw new Error('Tipo de carta es obligatorio, como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let type of typeOfCard) {
            deck.push(i + type);
        }
    }

    for (let type of typeOfCard) {
        for (let esp of specialCards) {
            deck.push(esp + type);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}
// export default crearDeck;//Exportar por defecto