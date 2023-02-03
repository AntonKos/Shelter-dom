import ICard from "./ICard";
const Popup = (data:ICard) => `

  <img class="popup__image" src=${data.img} alt="">
  <div class="popup__wrapper">
        <h3  class="popup__name">${data.name}</h3>
        <h4 class="popup__type-breed">${data.type} - ${data.breed}</h4>
        <h5 class="popup__description"> ${data.description} </h5>
        <ul class="popup__popup-list">
            <li class="popup__age"><span class="var">Age:</span> <span class="value">${data.age}</span></li>
            <li class="popup__inoculations"><span class="var">Inoculations:</span> <span class="value">${data.inoculations}</span></li>
            <li class="popup__diseases"><span class="var">Diseases:</span> <span class="value">${data.diseases}</span></li>
            <li class="popup__parasites"><span class="var">Parasites:</span> <span class="value">${data.parasites}</span></li>
        </ul>
  </div>

`;

export default Popup;