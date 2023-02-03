import IItem from "./IItem";
const ItemMain = (data:IItem) => `

<div class="carousel__item carousel__item_active" data-name="${data.name}">
    <img src=${data.image} class="carousel__image" alt="">
    <h4 class="carousel__title">${data.name}</h4>
    <div class="carousel__button">
      <button class="button button_bordered">Learn more</button>
    </div>
</div>

`;

export default ItemMain;

