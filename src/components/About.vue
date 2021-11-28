<template>
 <b-row class="container__about" sm="12" fluid>
    <b-row  class="text-center">
      <Title tilte='À propros'/>
  </b-row>
  <b-row class="flex-wrap" >
    <b-col  lg="5" sm="12">
      <b-img class="img-fluid container__about__photo m-2"
      center :src="EmmiePhoto" alt="Source code">
    </b-img></b-col>
    <b-col  class="offset-md-1" lg="6" sm="12">
      <b-row  class="mb-3 mt-3">
            <b-col><Icon icon="clarity:map-marker-line" class="logoColor"/>
            <span class="container__about__description">Kinshasa,RDCongo</span></b-col>
      </b-row>
      <b-row  class="mb-3 mt-3">
          <b-col><Icon icon="icon-park-outline:degree-hat" class="logoColor"/>
          <span class="container__about__description"> Bac+5, Informatique</span></b-col>
      </b-row>
      <b-row  class="mb-3 mt-3">
           <b-link href="mailto:mulangaemmanuella@gmail.com">
             <Icon icon="clarity:email-line" class="logoColor"/>
             mulangaemmanuella@gmail.com</b-link>
      </b-row>
      <b-row  class="mb-3 mt-3">
        <b-link href="https://github.com/emmie125/">  <Icon icon="akar-icons:github-outline-fill" class="logoColor"/>
          emmie125</b-link>
      </b-row>
      <b-row  class="mb-3 mt-3">
         <b-link href="tel:+243826370009">
            <Icon icon="akar-icons:phone" class="logoColor"/>+243826370009</b-link>
      </b-row>
      <b-row  class="m-2">
        <b-col class="justify-content-center container__about__description">
          <b-row class="justify-content-center mb-2 mt-2">
            Je m'appelle Emmanuella, je suis née à Kinshasa et
          j'y ai passé toute ma vie d’étudiante.
          J'aime la découverte et la technologie
          c'est pourquoi je suis diplômée en informatique depuis 2018
          de l'université de Kinshasa.</b-row>
          <b-row class="justify-content-center mb-2 mt-2">
            Etant passionnée par ce métier, j'ai également entrepris une
          formation dans le développement d'applications
          web mobile dont je suis titulaire d'une certification Bac+2
          en informatique de simplon à Kinshasa Digital Academy.</b-row>
        </b-col>
      </b-row>
      <b-row  class="m-2">
        <b-col>
          <Button text="Mes projets" name="skill"
         v-scroll-to="{
        el: '#projet',
        easing: 'easy',
        offset: -60,
        duration: 500,
      }" color="#F4E9E4" backgroundColor="#D60030" />
        </b-col>
      </b-row>
  </b-col>
  </b-row>
 </b-row>
</template>
<script>
import { Icon } from '@iconify/vue2';
import Title from './Title.vue';
import EmmiePhoto from '../assets/emmieProfil.jpeg';
import Button from './ButtonPrimary.vue';

export default {
  name: 'About',
  components: {
    Title,
    Icon,
    Button,
  },
  data() {
    return {
      EmmiePhoto,
    };
  },
};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 .container__about{
   background-color:$colorPrimary;
    @include paddingPages;
    &__photo{
     border:5px solid $colorSecondary;
    }
    &__description{
      color:black;
      font-size:18px;
    }
 }
 a{
   color: $colorPolice;
   font-size:18px;
  &:hover{
    color: $colorPolice;
  }
 }
 .logoColor{
   @include iconStyle;
   margin-right:23px;
 }
</style>
