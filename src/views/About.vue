<template>
 <b-row class="container__About">
    <b-row  class="text-center">
    <Title tilte='À propros'/>
  </b-row>
  <b-row class="flex-wrap ">
    <b-col  lg="5" sm="12">
      <b-img class="img-fluid container__About__photo" center :src="EmmiePhoto" alt="Source code">
    </b-img></b-col>
    <b-col  lg="7" sm="12">
      <b-row  class="m-3">
         <b-col lg="2" sm="2">
           <Icon icon="gis:position" class="logoColor"/>
          </b-col>
          <b-col>3 of 3</b-col>
      </b-row>
      <b-row  class="m-3">
        <b-col lg="2" sm="2">
          <Icon icon="map:university" class="logoColor"/>
        </b-col>
        <b-col>3 of 3</b-col>
      </b-row>
      <b-row  class="m-3">
        <b-col lg="2" sm="2">
          <Icon icon="mdi:gmail" class="logoColor"/>
        </b-col>
        <b-col>3 of 3</b-col>
      </b-row>
      <b-row  class="m-3">
        <b-col lg="2" sm="2">
          <Icon icon="akar-icons:github-fill" class="logoColor"/>
        </b-col>
        <b-col>3 of 3</b-col>
      </b-row>
      <b-row  class="m-3">
        <b-col lg="2" sm="2">
          <Icon icon="bx:bxs-phone" class="logoColor"/>
        </b-col>
        <b-col>3 of 3</b-col>
      </b-row>
  </b-col>
  </b-row>
 </b-row>
</template>
<script>
import { Icon } from '@iconify/vue2';
import Title from '../components/Title.vue';
import EmmiePhoto from '../assets/emmieProfil.jpeg';

export default {
  name: 'About',
  components: {
    Title,
    Icon,
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
 .logoColor{
   @include iconStyle;
 }
</style>
