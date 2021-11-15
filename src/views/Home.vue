<template>
  <b-container class="bv-example-row" fluid>
  <HomeComponent/>
  <About/>
</b-container>
</template>

<script>
// @ is an alias to /src
import About from './About.vue';
import HomeComponent from '../components/HomeComponent.vue';

export default {
  name: 'Home',
  components: {
    About,
    HomeComponent,
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 .container__home{
   @include paddingPages;
 }
 .container__home__presentation{
   margin-top:4rem;
 }
 p{
   align-items: center;
  font-size :4rem;
   color:$colorPolice;
   line-height: 5rem;
   span{
     font-size : 10rem;
     color:$colorSecondary;
   }
 }
  h1{
    font-size :4rem;
   color:$colorPolice;
   margin-bottom:3%;
   font-weight:none !important;
   }
</style>
