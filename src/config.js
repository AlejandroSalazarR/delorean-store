// Número de PRUEBAS (formato internacional, sin +). Cambiarlo por el de la tienda al salir a producción.
export const WHATSAPP_NUMBER = '573046737342'
export const WHATSAPP_LABEL = '+57 304 673 7342'
export const FREE_SHIPPING_FROM = 200000

export const formatPrice = (n) => `$${n.toLocaleString('en-US')}`

// Delorean Rewards: 1 punto por cada $100 COP.
export const pointsFor = (cop) => Math.floor(cop / 100)
