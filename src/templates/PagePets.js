import ShadowWrapper from './ShadowWrapper';
import Menu from './Menu';
import HeaderPets from './HeaderPets';
import Footer from './Footer';
import FriendsPets from './FriendsPets';
import IconClose from './IconClose';
import PetsHamburger from './PetsHamburger';
import MenuPets from './MenuPets';


const PagePets = () => `
      ${ShadowWrapper()}
      <div class="popup">  </div>
      ${IconClose()}
      ${PetsHamburger()}
      ${HeaderPets()}
      ${MenuPets()}
      ${FriendsPets()}
      ${Footer()}
`;

export default PagePets;