import ShadowWrapper from './ShadowWrapper';
import Menu from './Menu';
import HeaderMain from './HeaderMain';
import Footer from './Footer';
import Spinner from './Spinner';
import Promo from './Promo';
import About from './About';
import FriendsMain from './FriendsMain';
import Help from './Help';
import Addition from './Addition';
import IconClose from './IconClose';

const PageMain = () => `
    ${Spinner()}
    <div class="container">
      ${ShadowWrapper()}
        <div class="popup">  </div>
      ${IconClose()}
      ${HeaderMain()}
      ${Menu()}
      ${Promo()}
      ${About()}
      ${FriendsMain()}
      ${Help()}
      ${Addition()}
      ${Footer()}
    </div>
`;

export default PageMain;