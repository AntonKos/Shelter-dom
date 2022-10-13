const Menu = () => `

<nav class="menu">
<header class="header header-main header-menu"><a name="home"></a>
   
  <div class="wrapper header__wrapper">
    <div class="header__logo">
      <h3 class="header__title"><a href="#" class="logo"> Cozy House</a></h3>
      <p class="header__text">Shelter for pets in Boston</p>
    </div>
  </div>
   
</header>
   <ol class="menu__items">
    <li class="menu__item"><a class="menu-link active" data-content="About the shelter" href="#about">About the shelter</a></li>
    <li class="menu__item"><a class="menu-link" data-content="Our pets" href="#pets">Our pets</a></li>
    <li class="menu__item"><a class="menu-link" data-content="Help the shelter" href="#help">Help the shelter</a></li>
    <li class="menu__item"><a class="menu-link" data-content="Contacts" href="#contacts">Contacts</a></li>
   </ol>
</nav>

`;

export default Menu;