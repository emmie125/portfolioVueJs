<template>
  <b-container class="bv-example-row" fluid>
  <b-row class="flex-wrap-reverse container__home">
    <b-col class="justify-content-center" lg="7" sm="12">
      <p>
        <span>J</span>e suis <br/>
        Emmanuella Mulanga</p>
      <h1>développeuse FullStack</h1>
      <Button name='about' text='Contactez-moi' />
    </b-col>
    <b-col lg="5" sm="12">
      <b-img class="img-fluid" center :src="SourceCode" alt="Source code">
    </b-img>
    </b-col>
  </b-row>
  <About/>
</b-container>
</template>

<script>
// @ is an alias to /src
import Button from '../components/ButtonPrimary.vue';
import SourceCode from '../assets/Source_code.gif';
import About from './About.vue';

export default {
  name: 'Home',
  components: {
    Button,
    About,
  },
  data() {
    return {
      SourceCode,
    };
  },
};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 .container__home{
   @include paddingPages;
 }
 p{
   align-items: center;
  font-size :4rem;
   color:$colorPolice;
   line-height: 4.5rem!important;
   span{
     font-size : 10rem;
     color:$colorSecondary;
   }
 }
  h1{
  align-items: center;
    font-size :4rem;
   color:$colorPolice;
   margin-bottom:3%;
   font-weight:none !important;
   }
</style>
