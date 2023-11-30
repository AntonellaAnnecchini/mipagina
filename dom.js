let tLabial = document.querySelector('#titulo1')
let tRubor = document.querySelector('#titulo2')
let tDeliniador = document.querySelector('#titulo3')

let verMas1 = document.querySelector('#verMas1')
let verMas2 = document.querySelector('#verMas2')
let verMas3 = document.querySelector('#verMas3')

let tituloCambiada1 = false;
verMas1.onclick = function () {
    if (tituloCambiada1 == false) {
        tLabial.innerText = 'Existen muchos tipos de labiales: brillosos, cremosos, mates, con decoraciones, hidratantes, e incluso se encuentran con distintos olores y sabores. Se sabe que se viene usando desde hace alrededor de 5 000 años en la antigua Mesopotamia, cuando joyas semipreciosas eran trituradas y aplicadas a los labios y, ocasionalmente, alrededor de los ojos.'
        tituloCambiada1 = true
    } else {
        tLabial.innerText = 'Existen muchos tipos de labiales: brillosos, cremosos, mates, con decoraciones, hidratantes, e incluso se encuentran con distintos olores y sabores.'
        tituloCambiada1 = false
    }

}

let tituloCambiada2 = false;
verMas2.onclick = function () {
    if (tituloCambiada2 == false) {
        tRubor.innerText = 'La palabra suele utilizarse cuando el enrojecimiento se corresponde a una respuesta emocional, ante ciertas emociones productoras de ansiedad como la vergüenza, la culpa, la ansiedad, el nerviosismo, el amor, el miedo, la modestia, el enojo o el alcohol. El ruborizarse puede también estar asociado a estados de enamoramiento. Si el enrojecimiento continúa por un período prolongado después de haberse ruborizado, entonces puede corresponder a un síntoma indicativo de rosácea. El rubor puede ser también una manifestación de la enfermedad de Wernicke.'
        tituloCambiada2 = true
    } else {
        tRubor.innerText = 'La palabra suele utilizarse cuando el enrojecimiento se corresponde a una respuesta emocional, ante ciertas emociones productoras de ansiedad como la vergüenza, la culpa, la ansiedad, el nerviosismo, el amor, el miedo, la modestia, el enojo o el alcohol.'
        tituloCambiada2 = false
    }

}

let tituloCambiada3 = false;
verMas3.onclick = function () {
    if (tituloCambiada3 == false) {
        tDeliniador.innerText = 'El delineador de ojos es un cosmético y maquillaje utilizado para definir el contorno de los ojos. Se aplica alrededor del mismo para crear una variedad de ilusiones estéticas.Aunque es utilizado principalmente por las mujeres, actualmente también lo utilizan algunos hombres, y varias marcas han comenzado a sacar a la venta productos exclusivos para ellos.'
        tituloCambiada3 = true
    } else {
        tDeliniador.innerText = 'El delineador de ojos es un cosmético y maquillaje utilizado para definir el contorno de los ojos. Se aplica alrededor del mismo para crear una variedad de ilusiones estéticas.'
        tituloCambiada3 = false
    }

}