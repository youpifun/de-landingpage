<template>
    <Header/>
    <div class="head-text-block">
        <div class="head-text-block__container">
            <div class="head-text-block__title">
                {{title}}
            </div>
            <div class="head-text-block__subtitle">
                {{subtitle}}
            </div>
        </div>
    </div>
    <div class="contact-block">
        <div class="contact-block__info-column">
            <img class="contact-block__picture" src="../assets/ContactUsGirl.svg" alt=""/>
            <div class="contact-block__text-group text-group">
                <div class="text-group__title">
                    ADDRESS
                </div>
                <div class="text-group__text">
                    <div class="text-group__row">
                        {{addressText}}
                    </div>
                </div>
            </div>
            <div class="contact-block__text-group text-group">
                <div class="text-group__title">
                    PHONE
                </div>
                <div class="text-group__text">
                    <div class="text-group__row">
                        <img class="icon" src="../assets/ic_phone_24px.svg" alt=""/>{{telephoneNumbers.first}}
                    </div>
                    <div class="text-group__row">
                        <img class="icon" src="../assets/ic_phone_24px.svg" alt=""/>{{telephoneNumbers.second}}
                    </div>
                </div>
            </div>
           <div class="contact-block__text-group text-group">
                <div class="text-group__title">
                    ONLINE SERVICE
                </div>
                <div class="text-group__text">
                    <div class="text-group__row">
                        <img class="icon" src="../assets/ic_language_24px.svg" alt=""/>{{urls.site}}
                    </div>
                    <div class="text-group__row">
                        <img class="icon" src="../assets/ic_email_24px.svg" alt=""/>{{urls.mail}}
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-block__form-column">
             <div class="contact-block__form-title text-group__title">
                    SEND US MESSAGE
            </div>
            <form>
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input class=" form__input" name="name" placeholder="Your Name"/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class=" form__input" name="email" placeholder="Your Email"/>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <input class="form__input big-input" name="message" placeholder="Your Message"/>
                </div>
                <input class="form__input" type="submit" value="SUBMIT"/>
            </form>
        </div>
    </div>
    <div class="map-block">
        <div class="map-block__container">
            <img src="../assets/map.jpg" alt=""/>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    name: 'ContactUs',
    components: {
            Header,
            Footer
        },
    data() {
      return {
          title: 'Contact Us',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          addressText: 'Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.',
          telephoneNumbers: {
              first: '+62-812-7313-4321',
              second: '+62-817-000-1234'
          },
          urls: {
              site: 'www.afrianska.com',
              mail: 'hello.afrian@gmail.com'
          }
      }
    }
}
</script>

<style lang="sass" scoped>
  @font-face
    font-family: "Gilroy"
    src: url("../assets/fonts/Gilroy-ExtraBold.otf") format("opentype")
    font-style: Bold
    font-weight: 700

  @font-face
    font-family: "Gilroy"
    src: url("../assets/fonts/Gilroy-Light.otf") format("opentype")
    font-style: normal
    font-weight: 500

  $white: #FFFFFF

  @mixin setFontStyle($fontFamily, $fontSize, $lineHeight, $letterSpacing, $color) 
    font-family: $fontFamily
    font-size: $fontSize
    line-height: $lineHeight
    letter-spacing: $letterSpacing
    color: $color

  .head-text-block
    margin: 3% 0%
    background-image: url("../assets/ContactUsHead.svg")

  .contact-block
    margin-top: 4%
    display: flex
    justify-content: space-between

  .contact-block__info-column
    width: 29.5%
    margin-left: auto
    margin-top: 5%

  .contact-block__form-column
    margin-right: auto
    width: 39.5%
    background: #FFFFFF
    box-shadow: 5px 10px 50px rgba(16, 112, 177, 0.2)
    border-radius: 10px
    padding: 4% 4%

  .head-text-block__title
    @include setFontStyle(Gilroy, 44px, 74px, 0.04em, $white)
    padding-top: 3.5%
    text-align: center
    

  .contact-block__form-title
    top: 0.5%

  .head-text-block__subtitle
    @include setFontStyle(Gilroy, 20px, 30px, 0.04em, rgba(255, 255, 255, 0.6))
    padding: 1.5% 23% 3.5%
    text-align: center

  .text-group__title
    @include setFontStyle(Gilroy, 20px, 30px, 0.04em, #1F3F68)
    position: relative
    bottom: 4%
    font-weight: 500

  .text-group__row
    @include setFontStyle(Gilroy, 16px, 26px, 0.05em, #1F3F68)

  .text-group
    width: 80%

  .text-group__row
    margin-top: 5%
    opacity: 0.6
    display: flex

  .icon
    margin-right: 5%

  .form-group
    display: flex
    flex-direction: column
    justify-content: space-between

  .form__input
    width: 100%
    opacity: 0.4
    border: 1px solid #356EAD
    box-sizing: border-box
    border-radius: 10px
    padding: 5% 10%

  label, input
    @include setFontStyle(Gilroy, 16px, 30px, 0.04em, #1F3F68)
    opacity: 0.8

    &[type="submit"]
      background: #5A98D0
      box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2)
      border-radius: 10px
      color: white
      opacity: 1
      border: none
      margin-top: 17%

  label
    margin-top: 7%
    margin-bottom: 2%

  .big-input
    height: 21vh
    padding-bottom: 20%

  form
    margin-top: 5%

  .contact-block__info-column
    display: flex
    flex-wrap: wrap

  .contact-block__picture
    margin-top: -7%
    margin-left: 3%
    margin-bottom: 13%

  .map-block
    display: flex

  .map-block__container
    margin: 7% auto
</style>