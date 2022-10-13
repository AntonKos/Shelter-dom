const Footer = () => `

<footer class="footer"><a name="contacts"></a>
<div class="wrapper footer__wrapper">
    <div class="layout-3-column">
       <div class="contacts">
           <h2 class="contacts__title">For questions and suggestions</h2>
           <div class="email">
               <div class="email__icon">
                   <a class="email__link" href="mailto:email@shelter.com">
                     <span class="ico ico-email"></span>
                   </a>
               </div>
               <p class="adress__text"> <a class="email__link" href="mailto:email@shelter.com"> email@shelter.com</a></p>
           </div>
           <div class="phone">
               <div class="phone__icon">
                   <a href="tel:+13 674 567 75 54">
                       <span class="ico ico-phone"></span>
                   </a>
               </div>
               <p class="adress__text"> <a class="phone__link" href="tel:+13 674 567 75 54">+13 674 567 75 54</a></p>
           </div>
        </div> 

        <div class="adress">
           <h2 class="adress__title">We are waiting for your visit</h2>

           <div class="point">
               <div class="point-icon point__icon">
                   <a target="_blank" href="https://www.google.ru/maps/@40.2711115,9.1931781,9.5z?hl=ru">
                       <span class="ico ico-point"></span>
                   </a>
               </div>
               <p class="adress__text"> <a class="point__link" target="_blank" href="https://www.google.ru/maps/@40.2711115,9.1931781,9.5z?hl=ru"> 1 Central Street, Boston (entrance from the store)</a></p>
           </div>
           <div class="point">
               <div class="point-icon point__icon">
                   <a target="_blank" href="https://www.google.ru/maps/@40.2711115,9.1931781,9.5z?hl=ru">
                       <span class="ico ico-point"></span>
                   </a>
               </div>
               <p class="adress__text"> <a target="_blank" href="https://www.google.ru/maps/@40.2711115,9.1931781,9.5z?hl=ru" class="point__link">18 South Park, London </a></p>
           </div>

        </div> 

        <img src="footer-puppy.png" class="contacts__image" alt="waiting-dog">
    </div>
</div>
</footer>

`;

export default Footer;