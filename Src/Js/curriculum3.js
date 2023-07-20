// Obtener todos los elementos con la clase 'circle'
const circles = document.querySelectorAll('.rounded-circle'); //[circles]

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

function addCircle(percentageDecimal,totalCircles) {
    
    const filledCirclesCount = Math.round(percentageDecimal * totalCircles); //3
    for (let i = 0; i < totalCircles; i++) {
        // Si el índice (i) es menor que el número de círculos llenos, agregar la clase 'filled'
        if (i < filledCirclesCount) {
            circles[i].classList.add('filled');
        } else {
            // Si el índice (i) es mayor o igual al número de círculos llenos, quitar la clase 'filled'
            circles[i].classList.remove('filled');
        }
    }
}

highPorcentaje= 85/100
mediumPorcentaje = 50 /100
lowPorcentaje = 30/100

addCircle(mediumPorcentaje,totalCircles);


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