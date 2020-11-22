<template>
  <Header/>
  <div class="main-screen">
    <div class="main-wrapper">
      <div class="main-text main-wrapper__text-container">
        <div class="main-text__title">{{title}}</div>
        <div class="main-text__subtitle">{{subTitle}}</div>
        <div class="main-text__button button-container">
          <button class="button-container__seeProjectButton" onclick="window.location='/contact'">
            {{buttonText.seeProjectButton}}
          </button>
        </div>
      </div>
      <div class="main-images">
        <img class="main-images__illustration" src="../assets/illustration.svg" alt=""/>
      </div>
    </div>
  </div>
  <div class="card-block">
    <div class="card-block__wrapper">
      <div class="card-block__column">
        <div class="card-block__title">
          {{cardBlockTitle}}
        </div>
        <div class="card card__second">
          <div class="card__image">
            <img src="../assets/secondCard.svg" alt=""/>
          </div>
          <div class="card__title">{{cards.secondCard.cardTitle}}</div>
          <div class="card__subtitle">{{cards.secondCard.cardSubtitle}}</div>
          <div class="card__button-container">
            <button class="card__button">{{buttonText.cardButton}}<img src="../assets/cardButtonIcon.svg" alt=""/></button>
          </div>
        </div>
      </div>
      <div class="card-block__column">
        <div class="card">
          <div class="card__image card__image-fix">
            <img src="../assets/firstCard.svg" alt=""/>
          </div>
          <div class="card__title">{{cards.firstCard.cardTitle}}</div>
          <div class="card__subtitle">{{cards.firstCard.cardSubtitle}}</div>
          <div class="card__button-container">
            <button class="card__button">{{buttonText.cardButton}}<img src="../assets/cardButtonIcon.svg" alt=""/></button>
          </div>
        </div>
        <div class="card">
          <div class="card__image">
            <img src="../assets/thirdCard.svg" alt=""/>
          </div>
          <div class="card__title">{{cards.thirdCard.cardTitle}}</div>
          <div class="card__subtitle">{{cards.thirdCard.cardSubtitle}}</div>
          <div class="card__button-container">
            <button class="card__button">{{buttonText.cardButton}}<img src="../assets/cardButtonIcon.svg" alt=""/></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="clients-block">
    <div class="clients-block__container">
      <div class="clients-block__title">
        {{clientsBlockTitle}}
      </div>
      <div class="clients-block__subtitle">
        {{clientsBlockSubtitle}}
      </div>
    </div>
    <div class="logo-table">
      <div class="logo-table__container">
        <div class="logo-table__cell">
          LOGO CLIENT 1
        </div>
        <div class="logo-table__cell">
          LOGO CLIENT 2
        </div>
        <div class="logo-table__cell">
          LOGO CLIENT 3
        </div>
        <div class="logo-table__cell">
          LOGO CLIENT 4
        </div>
        <div class="logo-table__cell">
          LOGO CLIENT 5
        </div>
        <div class="logo-table__cell">
          LOGO CLIENT 6
        </div>
        <div class="logo-table__cell">
          LOGO CLIENT 7
        </div>
        
          <button class="logo-table__cell">More Client</button>
        
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Content',
  components: {
    Header,
    Footer
  },
    data() {
      return {
        title: 'New Automation Tool for Your Home',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.',
        cardBlockTitle: 'What we do to help our client grow in digital era,',
        clientsBlockTitle: 'Our Beloved Client',
        clientsBlockSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        buttonText: {
          seeProjectButton: 'See Our Project',
          cardButton: 'Learn more'
        },
        cards: {
          firstCard: { 
                        cardTitle : 'Bring Technology To Your Comfrotable Home', 
                        cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                     },
          secondCard: {
                        cardTitle : 'Make Your business To Be Better Famous In Internet', 
                        cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      },
          thirdCard: {
                        cardTitle : 'Build Your Digital Product That Suitable For Your Need', 
                        cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      }            
        }
      }
    }
}
</script>

