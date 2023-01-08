
let form = document.getElementById("vacationCalc");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let city = e.target.destiny.value
    let days = e.target.days.value
    let car = e.target.car.value

    function dayshotel(days) {
        return 140 * days
    }

    function priceFly(city, days) {
        let price
        if (city == "barcelona" || city == "madrid") {
            price = 90;
        } else if (city == "sevilla") {
            price = 50;
        } else if (city == "valencia") {
            price = 40;
        }

        if (days > 3) {
            return price * 0.9
        } else {
            return price
        }
    }

    function carDays(car) {
        let costo = 40 * car

        if (car >= 7) {
            return costo -= 50
        } else if (car >= 3) {
            return costo = costo - 20
        } else {
            return costo
        }
    }

    function costeTotal(f, h, c) {
        let data = document.querySelector(".data");
        let total = f+h+c 
        data.innerText = total

       
    }
    costeTotal(dayshotel(days), priceFly(city, days), carDays(car));


})














//     function destinationCity(destiny) {
//         let coste = 0;
//         if (city == "barcelona" || destiny == "madrid") {
//             return coste = 90;
//         } else if (destiny == "sevilla") {
//             return coste = 50;
//         } else if ( destiny== "valencia") {
//             return coste = 40;
//         } else if (days > 3) {
//             return coste - 20;
//         } else {
//             (days > 7)
//             return coste - 50;
//         }
//     }
//    console.log(dayshotel(days));
// })




// function calcCost(e) {
//     e.preventDefault();
//     let data = document.createElement("div")
//     data.innerHTML =`<div class="container">span</div>`
//     data.appendChild(parent)
//     // let destiny = document.getElementsByName("destiny").values;
//     //     let  day = document.getElementsByName("days").values;
//     //     let cars = document.getElementsByName("car").values;




//           return data = dayshotel(hotelDays) + destinationCity(coste) + carDays(dayscar);

// }












