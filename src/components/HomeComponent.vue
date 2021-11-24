<template>
   <b-row class="flex-wrap-reverse container__home">
    <b-col class="container__home__presentation justify-content-center "
    lg="7" sm="12" fluid>
      <p>
        <span>Bonjour, Je suis</span> <br/>
        Emmanuella Mulanga</p>
      <h1>Développeuse FullStack</h1>
     <Button class="m-2" name="home"
     v-scroll-to="{
        el: '#about',
        easing: 'easy',
        offset: -60,
        duration: 500,
      }" text='Contactez-moi' />
    </b-col>
    <b-col  lg="5" class="container__home__image" fluid>
      <b-img class="img-fluid" center :src="SourceCode" alt="Source code">
    </b-img>
    </b-col>
  </b-row>
</template>
<script>
// @ is an alias to /src
import Button from './ButtonPrimary.vue';
import SourceCode from '../assets/Source_code.gif';

export default {
  name: 'HomeComponent',
  components: {
    Button,
  },
  data() {
    return {
      SourceCode,
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 .container__home__presentation{
   margin-top:4rem;
   padding:0% 5%;
   padding-bottom:5%;
 }

 p{
  font-size :3rem;
   color:$colorPolice;
   line-height: 5rem;
   span{
     font-size : 5rem;
     color:$colorSecondary;
   }
 }
  h1{
    font-size :3rem;
   color:$colorPolice;
   margin-bottom:3%;
   font-weight:none !important;
   }
   @media screen and (max-width: 1280px)
{
  .container__home__image{
    display:none;
  }
  .container__home__presentation{
   margin-top:8rem;
   padding-bottom: 5rem;
   align-items: center;
 }
 .container__home__presentation{
    align-content: center !important;
 }
  p{
  font-size :3rem;
   color:$colorPolice;
   line-height: 5rem;
   span{
     font-size : 5rem;
     color:$colorSecondary;
   }
 }
 h1{
    font-size :3rem;
   color:$colorPolice;
   margin-bottom:3%;
   font-weight:none !important;
   }
 }
</style>
