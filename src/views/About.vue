<template>
 <b-row class="container__About" sm="12" fluid>
    <b-row  class="text-center">
      <Title tilte='À propros'/>
  </b-row>
  <b-row class="flex-wrap">
    <b-col  lg="5" sm="12">
      <b-img class="img-fluid container__About__photo m-2"
      center :src="EmmiePhoto" alt="Source code">
    </b-img></b-col>
    <b-col  lg="7" sm="12">
      <b-row  class="m-2">
         <b-col lg="2" sm="2">
           <Icon icon="gis:position" class="logoColor"/>
          </b-col >
          <b-col><p>Kinshasa,RDCongo</p></b-col>
      </b-row>
      <b-row  class="m-2">
        <b-col lg="2" sm="2">
          <Icon icon="map:university" class="logoColor"/>
        </b-col>
        <b-col><p>Bac +5, Informatique</p></b-col>
      </b-row>
      <b-row  class="m-2">
        <b-col lg="2" sm="2">
          <Icon icon="mdi:gmail" class="logoColor"/>
        </b-col>
         <b-col>
           <b-link href="mailto:mulangaemmanuella@gmail.com">mulangaemmanuella@gmail.com</b-link>
        </b-col>
      </b-row>
      <b-row  class="m-2">
        <b-col lg="2" sm="2">
          <Icon icon="akar-icons:github-fill" class="logoColor"/>
        </b-col>
        <b-col><b-link href="https://github.com/emmie125/">emmie125</b-link></b-col>
      </b-row>
      <b-row  class="m-2">
        <b-col lg="2" sm="2">
          <Icon icon="bx:bxs-phone" class="logoColor"/>
        </b-col>
        <b-col><b-link href="tel:+243826370009">+243826370009</b-link></b-col>
      </b-row>
      <b-row  class="m-2">
        <b-col class="justify-content-center">
          <p>Je m'appelle Emmanuella, je suis née à Kinshasa et
          j'y ai passé toute ma vie d’étudiante.
          J'aime la découverte et la technologie
          c'est pourquoi je suis diplômée en informatique depuis 2018 de l'université de Kinshasa.
          Etant passionnée par ce métier, j'ai également entrepris une
          formation dans le développement d'applications
          web mobile dont je suis titulaire d'une certification Bac+2
          en informatique de simplon à Kinshasa Digital Academy.</p>
        </b-col>
      </b-row>
      <b-row  class="m-2">
        <b-col>
          <Button name="project" text="Mes projets"
          color="#F4E9E4" backgroundColor="#D60030" />
        </b-col>
      </b-row>
  </b-col>
  </b-row>
 </b-row>
</template>
<script>
import { Icon } from '@iconify/vue2';
import Title from '../components/Title.vue';
import EmmiePhoto from '../assets/emmieProfil.jpeg';
import Button from '../components/ButtonPrimary.vue';

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
 .container__About{
   background-color:$colorPrimary;
    @include paddingPages;
    &__photo{
     border:5px solid $colorSecondary;
    }
 }
 p{
     color: $colorPolice;
     font-size:$textSize;
 }
 a{
   color: $colorPolice;
   font-size:$textSize;
  &:hover{
    color: $colorPolice;
  }
 }
 .logoColor{
   @include iconStyle;
 }
</style>
