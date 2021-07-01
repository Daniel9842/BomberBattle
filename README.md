# BomberBattle :bomb:
## Autor : Daniel Santiago Ducuara Ardila

## Resumen :exclamation:
BomberBattle es un juego multijugador de estrategia en el que el ganador de cada partida es
quien sobreviva a los múltiples ataques de sus enemigos.

## Descripción :page_facing_up:

BomberBattle está basado en el juego arcade Bomberman.

![Diseño Bomberman](Design/Bomberman.png "Bomberman")<br>

- Usuario: Cada jugador debe ingresar un nombre de usuario.
- Sala de juego: Cada usuario puede entrar a una sala de juego o crear su propia sala de juego a cada sala de 
  juego puede ingresar un máximo de ocho usuarios.
- Partida: Una vez empiece la partida los jugadores empezarán a eliminarse hasta que quede un usuario, a medida
  que avance el tiempo aparecerán en el mapa diversos poderes, una vez se vayan
  eliminando jugadores para agilizar la partida aparecerán bombas que eliminarán parte del mapa.
- Poderes: El juego contará diversos poderes que darán una ventaja al jugador.



## Historias de usuario :runner:

![Diseño userCase](Design/usercase.PNG "userCase")<br>


### Crear sala de juego

Como Usuario
Quiero Crear una sala de juego
Para que jugadores se unan a la partida.

criterios de aceptación
- No puede haber dos salas de juego con el mismo nombre.
- Cada sala debe tener como máximo 8 jugadores.
- Un usuario no puede estar en dos salas de juego al tiempo.

### Ingresar sala de juego

Como Usuario
Quiero ingresar a salas de juego
Para entrar a jugar una partida.
criterios de aceptación
Se deben ingresar si:
- La sala no está completa.
- La sala  no está en partida.

### Moverse por el mapa

Como Usuario
Quiero moverme por el mapa
Para poder colocar bombas en todo el mapa.
criterios de aceptación
El usuario debe poder moverse dentro del mapa.


### Colocar una bomba

Como Usuario
Quierocolocar una bomba
Para poder eliminar los demás usuarios.
criterios de aceptación
Se debe colocar una bomba cada 5 segundos y en zonas libres del mapa.
La bomba debe explotar según un tamaño y después de 3 segundos.

### Eliminar usuario

Como Usuario
Quieroeliminar usuarios
Para poder ganar la partida.
criterios de aceptación
El usuario debe quedar eliminado si el rango de una bomba lo alcanza.


### romper muro
Como Usuario
Quiero romper un muro
Paravpoder acceder a otras partes del mapa.
criterios de aceptación
El muro se rompe solamente con alguna bomba.