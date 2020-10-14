let formsButton = document.querySelector('.forms_button');
let modalHotel = document.querySelector('.modal_hotel');

// formsButton.onclick = function () {
//     modalHotel.classList.toggle('modal_hotel_active');
// }
formsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalHotel.classList.toggle('modal_hotel_active');
  });