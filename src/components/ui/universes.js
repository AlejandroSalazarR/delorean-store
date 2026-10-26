import { CHIBIS } from '../preloader/chibis'

const chibi = (name) => CHIBIS.find((c) => c.name === name)

// Universos que se revelan al hacer scroll, en orden de arriba hacia abajo.
// main = sprite grande (parallax); side = sprite secundario opcional; wash = tono de fondo.
export const UNIVERSES = [
  { id: 'dragon-ball', name: 'Dragon Ball', main: chibi('Goku'), side: chibi('Vegeta') },
  { id: 'pokemon', name: 'Pokémon', main: chibi('Pikachu'), side: chibi('Gengar') },
  { id: 'one-piece', name: 'One Piece', main: chibi('Luffy'), side: chibi('Zoro') },
  { id: 'demon-slayer', name: 'Demon Slayer', main: chibi('Tanjiro'), side: null },
  { id: 'naruto', name: 'Naruto', main: chibi('Naruto'), side: null },
]
