// Obtener todos los elementos con la clase 'circle'
const circles = document.querySelectorAll('.rounded-circle'); //[circles]
let data = []
let fullData = []
let puntuacion = [
    1,
    2,
    3,
    4,
    2,
    3,
    4
]
if (circles.length % 5 !== 0) {
    alert("Cantidad de bolitas no es divisible por 5");
}
for (let i = 0; i <= circles.length; i++) {
    if (i % 5 == 0 && i !== 0) {
        fullData.push([data, puntuacion[i / 5]])
        data = []
    }
    data.push(circles[i])
}

const nums = 0;
// Porcentaje de progreso (cambiar este valor para ajustar el progreso)
const percentage = 20;

// Calcular el porcentaje de círculos que deben estar llenos
const percentageDecimal = percentage / 100; //0.5

// Calcular cuántos círculos deben estar llenos en función del porcentaje
const totalCircles = circles.length; //6

// const filledCirclesCount = Math.round(percentageDecimal * totalCircles); //3
//const filledCirclesCount = Math.round((percentage / 100) * circles.length);
// Recorrer todos los círculos


//[oooooo]
function addCircle_eduardo(data) {
    data.forEach(vector => {
        for (let j = 0; j < vector[1]; j++) {
            for (let i = 0; i < vector[0].length; i++) {
                if (i>=j) {
                    vector[0][i].classList.add('filled')
                }else{
                    vector[0][i].classList.remove('filled')
                }
                
            }
        }
    })
}
//
function addCircle(percentageDecimal, totalCircles) {

    const filledCirclesCount = Math.round(percentageDecimal * totalCircles); //3
    for (let i = 0; i < totalCircles - 1; i++) {
        // Si el índice (i) es menor que el número de círculos llenos, agregar la clase 'filled'
        if (i < filledCirclesCount) {
            circles[i].classList.add('filled');
        } else {
            // Si el índice (i) es mayor o igual al número de círculos llenos, quitar la clase 'filled'
            circles[i].classList.remove('filled');
        }
    }
}

highPorcentaje = 85 / 100
mediumPorcentaje = 50 / 100
lowPorcentaje = 30 / 100
addCircle_eduardo(fullData)
//addCircle(highPorcentaje,totalCircles);


// for (let i = 0; i < totalCircles; i++) {
//     // Si el índice (i) es menor que el número de círculos llenos, agregar la clase 'filled'
//     if (i < filledCirclesCount) {
//         circles[i].classList.add('filled');
//     } else {
//         // Si el índice (i) es mayor o igual al número de círculos llenos, quitar la clase 'filled'
//         circles[i].classList.remove('filled');
//     }
// }





// addChild(){
//     const progressBar =document.querySelector('progress-bar' );
//     const createCircle = document.createElement("p");

//     createCircle.
//  progressBar.appen()
// }


















// const parent = document.querySelector('progress-bar')
// parent.append(circles);


// function addCircles(percentage,circles){
//     const f = Math.round((percentage/100)*circles.length)
//     for (let i = 0; i < circles.length; i++) {
//         // Si el índice (i) es menor que el número de círculos llenos, agregar la clase 'filled'
//         if (i < f) {
//             circles[i].classList.add('filled');
//         } else {
//             // Si el índice (i) es mayor o igual al número de círculos llenos, quitar la clase 'filled'
//             circles[i].classList.remove('filled');
//         }
//     }
// }