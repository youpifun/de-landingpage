<template>
  <div class="footer">
    <div class="footer__main-info">
      <div class="text-block">
        <div class="text-block__title">
          {{title}}
        </div>
        <div class="text-block__subtitle">
          {{subtitle}}
        </div>
      </div>
      <div class="button-container">
        <button class="button-container__button" onclick="window.location='/contact'">{{buttonText}}</button>
      </div>
    </div>
    <hr class="lane"/>
    <div class="company-info">
      <div class="company-info__wrapper">
        <div class="company-info__information-block">
          <div class="company-info__logo-block">
            <div class="logo">
              <img src="../assets/FooterLogo.svg"/>
            </div>
            <div class="company-name">
              {{companyName}}
            </div>
          </div>
          <div class="row">
            <div class="row__symbol">
              A.
            </div>
            <div class="row__text-information">
              {{aboutUsPhrase}}
            </div>
          </div>
          <div class="row">
            <div class="row__symbol">
              T.
            </div>
            <div class="row__text-information">
              {{phoneNumber}}
            </div>
          </div>
          <div class="row">
            <div class="row__symbol">
              E.
            </div>
            <div class="row__text-information">
              {{email}}
            </div>
          </div>
        </div>
        <div class="links-block">
          <div class="links-block__column">
            <div class="column-head">
              About US
            </div>
            <div class="links">
              <a href="">About</a>
              <a href="">What We Do</a>
              <a href="">Project</a>
              <a href="">How It Work With Us</a>
            </div>
          </div>
          <div class="links-block__column">
            <div class="column-head">
              Follow US
            </div>
            <div class="links">
              <a href="">Instagram</a>
              <a href="">Facebook</a>
              <a href="">Linkedln</a>
              <a href="">Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="copyright-block">
        {{copyrightText}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
    data() {
      return {
        title: 'Intersted to woek with our team?',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        buttonText: 'Let’s Talk',
        email: 'hello.afrian@gmail.com',
        phoneNumber: '+62-812-7313-4321',
        aboutUsPhrase: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        companyName: 'Afrianska',
        copyrightText: '2019 © Afrianska. All rights reserved.'
      }
    }
}
</script>

<style lang="sass" scoped>
  $white: #FFFFFF

  @mixin setFontStyle($fontFamily, $fontSize, $lineHeight, $letterSpacing, $color) 
    font-family: $fontFamily
    font-size: $fontSize
    line-height: $lineHeight
    letter-spacing: $letterSpacing
    color: $color

  .footer
    position: relative
    width: 93%
    padding: 6.5% 14.5% 6% 15.5%
    left: 0
    bottom: 0
    background: #316099
    border-radius: 0px 200px 0px 0px

  .footer__main-info
    position: relative
    display: flex

  .text-block
    display: flex
    flex-wrap: wrap
    width: 55%

  .text-block__title
    @include setFontStyle(Gilroy, 36px, 46px, 0.05em, $white)
    width: 80%

  .text-block__subtitle
    @include setFontStyle(Gilroy, 16px, 26px, 0.05em, $white)
    opacity: 0.6
    margin-top: 7%

  .button-container
    width: 45%
    display: flex
    justify-content: flex-end
    align-items: center

  .button-container__button
    @include setFontStyle(Gilroy, 16px, 26px, 0.04em, $white)
    background: #5A98D0
    border-radius: 10px
    width: 57%
    height: 28%
    text-align: center

  .lane
    opacity: 0.2
    border: 1px solid #FFFFFF
    margin-left: -25%
    margin-top: 11%

  .company-name
    @include setFontStyle(Gilroy, 28px, 46px, 0.02em, $white)

  .row__text-information, .row__symbol, a, .copyright-block
    @include setFontStyle(Gilroy, 16px, 26px, 0.05em, $white)
    text-decoration: none

  .row__symbol
    margin-right: 7%

  .company-info__wrapper
    margin-top: 10%
    display: flex
    margin-bottom: 7%

  .column-head
    @include setFontStyle(Gilroy, 20px, 30px, 0.05em, $white)
    margin-bottom: 25px
    margin-top: 5%

  .row
    display: flex
    margin-top: 6%

  .links-block
    display: flex
    width: 60%
    justify-content: space-evenly
    margin-right: 6%

  .links-block__column
    flex-direction: column

  .links
    display: flex
    flex-direction: column

  .company-info__information-block
    display: flex
    flex-direction: column
    justify-content: space-evenly
    width: 40%

  .company-info__logo-block
    display: flex
    justify-content: space-between
    width: 57%
    margin-top: 2%
    margin-bottom: 2%

  a
    margin-top: 15px

  .copyright-block
    opacity: 0.4
</style>