<style lang="sass" scoped>
@import url(//db.onlinewebfonts.com/c/d1243736bfe07b546f8f1e54e7804afb?family=Galien)

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

.main-screen
  width: 100%
  height: 100vh
  background: linear-gradient(0deg, #98c3e842 8.84%, rgba(152, 195, 232, 0) 31.12%)
  opacity: 1

.main-wrapper
  display: flex

.main-text
  display: flex
  flex-direction: column

.main-wrapper__text-container
  margin-left: 15.5%
  margin-top: 6.5%

.main-text__title
  @include setFontStyle(Galien, 64px, 74px, 0.04em, #1F3F68)
  font-weight: 700
  margin-right: -10%
  flex-grow: 1

.main-text__subtitle
  @include setFontStyle(Gilroy, 16px, 26px, 0.05em, #1F3F68)
  width: 90%
  font-weight: 500
  opacity: 0.6
  flex-grow: 2

.main-text__button
  flex-grow: 3
  margin-bottom: 3%

.main-images__illustration
  margin-left: -3.5%

.button-container__seeProjectButton
  @include setFontStyle(Gilroy, 16px, 26px, 0.04em, $white)
  background: #5A98D0
  box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2)
  border-radius: 10px
  text-align: center
  padding: 15px 48px

.card-block__wrapper
  margin-left: 15.5%
  margin-top: 14%
  display: flex
  flex-wrap: wrap
  width: 69%
  justify-content: space-between

.card-block__title
  @include setFontStyle(Gilroy, 36px, 46px, 0.05em, #316099)
  width: 100%

.card-block__column
  display: flex
  flex-direction: column
  width: 40.5%

.card:nth-child(2)
  margin-top: 28%

.card__second
  position: relative
  left: 21%
  top: 5%

.card
  position: relative
  background: #FFFFFF
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2)
  border-radius: 10px
  padding: 12%
  display: flex
  flex-wrap: wrap
  justify-content: center

.card__image
  display: flex
  justify-content: flex-end
  width: 125px

.card__image-fix
  justify-content: center
  align-items: flex-end
  height: 140px
  margin-left: 3%

.card__title
  @include setFontStyle(Gilroy, 20px, 30px, 0.05em, #1F3F68)
  font-weight: 700
  margin-top: 17%

.card__subtitle
  @include setFontStyle(Gilroy, 16px, 26px, 0.05em, #1F3F68)
  opacity: 0.6
  margin-top: 7%

.card__button-container
  width: 43%
  margin-right: auto
  margin-top: 10%

.card__button
  @include setFontStyle(Gilroy, 14px, 30px, 0.05em, #5A98D0)
  display: flex
  align-items: center
  width: 100%
  background: white
  justify-content: space-between

.clients-block
  background: #5A98D0
  border-radius: 200px 0px 0px 0px
  width: 100%
  padding-top: 7%
  margin-top: 15%

.clients-block__container
  display: flex
  justify-content: space-evenly

.clients-block__title
  @include setFontStyle(Gilroy, 36px, 46px, 0.05em, $white)
  width: 20%
  margin-left: 12.5%

.clients-block__subtitle
  @include setFontStyle(Gilroy, 16px, 26px, 0.05em, $white)
  font-weight: 500
  opacity: 0.6
  width: 40%
  margin-right: 17.5%

.logo-table__container
  display: flex
  flex-wrap: wrap
  width: 69%
  margin: 8% auto

.logo-table__cell
  @include setFontStyle(Gilroy, 20px, 46px, 0.02em, #F2F2F2)
  width: 25%
  height: 128px
  display: flex
  justify-content: center
  align-items: center

  &:nth-child(-n+3), &:nth-child(-n+7):nth-child(n+5)
    border-right: 2px solid #ffffff2d

  &:nth-child(-n+4)
    border-bottom: 2px solid #ffffff2d

  &:nth-child(8)
    background: #1f3f683a
</style>