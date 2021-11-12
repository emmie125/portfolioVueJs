<template>
  <b-container class="bv-example-row " fluid>
  <b-row class="justify-content-md-center p-3">
    <b-col cols="7">
      <p>
        <span>J</span>e suis <br/>
      Emmanuella Mulanga
      développeuse fullStack<br/>
      </p>
      <Button name='about' text='Contactez-moi' />
    </b-col>
    <b-col cols="5"><img :src="SourceCode"></b-col>
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
 p{
   align-items: center;
   font-size : 60px;
   color:$colorPolice;
   span{
     font-size : 120px !important;
     color:$colorSecondary;
   }
 }
</style>
