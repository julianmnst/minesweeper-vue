# Minesweeper - Vue.js
## Intalación:
```
git clone https://github.com/julianmnst/minesweeper-vue.git
cd minesweeper-vue
npm i
```

## Iniciar el proyecto:
```
# Dev:
npm run serve

# Prod:
npm run build
# abrir dis/index.html
```
==================================


### Logs:

Para comenzar el proyecto usé el generador Vue Create.

Seguido hice limpieza del proyecto, y luego creé un boceto visual de los componentes principales del juego (tablero y celda).

Con dummy data defino qué propiedades necesito para la interacción entre celdas, en este caso las coordenadas en el tablero.

Empiezo por la lógica del componente celda y su interacción con el Store y un status del juego para indicar si el juego ha terminado.

Luego fui por la lógica del revelado de casilleros, y finalmente el feature del signo de interrogación.