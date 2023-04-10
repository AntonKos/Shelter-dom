import IItem from "./IItem";
const ItemPets = (data:IItem) => `

<div class="paginate__item paginate__item_active" data-name="${data.name}">
    <img src=${data.img} class="paginate__image" alt="">
    <h4 class="paginate__title">${data.name}</h4>
    <div class="paginate__button">
    <button class="button button_bordered">Learn more</button>
</div>
</div>

`;

export default ItemPets;